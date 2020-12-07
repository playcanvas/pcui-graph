import { ContextMenu } from '../ContextMenu';
import * as joint from 'jointjs';

class GraphViewEdge {
    constructor(graphView, paper, graph, graphSchema, edgeData, edgeSchema, onEdgeSelected) {
        this._graphView = graphView;
        this._paper = paper;
        this._graph = graph;
        this._graphSchema = graphSchema;
        this.edgeData = edgeData;
        this._edgeSchema = edgeSchema;

        var link = GraphViewEdge.createLink(edgeSchema);
        var sourceNode = this._graphView.getNode(edgeData.from);
        if (Number.isFinite(edgeData.outPort)) {
            link.source({
                id: sourceNode.model.id,
                port: `out${edgeData.outPort}`
            });
        } else {
            link.source(sourceNode.model);
        }
        var targetNode = this._graphView.getNode(edgeData.to);
        if (Number.isFinite(edgeData.inPort)) {
            link.target({
                id: targetNode.model.id,
                port: `in${edgeData.inPort}`
            });
        } else {
            link.target(targetNode.model);
        }
        this._graph.addCell(link);

        this._paper.findViewByModel(link).on('cell:pointerdown', function () {
            onEdgeSelected(edgeData);
        });

        this.model = link;
    }

    static createLink(edgeSchema) {
        var link = new joint.shapes.standard.Link();
        link.attr({
            line: {
                strokeWidth: edgeSchema.strokeWidth || 1,
                stroke: edgeSchema.stroke
            }
        });
        if (edgeSchema.targetMarker) {
            link.attr('line/targetMarker', {
                'type': 'path',
                'd': 'm-2.57106,0.93353c-0.56989,-0.39644 -0.57234,-1.2387 -0.00478,-1.63846l7.25619,-5.11089c0.66251,-0.46663 1.57585,0.00721 1.57585,0.81756l0,10.1587c0,0.8077 -0.90803,1.2821 -1.57106,0.8209l-7.2562,-5.04781z',
                'stroke': edgeSchema.targetMarkerStroke || edgeSchema.stroke,
                'fill': edgeSchema.targetMarkerStroke || edgeSchema.stroke
            });
        } else {
            link.attr('line/targetMarker', null);
        }
        link.attr('line/sourceMarker', null);
        if (edgeSchema.smooth) {
            link.set('connector', { name: 'smooth' });
        }
        return link;
    }

    addContextMenu(items) {
        var edgeCell = this._paper.findViewByModel(this.model);
        if (!edgeCell) return;
        var contextMenu = document.createElement('div');
        this._paper.el.appendChild(contextMenu);
        new ContextMenu({
            triggerElement: edgeCell.el,
            dom: contextMenu,
            items: items
        });
    }

    select() {
        this.model.attr('line/stroke', '#F60');
        this.model.attr('line/targetMarker', {
            stroke: '#F60',
            fill: '#F60'
        });
        this.model.attr('line/sourceMarker', {
            stroke: '#F60',
            fill: '#F60'
        });
    }

    deselect() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/stroke', edgeSchema.stroke);
        this.model.attr('line/strokeWidth', edgeSchema.strokeWidth || 1);
        this.model.attr('line/targetMarker', {
            stroke: edgeSchema.targetMarkerStroke || edgeSchema.stroke,
            fill: edgeSchema.targetMarkerStroke || edgeSchema.stroke
        });
        this.model.attr('line/sourceMarker', {
            stroke: edgeSchema.targetMarkerStroke || edgeSchema.stroke,
            fill: edgeSchema.targetMarkerStroke || edgeSchema.stroke
        });
    }

    addSourceMarker() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/sourceMarker', {
            'type': 'path',
            'd': 'm-2.57106,0.93353c-0.56989,-0.39644 -0.57234,-1.2387 -0.00478,-1.63846l7.25619,-5.11089c0.66251,-0.46663 1.57585,0.00721 1.57585,0.81756l0,10.1587c0,0.8077 -0.90803,1.2821 -1.57106,0.8209l-7.2562,-5.04781z',
            'stroke': edgeSchema.targetMarkerStroke || edgeSchema.stroke,
            'fill': edgeSchema.targetMarkerStroke || edgeSchema.stroke
        });
    }

    addTargetMarker() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/targetMarker', {
            'type': 'path',
            'd': 'm-2.57106,0.93353c-0.56989,-0.39644 -0.57234,-1.2387 -0.00478,-1.63846l7.25619,-5.11089c0.66251,-0.46663 1.57585,0.00721 1.57585,0.81756l0,10.1587c0,0.8077 -0.90803,1.2821 -1.57106,0.8209l-7.2562,-5.04781z',
            'stroke': edgeSchema.targetMarkerStroke || edgeSchema.stroke,
            'fill': edgeSchema.targetMarkerStroke || edgeSchema.stroke
        });
    }
}

export default GraphViewEdge;
