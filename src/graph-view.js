import * as joint from '@joint/core';
import { Menu } from '@playcanvas/pcui';

import { GRAPH_ACTIONS } from './constants.js';
import GraphViewEdge from './graph-view-edge.js';
import GraphViewNode from './graph-view-node.js';
import JointGraph from './joint-graph.js';
import { jointShapeElement, jointShapeElementView } from './joint-shape-node.js';
// TODO replace with a lighter math library
import { Vec2 } from './lib/vec2.js';


class GraphView extends JointGraph {
    constructor(parent, dom, graphSchema, graphData, config) {
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

        joint.shapes.html = {};
        joint.shapes.html.Element = jointShapeElement();
        joint.shapes.html.ElementView = jointShapeElementView(this._paper);

        this._graph.on('remove', cell => this.updatePortStatesForEdge(cell, false));
        this._graph.on('change:target', cell => this.updatePortStatesForEdge(cell, true));

        this._paper.on('cell:mousewheel', () => {
            parent._dispatchEvent(GRAPH_ACTIONS.UPDATE_SCALE, { scale: this._paper.scale().sx });
        });
        this._paper.on('blank:mousewheel', () => {
            parent._dispatchEvent(GRAPH_ACTIONS.UPDATE_SCALE, { scale: this._paper.scale().sx });
        });
        this._paper.on('blank:pointerup', (event) => {
            parent._dispatchEvent(GRAPH_ACTIONS.UPDATE_TRANSLATE, { pos: { x: this._paper.translate().tx, y: this._paper.translate().ty } });
        });
        this._paper.on({
            'blank:contextmenu': (event) => {
                this._viewMenu.position(event.clientX, event.clientY);
                this._viewMenu.hidden = false;
            }
        });

        this._paper.on({
            'cell:mouseenter': (cellView) => {
                let selectedEdge;
                let selectedEdgeId;
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
            'cell:mouseleave': (cellView, e) => {
                let selectedEdge;

                if (e.relatedTarget && e.relatedTarget.classList.contains('graph-node-input')) return;
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

    batchCells() {
        this._batchingCells = true;
    }

    isBatchingCells() {
        return this._batchingCells;
    }

    addCellMountedFunction(f) {
        this._cellMountedFunctions.push(f);
    }

    applyBatchedCells() {
        this._batchingCells = false;
        this._graph.addCells(this._cells);
        this._cellMountedFunctions.forEach(f => f());
        this._cells = [];
        this._cellMountedFunctions = [];
    }

    updatePortStatesForEdge(cell, connected) {
        const source = cell.get('source');
        const target = cell.get('target');
        if (source && source.port && target && target.port) {
            this._paper.findViewByModel(source.id)._portElementsCache[source.port].portContentElement.children()[1].attr('visibility', connected ? 'visible' : 'hidden');
            this._paper.findViewByModel(target.id)._portElementsCache[target.port].portContentElement.children()[1].attr('visibility', connected ? 'visible' : 'hidden');
        }
    }

    getWindowToGraphPosition(pos, usePaperPosition = true) {
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

    addCanvasContextMenu(items) {
        this._viewMenu = new Menu({
            items: items
        });
        this._paper.el.appendChild(this._viewMenu.dom);
        return this._viewMenu._contextMenuEvent;
    }

    addNodeContextMenu(id, items) {
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

    addEdgeContextMenu(id, items) {
        const edge = this.getEdge(id);
        edge.addContextMenu(items);
    }

    getNode(id) {
        return this._nodes[id];
    }

    addNode(nodeData, nodeSchema, onCreateEdge, onNodeSelected) {
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

    removeNode(modelId) {
        const node = this.getNode(modelId);
        this._graph.removeCells(node.model);
        delete this._nodes[node.nodeData.id];
        delete this._nodes[modelId];
    }

    updateNodeAttribute(id, attribute, value) {
        this.getNode(id).updateAttribute(attribute, value);
    }

    setNodeAttributeErrorState(id, attribute, value) {
        this.getNode(id).setAttributeErrorState(attribute, value);
    }

    updateNodePosition(id, pos) {
        this.getNode(id).updatePosition(pos);
    }

    updateNodeType(id, nodeType) {
        this.getNode(id).updateNodeType(nodeType);
    }

    addNodeEvent(id, event, callback, attribute) {
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

    getEdge(id) {
        if (this._edges[id]) {
            return this._edges[id];
        }
    }

    addEdge(edgeData, edgeSchema, onEdgeSelected) {
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

    removeEdge(id) {
        const edge = this.getEdge(id);
        if (edge) {
            this._graph.removeCells(edge.model);
            delete this._edges[edge.model.id];
        }
        delete this._edges[id];
    }

    disableInputEvents() {
        document.querySelectorAll('.graph-node-input').forEach((input) => {
            input.classList.add('graph-node-input-no-pointer-events');
        });
    }

    enableInputEvents() {
        document.querySelectorAll('.graph-node-input').forEach((input) => {
            input.classList.remove('graph-node-input-no-pointer-events');
        });
    }

    addUnconnectedEdge(nodeId, edgeType, edgeSchema, validateEdge, onEdgeConnected) {
        this.disableInputEvents();
        const link = GraphViewEdge.createLink(this._config.defaultStyles, edgeSchema);
        link.source(this.getNode(nodeId).model);
        link.target(this.getNode(nodeId).model);
        const mouseMoveEvent = (e) => {
            const mousePos = this.getWindowToGraphPosition(new Vec2(e.clientX, e.clientY));
            const sourceNodeView = this._paper.findViewByModel(this.getNode(nodeId).model);
            const sourceNodePos = this.getGraphPosition(sourceNodeView.el.getBoundingClientRect());
            let pointerVector = mousePos.clone().sub(sourceNodePos);
            const direction = (new Vec2(e.clientX, e.clientY)).clone().sub(sourceNodeView.el.getBoundingClientRect()).normalize().mulScalar(20);
            pointerVector = sourceNodePos.add(pointerVector).sub(direction);
            link.target({
                x: pointerVector.x,
                y: pointerVector.y
            });
        };
        const cellPointerDownEvent = (cellView) => {
            if (!this.getNode(cellView.model.id)) return;
            const targetNodeId = this.getNode(cellView.model.id).nodeData.id;
            const nodeModel = this.getNode(nodeId).model;
            // test whether a valid connection has been made
            if ((cellView.model.id !== nodeModel.id) && !cellView.model.isLink() && validateEdge(edgeType, nodeId, targetNodeId)) {
                link.target(cellView.model);
                onEdgeConnected(edgeType, nodeId, targetNodeId);
            }
            this._graph.removeCells(link);
            document.removeEventListener('mousemove', mouseMoveEvent);
            this._paper.off('cell:pointerdown', cellPointerDownEvent);
            this.enableInputEvents();
        };
        const mouseDownEvent = () => {
            this._paper.off('cell:pointerdown', cellPointerDownEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            this._graph.removeCells(link);
            this.enableInputEvents();
        };

        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mousedown', mouseDownEvent);
        this._paper.on('cell:pointerdown', cellPointerDownEvent);

        this._graph.addCell(link);
    }

    onBlankSelection(callback) {
        this._paper.on('blank:pointerdown', () => {
            callback();
        });
    }

    selectNode(id) {
        const node = this.getNode(id);
        if (node) {
            node.select();
            Object.keys(this._edges).forEach((edgeKey) => {
                const currEdge = this.getEdge(edgeKey);
                currEdge.deselect();
            });
        }
    }

    deselectNode(id) {
        const node = this.getNode(id);
        if (node) node.deselect();
    }

    selectEdge(id) {
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

    deselectEdge(id) {
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

    setGraphPosition(posX, posY) {
        this._paper.translate(posX, posY);
    }

    getGraphPosition() {
        const t = this._paper.translate();
        return new Vec2([t.tx, t.ty]);
    }

    setGraphScale(scale) {
        this._paper.scale(scale);
    }

    getGraphScale() {
        return this._paper.scale().sx;
    }

    getNodeDomElement(id) {
        return this.getNode(id).model.findView(this._paper).el;
    }

    getEdgeDomElement(id) {
        return this.getEdge(id).model.findView(this._paper).el;
    }

    destroy() {
        this._graph.clear();
        this._paper.remove();
    }
}

export default GraphView;
