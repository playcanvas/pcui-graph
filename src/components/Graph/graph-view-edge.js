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
                'd': 'M 10 -7 0 0 10 7 Z',
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
            'd': 'M 10 -7 0 0 10 7 Z',
            'stroke': edgeSchema.targetMarkerStroke || edgeSchema.stroke,
            'fill': edgeSchema.targetMarkerStroke || edgeSchema.stroke
        });
    }

    addTargetMarker() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/targetMarker', {
            'type': 'path',
            'd': 'M 10 -7 0 0 10 7 Z',
            'stroke': edgeSchema.targetMarkerStroke || edgeSchema.stroke,
            'fill': edgeSchema.targetMarkerStroke || edgeSchema.stroke
        });
    }
}

export default GraphViewEdge;
