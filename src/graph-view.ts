import { dia, shapes } from '@joint/core';
import { Menu } from '@playcanvas/pcui';

import { GRAPH_ACTIONS } from './constants';
import GraphViewEdge from './graph-view-edge';
import GraphViewNode from './graph-view-node';
import JointGraph from './joint-graph';
import { jointShapeElement, jointShapeElementView } from './joint-shape-node';
import { Vec2 } from './lib/vec2';

import type Graph from './index';

class GraphView extends JointGraph {
    _parent: Graph;

    _dom: HTMLElement;

    _graphSchema: any;

    _graphData: any;

    _nodes: Record<string, GraphViewNode>;

    _edges: Record<string, GraphViewEdge>;

    _cells: dia.Cell[];

    _cellMountedFunctions: (() => void)[];

    _batchingCells: boolean;

    _viewMenu: Menu;

    constructor(parent: Graph, dom: HTMLElement, graphSchema: any, graphData: any, config: any) {
        super(dom, config);

        this._parent = parent;
        this._dom = dom;
        this._graphSchema = graphSchema;
        this._graphData = graphData;

        this._config = config;

        this._nodes = {};
        this._edges = {};

        this._cells = [];
        this._cellMountedFunctions = [];
        this._batchingCells = false;

        const htmlShapes = shapes as Record<string, any>;
        htmlShapes.html = {};
        htmlShapes.html.Element = jointShapeElement();
        htmlShapes.html.ElementView = jointShapeElementView(this._paper);

        this._graph.on('remove', (cell: dia.Cell) => this.updatePortStatesForEdge(cell, false));
        this._graph.on('change:target', (cell: dia.Cell) => this.updatePortStatesForEdge(cell, true));

        this._paper.on('cell:mousewheel', () => {
            parent._dispatchEvent(GRAPH_ACTIONS.UPDATE_SCALE, { scale: this._paper.scale().sx });
        });
        this._paper.on('blank:mousewheel', () => {
            parent._dispatchEvent(GRAPH_ACTIONS.UPDATE_SCALE, { scale: this._paper.scale().sx });
        });
        this._paper.on('blank:pointerup', () => {
            parent._dispatchEvent(GRAPH_ACTIONS.UPDATE_TRANSLATE, { pos: { x: this._paper.translate().tx, y: this._paper.translate().ty } });
        });
        this._paper.on({
            'blank:contextmenu': (event: dia.Event) => {
                if (!this._viewMenu) return;
                this._viewMenu.position(event.clientX, event.clientY);
                this._viewMenu.hidden = false;
            }
        });

        this._paper.on({
            'cell:mouseenter': (cellView: dia.CellView) => {
                let selectedEdge: GraphViewEdge | null;
                let selectedEdgeId: dia.Cell.ID | undefined;
                const node = this.getNode(cellView.model.id);
                if (node && node.state !== GraphViewNode.STATES.SELECTED) {
                    node.hover();
                    selectedEdge = this._parent._selectedItem && this._parent._selectedItem._type === 'EDGE' ? this.getEdge(this._parent._selectedItem._id) : null;
                    if (selectedEdge) selectedEdgeId = selectedEdge.model.id;
                    if (this._config.edgeHoverEffect) {
                        Object.keys(this._edges).forEach((edgeKey) => {
                            const currEdge = this.getEdge(edgeKey);
                            if (currEdge.model.id === selectedEdgeId) return;
                            if (![currEdge.edgeData.from, currEdge.edgeData.to].includes(node.nodeData.id)) {
                                currEdge.mute();
                            } else {
                                currEdge.deselect();
                            }
                        });
                    }
                }
                const edge = this.getEdge(cellView.model.id);
                if (this._config.edgeHoverEffect && edge && edge.state !== GraphViewEdge.STATES.SELECTED) {
                    edge.deselect();
                    selectedEdge = this._parent._selectedItem && this._parent._selectedItem._type === 'EDGE' ? this.getEdge(this._parent._selectedItem._id) : null;
                    if (selectedEdge) selectedEdgeId = selectedEdge.model.id;
                    Object.keys(this._edges).forEach((edgeKey) => {
                        const currEdge = this.getEdge(edgeKey);
                        if ((edge.model.id !== currEdge.model.id) && (selectedEdgeId !== currEdge.model.id)) {
                            currEdge.mute();
                        }
                    });
                    this.getNode(edge.edgeData.from).hover();
                    this.getNode(edge.edgeData.to).hover();
                }
            },
            'cell:mouseleave': (cellView: dia.CellView, e: dia.Event) => {
                let selectedEdge: GraphViewEdge | null;
                const related = (e as unknown as MouseEvent).relatedTarget;
                if (related instanceof Element && related.classList.contains('graph-node-input')) return;
                const node = this.getNode(cellView.model.id);
                if (node && node.state !== GraphViewNode.STATES.SELECTED) {
                    selectedEdge = this._parent._selectedItem && this._parent._selectedItem._type === 'EDGE' ? this.getEdge(this._parent._selectedItem._id) : null;
                    if (!selectedEdge || ![selectedEdge.edgeData.from, selectedEdge.edgeData.to].includes(node.nodeData.id)) {
                        node.hoverRemove();
                    }
                    if (this._config.edgeHoverEffect) {
                        Object.keys(this._edges).forEach((edgeKey) => {
                            const currEdge = this.getEdge(edgeKey);
                            if (selectedEdge && currEdge.model.id === selectedEdge.model.id) return;
                            currEdge.deselect();
                        });
                    }
                }
                const edge = this.getEdge(cellView.model.id);
                if (this._config.edgeHoverEffect && edge && edge.state !== GraphViewEdge.STATES.SELECTED) {
                    Object.keys(this._edges).forEach((edgeKey) => {
                        const currEdge = this.getEdge(edgeKey);
                        if (currEdge.state === GraphViewEdge.STATES.SELECTED) {
                            currEdge.select();
                        } else if (currEdge.state === GraphViewEdge.STATES.DEFAULT) {
                            if (this._parent._selectedItem && this._parent._selectedItem._type === 'EDGE') {
                                currEdge.mute();
                            } else {
                                currEdge.deselect();
                            }
                        }
                    });
                    selectedEdge = this._parent._selectedItem && this._parent._selectedItem._type === 'EDGE' ? this.getEdge(this._parent._selectedItem._id) : null;
                    if (!selectedEdge || ![selectedEdge.edgeData.from, selectedEdge.edgeData.to].includes(edge.edgeData.from)) {
                        this.getNode(edge.edgeData.from).hoverRemove();
                    }
                    if (!selectedEdge || ![selectedEdge.edgeData.from, selectedEdge.edgeData.to].includes(edge.edgeData.to)) {
                        this.getNode(edge.edgeData.to).hoverRemove();
                    }
                }
            }
        });
    }

