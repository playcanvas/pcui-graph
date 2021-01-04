import JointGraph from './joint-graph.js';
import GraphViewNode from './graph-view-node.js';
import GraphViewEdge from './graph-view-edge.js';
import { ContextMenu } from '../../pcui';
import { Vec2 } from 'playcanvas';
import * as joint from 'jointjs';
import { jointShapeElement, jointShapeElementView } from './joint-shape-node.js';

export var GRAPH_ACTIONS = {
    ADD_NODE: 'EVENT_ADD_NODE',
    UPDATE_NODE_POSITION: 'EVENT_UPDATE_NODE_POSITION',
    UPDATE_NODE_ATTRIBUTE: 'EVENT_UPDATE_NODE_ATTRIBUTE',
    DELETE_NODE: 'EVENT_DELETE_NODE',
    SELECT_NODE: 'EVENT_SELECT_NODE',
    ADD_EDGE: 'EVENT_ADD_EDGE',
    DELETE_EDGE: 'EVENT_DELETE_EDGE',
    SELECT_EDGE: 'EVENT_SELECT_EDGE',
    DESELECT_ITEM: 'EVENT_DESELECT_ITEM',
    UPDATE_TRANSLATE: 'EVENT_UPDATE_TRANSLATE',
    UPDATE_SCALE: 'EVENT_UPDATE_SCALE'
};

