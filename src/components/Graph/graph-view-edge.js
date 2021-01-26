import { ContextMenu } from '../../pcui';
import * as joint from 'jointjs';

import sourceMarkerDefaultImage from '../../assets/source-marker-default.png';
import sourceMarkerActiveImage from '../../assets/source-marker-active.png';
import sourceMarkerDeactiveImage from '../../assets/source-marker-deactive.png';

class GraphViewEdge {
    constructor(graphView, paper, graph, graphSchema, edgeData, edgeSchema, onEdgeSelected) {
        this._graphView = graphView;
        this._paper = paper;
        this._graph = graph;
        this._graphSchema = graphSchema;
        this.edgeData = edgeData;
        this._edgeSchema = edgeSchema;
        this.state = GraphViewEdge.STATES.DEFAULT;

        var link = GraphViewEdge.createLink(edgeSchema, edgeData);
        var sourceNode = this._graphView.getNode(edgeData.from);
        if (edgeData && Number.isFinite(edgeData.outPort)) {
            link.source({
                id: sourceNode.model.id,
                port: `out${edgeData.outPort}`
            });
        } else {
            link.source(sourceNode.model);
        }
        var targetNode = this._graphView.getNode(edgeData.to);
        if (edgeData && Number.isFinite(edgeData.inPort)) {
            link.target({
                id: targetNode.model.id,
                port: `in${edgeData.inPort}`
            });
        } else {
            link.target(targetNode.model);
        }
        this._graph.addCell(link);
        link.toBack();

        this._paper.findViewByModel(link).on('cell:pointerdown', function () {
            onEdgeSelected(edgeData);
        });

        this.model = link;
    }

    static createLink(edgeSchema, edgeData) {
        var link = new joint.shapes.standard.Link();
        link.attr({
            line: {
                strokeWidth: edgeSchema.strokeWidth || 1,
                stroke: edgeSchema.stroke
            }
        });
        if (edgeSchema.smooth) {
            link.set('connector', { name: 'smooth' });
        }
        if (edgeData && Number.isFinite(edgeData.outPort)) {
            link.attr('line/targetMarker', null);
            return link;
        }
        if (edgeSchema.targetMarker) {
            link.attr('line/targetMarker', {
                'type': 'path',
                'd': 'm1.18355,0.8573c-0.56989,-0.39644 -0.57234,-1.2387 -0.00478,-1.63846l7.25619,-5.11089c0.66255,-0.46663 1.57585,0.00721 1.57585,0.81756l0,10.1587c0,0.8077 -0.908,1.2821 -1.57106,0.8209l-7.2562,-5.04781z',
                'stroke': edgeSchema.targetMarkerStroke || edgeSchema.stroke,
                'fill': edgeSchema.targetMarkerStroke || edgeSchema.stroke
            });
        } else {
            link.attr('line/targetMarker', null);
        }
        link.attr('line/sourceMarker', {
            'type': 'image',
            'xlink:href': sourceMarkerDefaultImage,
            'width': 12,
            'height': 12,
            'y': -6,
            'x': -6
        });
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
        this.model.attr('line/sourceMarker/xlink:href', sourceMarkerActiveImage);
        this.state = GraphViewEdge.STATES.SELECTED;
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
        this.model.attr('line/sourceMarker/xlink:href', sourceMarkerDefaultImage);
        this.state = GraphViewEdge.STATES.DEFAULT;
    }

    mute() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/stroke', '#42495B');
        this.model.attr('line/strokeWidth', edgeSchema.strokeWidth || 1);
        this.model.attr('line/targetMarker', {
            stroke: '#9BA1A3',
            fill: '#9BA1A3'
        });
        this.model.attr('line/sourceMarker', {
            stroke: '#9BA1A3',
            fill: '#9BA1A3'
        });
        this.model.attr('line/sourceMarker/xlink:href', sourceMarkerDeactiveImage);
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

GraphViewEdge.STATES = {
    DEFAULT: 0,
    SELECTED: 1
};

export default GraphViewEdge;