    batchCells(): void {
        this._batchingCells = true;
    }

    isBatchingCells(): boolean {
        return this._batchingCells;
    }

    addCellMountedFunction(f: () => void): void {
        this._cellMountedFunctions.push(f);
    }

    applyBatchedCells(): void {
        this._batchingCells = false;
        this._graph.addCells(this._cells);
        this._cellMountedFunctions.forEach(f => f());
        this._cells = [];
        this._cellMountedFunctions = [];
    }

    updatePortStatesForEdge(cell: dia.Cell, connected: boolean): void {
        const source = cell.get('source');
        const target = cell.get('target');
        if (source && source.port && target && target.port) {
            const sourceView = this._paper.findViewByModel(source.id) as any;
            const targetView = this._paper.findViewByModel(target.id) as any;
            sourceView._portElementsCache[source.port].portContentElement.children()[1].attr('visibility', connected ? 'visible' : 'hidden');
            targetView._portElementsCache[target.port].portContentElement.children()[1].attr('visibility', connected ? 'visible' : 'hidden');
        }
    }

    getWindowToGraphPosition(pos: { x: number; y: number }, usePaperPosition: boolean = true): Vec2 {
        const scale = this._paper.scale().sx;
        const translate = this._paper.translate();
        if (usePaperPosition) {
            const paperPosition = this._paper.el.getBoundingClientRect();
            pos.x -= paperPosition.x;
            pos.y -= paperPosition.y;
        }
        return new Vec2(
            (-translate.tx / scale) + (pos.x / scale),
            (-translate.ty / scale) + (pos.y / scale)
        );
    }

    addCanvasContextMenu(items: any[]): void {
        this._viewMenu = new Menu({
            items: items
        });
        this._paper.el.appendChild(this._viewMenu.dom);
    }