class GraphView extends JointGraph {
    constructor(parent, dom, graphSchema, graphData) {
        super(dom);

        this._parent = parent;
        this._dom = dom;
        this._graphSchema = graphSchema;
        this._graphData = graphData;

        this._nodes = {};
        this._edges = {};

        joint.shapes.html = {};
        joint.shapes.html.Element = jointShapeElement();
        joint.shapes.html.ElementView = jointShapeElementView(this._paper);

        this._graph.on('add', (cell) => this.updateNodePortColor(cell, 'white'));
        this._graph.on('remove', (cell) => this.updateNodePortColor(cell, 'black'));
        this._graph.on('change:target', (cell) => this.updateNodePortColor(cell, 'white'));

        this._paper.on('cell:mousewheel', () => {
            parent.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.UPDATE_SCALE, { detail: { scale: this._paper.scale().sx } } ));
        });
        this._paper.on('blank:mousewheel', () => {
            parent.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.UPDATE_SCALE, { detail: { scale: this._paper.scale().sx } } ));
        });
        this._paper.on('blank:pointerup', () => {
            parent.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.UPDATE_TRANSLATE, { detail: { pos: { x: this._paper.translate().tx, y: this._paper.translate().ty } } }));
        });

        this._paper.on({
            'cell:mouseenter': (cellView) => {
                var selectedEdgeId;
                var node = this.getNode(cellView.model.id);
                if (node && node.state !== GraphViewNode.STATES.SELECTED) {
                    node.hover();
                    selectedEdgeId = this._parent._selectedItem && this._parent._selectedItem._type === 'EDGE' ? this.getEdge(this._parent._selectedItem._id).model.id : null;
                    Object.keys(this._edges).forEach(edgeKey => {
                        var currEdge = this.getEdge(edgeKey);
                        if (currEdge.model.id === selectedEdgeId) return;
                        if (![currEdge.edgeData.from, currEdge.edgeData.to].includes(node.nodeData.id)) {
                            currEdge.mute();
                        } else {
                            currEdge.deselect();
                        }
                    });
                }
                var edge = this.getEdge(cellView.model.id);
                if (edge && edge.state !== GraphViewEdge.STATES.SELECTED) {
                    edge.deselect();
                    selectedEdgeId = this._parent._selectedItem && this._parent._selectedItem._type === 'EDGE' ? this.getEdge(this._parent._selectedItem._id).model.id : null;
                    Object.keys(this._edges).forEach(edgeKey => {
                        var currEdge = this.getEdge(edgeKey);
                        if ((edge.model.id !== currEdge.model.id) && (selectedEdgeId !== currEdge.model.id)) {
                            currEdge.mute();
                        }
                    });
                    this.getNode(edge.edgeData.from).hover();
                    this.getNode(edge.edgeData.to).hover();
                }
            },
            'cell:mouseleave': (cellView) => {
                var selectedEdge;

                var node = this.getNode(cellView.model.id);
                if (node && node.state !== GraphViewNode.STATES.SELECTED) {
                    selectedEdge = this._parent._selectedItem && this._parent._selectedItem._type === 'EDGE' ? this.getEdge(this._parent._selectedItem._id) : null;
                    if (!selectedEdge || ![selectedEdge.edgeData.from, selectedEdge.edgeData.to].includes(node.nodeData.id)) {
                        node.hoverRemove();
                    }
                    Object.keys(this._edges).forEach(edgeKey => {
                        var currEdge = this.getEdge(edgeKey);
                        if (selectedEdge && currEdge.model.id === selectedEdge.model.id) return;
                        currEdge.deselect();
                    });
                }
                var edge = this.getEdge(cellView.model.id);
                if (edge && edge.state !== GraphViewEdge.STATES.SELECTED) {
                    Object.keys(this._edges).forEach(edgeKey => {
                        var currEdge = this.getEdge(edgeKey);
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

    updateNodePortColor(cell, color) {
        var source = cell.get('source');
        var target = cell.get('target');
        if (source && source.port && target && target.port) {
            this._paper.findViewByModel(source.id)._portElementsCache[source.port].portContentElement.attr('fill', color);
            this._paper.findViewByModel(target.id)._portElementsCache[target.port].portContentElement.attr('fill', color);
        }
    }

    getGraphPosition(pos) {
        const boundingClientRect = this._paper.el.getBoundingClientRect();
        return new Vec2(
            (pos.x - boundingClientRect.x) / this._paper.scale().sx,
            (pos.y - boundingClientRect.y) / this._paper.scale().sx
        );
    }

    getWindowToGraphPosition(pos) {
        const scale = this._paper.scale().sx;
        const translate = this._paper.translate();
        const boundingClientRect = this._paper.el.getBoundingClientRect();
        return new Vec2(
            (-translate.tx / scale) + ((pos.x - boundingClientRect.x) / scale),
            (-translate.ty / scale) + ((pos.y - boundingClientRect.y) / scale)
        );
    }

    addCanvasContextMenu(items) {
        this._viewContextMenu = document.createElement('div');
        this._paper.el.appendChild(this._viewContextMenu);
        new ContextMenu({
            dom: this._viewContextMenu,
            items: items
        });
    }

    addNodeContextMenu(id, items) {
        var node = this.getNode(id);
        node.addContextMenu(items);
    }

    addEdgeContextMenu(id, items) {
        var edge = this.getEdge(id);
        edge.addContextMenu(items);
    }

    getNode(id) {
        return this._nodes[id];
    }

    addNode(nodeData, nodeSchema, domEvent, onCreateEdge, onNodeSelected) {
        const node = new GraphViewNode(
            this,
            this._paper,
            this._graph,
            this._graphSchema,
            nodeData,
            nodeSchema,
            domEvent,
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

    updateNodePosition(id, pos) {
        this.getNode(id).updatePosition(pos);
    }

    updateNodeType(id, nodeType) {
        this.getNode(id).updateNodeType(nodeType);
    }

    addNodeEvent(id, event, callback, attribute) {
        var node = this.getNode(id);
        node.addEvent(event, callback, attribute);
    }

    getEdge(id) {
        if (this._edges[id]) {
            return this._edges[id];
        }
    }

    addEdge(edgeData, edgeSchema, onEdgeSelected) {
        let edge = this.getEdge(`${edgeData.from}-${edgeData.to}`);
        if (edge) {
            if (edgeData.to === edge.edgeData.to) {
                edge.addTargetMarker();
            } else {
                edge.addSourceMarker();
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
            this._edges[`${edgeData.from}-${edgeData.to}`] = edge;
            this._edges[edge.model.id] = edge;
        }
        return edge.edgeData;
    }

    removeEdge(id) {
        let edge = this.getEdge(id);
        if (edge) this._graph.removeCells(edge.model);
        delete this._edges[edge.model.id];
        delete this._edges[id];
    }

    addUnconnectedEdge(nodeId, edgeType, edgeSchema, validateEdge, onEdgeConnected) {
        const link = GraphViewEdge.createLink(edgeSchema);
        link.source(this.getNode(nodeId).model);
        link.target(this.getNode(nodeId).model);
        const mouseMoveEvent = (e) => {
            var mousePos = this.getWindowToGraphPosition(new Vec2(e.clientX, e.clientY));
            var sourceNodeView = this._paper.findViewByModel(this.getNode(nodeId).model);
            var sourceNodePos = this.getGraphPosition(sourceNodeView.el.getBoundingClientRect());
            var pointerVector = mousePos.clone().sub(sourceNodePos);
            pointerVector = pointerVector.sub(pointerVector.clone().normalize().scale(10.0));
            pointerVector = sourceNodePos.add(pointerVector);
            link.target({
                x: pointerVector.x,
                y: pointerVector.y
            });
        };
        const cellPointerDownEvent = (cellView) => {
            var targetNodeId = this.getNode(cellView.model.id).nodeData.id;
            var nodeModel = this.getNode(nodeId).model;
            // test whether a valid connection has been made
            if ((cellView.model.id !== nodeModel.id) && !cellView.model.isLink() && validateEdge(edgeType, nodeId, targetNodeId)) {
                link.target(cellView.model);
                onEdgeConnected(edgeType, nodeId, targetNodeId);
            }
            this._graph.removeCells(link);
            document.removeEventListener('mousemove', mouseMoveEvent);
            this._paper.off('cell:pointerdown', cellPointerDownEvent);
        };
        var mouseDownEvent = () => {
            this._paper.off('cell:pointerdown', cellPointerDownEvent);
            document.removeEventListener('mousemove', mouseMoveEvent);
            this._graph.removeCells(link);
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
            Object.keys(this._edges).forEach(edgeKey => {
                var currEdge = this.getEdge(edgeKey);
                currEdge.deselect();
            });
        }
    }

    deselectNode(id) {
        const node = this.getNode(id);
        if (node) node.deselect();
    }

    selectEdge(id) {
        var edge = this.getEdge(id);
        if (edge) {
            edge.select();
            Object.keys(this._edges).forEach(edgeKey => {
                var currEdge = this.getEdge(edgeKey);
                if (edge.model.id !== currEdge.model.id) {
                    currEdge.mute();
                }
            });
            this.getNode(edge.edgeData.from).hover();
            this.getNode(edge.edgeData.to).hover();
        }
    }

    deselectEdge(id) {
        var edge = this.getEdge(id);
        if (edge) {
            Object.keys(this._edges).forEach(edgeKey => {
                var currEdge = this.getEdge(edgeKey);
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
        var t = this._paper.translate();
        return { x: t.tx, y: t.ty };
    }

    setGraphScale(scale) {
        this._paper.scale(scale);
    }

    getGraphScale() {
        return this._paper.scale().sx;
    }
}

export default GraphView;
