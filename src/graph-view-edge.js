import * as joint from 'jointjs/dist/joint.min';
import ContextMenu from '@playcanvas/pcui/ContextMenu';

joint.connectors.smoothInOut = function (sourcePoint, targetPoint, vertices, args) {
    var p1 = sourcePoint.clone();
    p1.offset(30, 0);

    var p2 = targetPoint.clone();
    p2.offset(-30, 0);

    var path = new joint.g.Path(joint.g.Path.createSegment('M', sourcePoint));
    path.appendSegment(joint.g.Path.createSegment('C', p1, p2, targetPoint));
    return path;
};

class GraphViewEdge {
    constructor(graphView, paper, graph, graphSchema, edgeData, edgeSchema, onEdgeSelected) {
        this._graphView = graphView;
        this._config = graphView._config;
        this._paper = paper;
        this._graph = graph;
        this._graphSchema = graphSchema;
        this.edgeData = edgeData;
        this._edgeSchema = edgeSchema;
        this.state = GraphViewEdge.STATES.DEFAULT;

        var link = GraphViewEdge.createLink(this._config.defaultStyles, edgeSchema, edgeData);
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

        var onCellMountedToDom = () => {
            this._paper.findViewByModel(link).on('cell:pointerdown', function () {
                onEdgeSelected(edgeData);
            });
            if (edgeData && Number.isFinite(edgeData.inPort)) {
                this._graphView.updatePortStatesForEdge(link, true);
            }
            link.toBack();
        };
        if (this._graphView._batchingCells) {
            this._graphView._cells.push(link);
            this._graphView._cellMountedFunctions.push(onCellMountedToDom);
        } else {
            this._graph.addCell(link);
            onCellMountedToDom();
        }

        this.model = link;
    }

    static createLink(defaultStyles, edgeSchema, edgeData) {
        var link = new joint.shapes.standard.Link();
        link.attr({
            line: {
                strokeWidth: edgeSchema.strokeWidth || defaultStyles.edge.strokeWidth,
                stroke: edgeSchema.stroke || defaultStyles.edge.stroke
            }
        });
        if (edgeSchema.smooth || defaultStyles.edge.connectionStyle === 'smooth') {
            link.set('connector', { name: 'smooth' });
        } else if (edgeSchema.smoothInOut || defaultStyles.edge.connectionStyle === 'smoothInOut') {
            link.set('connector', { name: 'smoothInOut' });
        }
        if (edgeData && Number.isFinite(edgeData.outPort)) {
            link.attr('line/targetMarker', null);
            return link;
        }
        if (edgeSchema.targetMarker || defaultStyles.edge.targetMarker) {
            link.attr('line/targetMarker', {
                'type': 'path',
                'd': 'm1.18355,0.8573c-0.56989,-0.39644 -0.57234,-1.2387 -0.00478,-1.63846l7.25619,-5.11089c0.66255,-0.46663 1.57585,0.00721 1.57585,0.81756l0,10.1587c0,0.8077 -0.908,1.2821 -1.57106,0.8209l-7.2562,-5.04781z',
                'stroke': edgeSchema.stroke || defaultStyles.edge.stroke,
                'fill': edgeSchema.stroke || defaultStyles.edge.stroke
            });
        } else {
            link.attr('line/targetMarker', null);
        }
        return link;
    }

    addContextMenu(items) {
        if (this._graphView._config.readOnly) return;
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
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/stroke', edgeSchema.strokeSelected || this._config.defaultStyles.edge.strokeSelected);
        this.model.attr('line/strokeWidth', edgeSchema.strokeWidthSelected || this._config.defaultStyles.edge.strokeWidthSelected);
        this.model.attr('line/targetMarker', {
            stroke: edgeSchema.strokeSelected || this._config.defaultStyles.edge.strokeSelected,
            fill: edgeSchema.strokeSelected || this._config.defaultStyles.edge.strokeSelected
        });
    }

    deselect() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/stroke', edgeSchema.stroke || this._config.defaultStyles.edge.stroke);
        this.model.attr('line/strokeWidth', edgeSchema.strokeWidth || this._config.defaultStyles.edge.strokeWidth);
        this.model.attr('line/targetMarker', {
            'stroke': edgeSchema.stroke || this._config.defaultStyles.edge.stroke,
            'fill': edgeSchema.stroke || this._config.defaultStyles.edge.stroke
        });
        this.state = GraphViewEdge.STATES.DEFAULT;
    }

    mute() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/stroke', '#42495B');
        this.model.attr('line/strokeWidth', edgeSchema.strokeWidth || this._config.defaultStyles.edge.stroke);
        this.model.attr('line/targetMarker', {
            stroke: '#9BA1A3',
            fill: '#9BA1A3'
        });
    }

    addSourceMarker() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/sourceMarker', {
            'type': 'path',
            'd': 'm-2.57106,0.93353c-0.56989,-0.39644 -0.57234,-1.2387 -0.00478,-1.63846l7.25619,-5.11089c0.66251,-0.46663 1.57585,0.00721 1.57585,0.81756l0,10.1587c0,0.8077 -0.90803,1.2821 -1.57106,0.8209l-7.2562,-5.04781z',
            'stroke': edgeSchema.stroke || this._config.defaultStyles.edge.stroke,
            'fill': edgeSchema.stroke || this._config.defaultStyles.edge.stroke
        });
    }

    addTargetMarker() {
        const edgeSchema = this._edgeSchema;
        this.model.attr('line/targetMarker', {
            'type': 'path',
            'd': 'm-2.57106,0.93353c-0.56989,-0.39644 -0.57234,-1.2387 -0.00478,-1.63846l7.25619,-5.11089c0.66251,-0.46663 1.57585,0.00721 1.57585,0.81756l0,10.1587c0,0.8077 -0.90803,1.2821 -1.57106,0.8209l-7.2562,-5.04781z',
            'stroke': edgeSchema.stroke || this._config.defaultStyles.edge.stroke,
            'fill': edgeSchema.stroke || this._config.defaultStyles.edge.stroke
        });
    }
}

GraphViewEdge.STATES = {
    DEFAULT: 0,
    SELECTED: 1
};

export default GraphViewEdge;