    addNodeContextMenu(id: string | number, items: any[]): void {
        const addNodeContextMenuFunction = () => {
            const node = this.getNode(id);
            node.addContextMenu(items);
        };
        if (this._batchingCells) {
            this._cellMountedFunctions.push(addNodeContextMenuFunction);
        } else {
            addNodeContextMenuFunction();
        }
    }

    addEdgeContextMenu(id: string, items: any[]): void {
        const edge = this.getEdge(id);
        edge.addContextMenu(items);
    }

    getNode(id: string | number): GraphViewNode {
        return this._nodes[id];
    }

    addNode(nodeData: any, nodeSchema: any, onCreateEdge: (edgeId: string, edge: any) => void, onNodeSelected: (nodeData: any) => void): any {
        const node = new GraphViewNode(
            this,
            this._paper,
            this._graph,
            this._graphSchema,
            nodeData,
            nodeSchema,
            onCreateEdge,
            onNodeSelected
        );

        this._nodes[nodeData.id] = node;
        this._nodes[node.model.id] = node;

        return node.nodeData;
    }

    removeNode(modelId: string | number): void {
        const node = this.getNode(modelId);
        this._graph.removeCells([node.model]);
        delete this._nodes[node.nodeData.id];
        delete this._nodes[modelId];
    }

    updateNodeAttribute(id: string | number, attribute: string, value: any): void {
        this.getNode(id).updateAttribute(attribute, value);
    }

    setNodeAttributeErrorState(id: string | number, attribute: string, value: boolean): void {
        this.getNode(id).setAttributeErrorState(attribute, value);
    }

    updateNodePosition(id: string | number, pos: { x: number; y: number }): void {
        this.getNode(id).updatePosition(pos);
    }

    updateNodeType(id: string | number, nodeType: string | number): void {
        this.getNode(id).updateNodeType(nodeType);
    }

    addNodeEvent(id: string | number, event: string, callback: (...args: any[]) => void, attribute?: any): void {
        const addNodeEventFunction = () => {
            const node = this.getNode(id);
            node.addEvent(event, callback, attribute);
        };
        if (this._batchingCells) {
            this._cellMountedFunctions.push(addNodeEventFunction);
        } else {
            addNodeEventFunction();
        }
    }

    getEdge(id: string | number): GraphViewEdge {
        return this._edges[id];
    }

    addEdge(edgeData: any, edgeSchema: any, onEdgeSelected: (edgeData: any) => void): any {
        let edge;
        if (Number.isFinite(edgeData.outPort)) {
            edge = this.getEdge(`${edgeData.from},${edgeData.outPort}-${edgeData.to},${edgeData.inPort}`);
        } else {
            edge = this.getEdge(`${edgeData.from}-${edgeData.to}`);
        }
        if (edge) {
            if (edgeData.to === edge.edgeData.to) {
                if (!edgeData.outPort) {
                    edge.addTargetMarker();
                }
            } else {
                if (!edgeData.inPort) {
                    edge.addSourceMarker();
                }
            }
        } else {
            edge = new GraphViewEdge(
                this,
                this._paper,
                this._graph,
                this._graphSchema,
                edgeData,
                edgeSchema,
                onEdgeSelected
            );
            if (Number.isFinite(edgeData.outPort)) {
                this._edges[`${edgeData.from},${edgeData.outPort}-${edgeData.to},${edgeData.inPort}`] = edge;
            } else {
                this._edges[`${edgeData.from}-${edgeData.to}`] = edge;
            }
            this._edges[edge.model.id] = edge;
        }
        return edge.edgeData;
    }

    removeEdge(id: string): void {
        const edge = this.getEdge(id);
        if (edge) {
            this._graph.removeCells([edge.model]);
            delete this._edges[edge.model.id];
        }
        delete this._edges[id];
    }

    disableInputEvents(): void {
        document.querySelectorAll('.graph-node-input').forEach((input) => {
            input.classList.add('graph-node-input-no-pointer-events');
        });
    }

    enableInputEvents(): void {
        document.querySelectorAll('.graph-node-input').forEach((input) => {
            input.classList.remove('graph-node-input-no-pointer-events');
        });
    }

