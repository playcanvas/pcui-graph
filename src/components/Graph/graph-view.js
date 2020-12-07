import JointGraph from './joint-graph.js';
import GraphViewNode from './graph-view-node.js';
import GraphViewEdge from './graph-view-edge.js';
import { ContextMenu } from '../ContextMenu';
import { Vec2, Vec3 } from 'playcanvas';
import * as joint from 'jointjs';
import { jointShapeElement, jointShapeElementView } from './joint-shape-node.js';

class GraphView extends JointGraph {
    constructor(dom, graphSchema, graphData) {
        super(dom);

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
        return new Vec2(
            (pos.x - this._paper.el.getBoundingClientRect().x) / this._paper.scale().sx,
            (pos.y - this._paper.el.getBoundingClientRect().y) / this._paper.scale().sx
        );
    }

    getWindowToGraphPosition(pos) {
        const scale = this._paper.scale().sx;
        return new Vec2(
            (-this._paper.translate().tx / scale) + ((pos.x - this._paper.el.getBoundingClientRect().x) / scale),
            (-this._paper.translate().ty / scale) + ((pos.y - this._paper.el.getBoundingClientRect().y) / scale)
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
        }
        return edge.edgeData;
    }

    removeEdge(id) {
        let edge = this.getEdge(id);
        if (edge) this._graph.removeCells(edge.model);
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
        if (node) node.select();
    }

    deselectNode(id) {
        const node = this.getNode(id);
        if (node) node.deselect();
    }

    selectEdge(id) {
        var edge = this.getEdge(id);
        if (edge) edge.select();
    }

    deselectEdge(id) {
        var edge = this.getEdge(id);
        if (edge) edge.deselect();
    }
}

export default GraphView;