    addUnconnectedEdge(nodeId: number, edgeType: string, edgeSchema: any, validateEdge: (edgeType: string, source: number, target: number) => boolean, onEdgeConnected: (edgeType: string, from: number, to: number) => void): void {
        this.disableInputEvents();
        const link = GraphViewEdge.createLink(this._config.defaultStyles, edgeSchema);
        link.source(this.getNode(nodeId).model);
        link.target(this.getNode(nodeId).model);
        const mouseMoveEvent = (e: MouseEvent) => {
            const mousePos = this.getWindowToGraphPosition(new Vec2(e.clientX, e.clientY));
            const sourceNodeView = this._paper.findViewByModel(this.getNode(nodeId).model);
            const sourceNodePos = this.getGraphPosition();
            let pointerVector = mousePos.clone().sub(sourceNodePos);
            const rect = sourceNodeView.el.getBoundingClientRect();
            const direction = (new Vec2(e.clientX, e.clientY)).clone().sub(new Vec2(rect.x, rect.y)).normalize().mulScalar(20);
            pointerVector = sourceNodePos.add(pointerVector).sub(direction);
            link.target({
                x: pointerVector.x,
                y: pointerVector.y
            });
        };
        const cellPointerDownEvent = (cellView: dia.CellView) => {
            if (!this.getNode(cellView.model.id)) return;
            const targetNodeId = this.getNode(cellView.model.id).nodeData.id;
            const nodeModel = this.getNode(nodeId).model;
            if ((cellView.model.id !== nodeModel.id) && !cellView.model.isLink() && validateEdge(edgeType, nodeId, targetNodeId)) {
                link.target(cellView.model);
                onEdgeConnected(edgeType, nodeId, targetNodeId);
            }
            this._graph.removeCells([link]);
            document.removeEventListener('mousemove', mouseMoveEvent);
            this._paper.off('cell:pointerdown', cellPointerDownEvent);
            this.enableInputEvents();
        };
        const mouseDownEvent = () => {
            this._paper.off('cell:pointerdown', cellPointerDownEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            this._graph.removeCells([link]);
            this.enableInputEvents();
        };

        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mousedown', mouseDownEvent);
        this._paper.on('cell:pointerdown', cellPointerDownEvent);

        this._graph.addCell(link);
    }

    onBlankSelection(callback: () => void): void {
        this._paper.on('blank:pointerdown', () => {
            callback();
        });
    }

    selectNode(id: string | number): void {
        const node = this.getNode(id);
        if (node) {
            node.select();
            Object.keys(this._edges).forEach((edgeKey) => {
                const currEdge = this.getEdge(edgeKey);
                currEdge.deselect();
            });
        }
    }

    deselectNode(id: string | number): void {
        const node = this.getNode(id);
        if (node) node.deselect();
    }

    selectEdge(id: string | number): void {
        const edge = this.getEdge(id);
        if (edge) {
            edge.select();
            Object.keys(this._edges).forEach((edgeKey) => {
                const currEdge = this.getEdge(edgeKey);
                if (edge.model.id !== currEdge.model.id) {
                    currEdge.mute();
                }
            });
            this.getNode(edge.edgeData.from).hover();
            this.getNode(edge.edgeData.to).hover();
        }
    }

    deselectEdge(id: string | number): void {
        const edge = this.getEdge(id);
        if (edge) {
            Object.keys(this._edges).forEach((edgeKey) => {
                const currEdge = this.getEdge(edgeKey);
                currEdge.deselect();
            });
            this.getNode(edge.edgeData.from).hoverRemove();
            this.getNode(edge.edgeData.to).hoverRemove();
        }
    }

    setGraphPosition(posX: number, posY: number): void {
        this._paper.translate(posX, posY);
    }

    getGraphPosition(): Vec2 {
        const t = this._paper.translate();
        return new Vec2([t.tx, t.ty]);
    }

    setGraphScale(scale: number): void {
        this._paper.scale(scale);
    }

    getGraphScale(): number {
        return this._paper.scale().sx;
    }

    getNodeDomElement(id: string | number): Element {
        return this.getNode(id).model.findView(this._paper).el;
    }

    getEdgeDomElement(id: string | number): Element {
        return this.getEdge(id).model.findView(this._paper).el;
    }

    destroy(): void {
        this._graph.clear();
        this._paper.remove();
    }
}

export default GraphView;
