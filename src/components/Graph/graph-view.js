import { ContextMenu } from '../ContextMenu';
import { Vec2 } from 'playcanvas';
import 'jointjs/dist/joint.css';
import 'jointjs/css/layout.css';
import 'jointjs/css/themes/material.css';
import 'jquery';
import 'lodash';
import 'backbone';
import * as joint from 'jointjs';

class GraphView {
    constructor(dom, graphSchema) {
        this._graphSchema = graphSchema;

        this._dom = dom;

        this._graph = new joint.dia.Graph();

        this._paper = new joint.dia.Paper({
            el: dom,
            model: this._graph,
            width: dom.offsetWidth,
            height: dom.offsetHeight,
            clickThreshold: 1,
            background: {
                color: '#b1b8ba'
            },
            gridSize: 10,
            linkPinning: false,
            defaultLink: (cellView, magnet) => {
                var defaultLink = new joint.shapes.standard.Link({
                    connector: {
                        name: 'smooth'
                    }
                });
                defaultLink.attr({
                    line: {
                        stroke: joint.V(magnet).attr('stroke'),
                        strokeWidth: 2,
                        targetMarker: null
                    }
                });
                return defaultLink;
            },
            validateConnection: (cellViewS, magnetS, cellViewT, magnetT, end, linkView) => {
                if (joint.V(cellViewS).id === joint.V(cellViewT).id) return false;
                if (!joint.V(magnetS) || !joint.V(magnetT)) return false;
                if (joint.V(magnetS).attr('stroke') !== joint.V(magnetT).attr('stroke')) return false;
                var sPort = joint.V(magnetS).attr('port');
                var tPort = joint.V(magnetT).attr('port');
                if ((sPort.includes('in') && tPort.includes('in')) || (sPort.includes('out') && tPort.includes('out'))) return false;
                if (tPort.includes('in') && joint.V(magnetT).attr('fill') === 'white') return false;
                if (sPort.includes('in') && joint.V(magnetS).attr('fill') === 'white') return false;
                return true;
            },
            markAvailable: true,
            drawGrid: {
                name: 'doubleMesh',
                args: [
                    { color: '#545f62', thickness: 1 },
                    { color: '#545f62', scaleFactor: 10, thickness: 2 }
                ]
            }
        });

        this._graph.on('add', (cell) => {
            var source = cell.get('source');
            var target = cell.get('target');
            if (source && source.port && target && target.port) {
                this._paper.findViewByModel(source.id)._portElementsCache[source.port].portContentElement.attr('fill', 'white');
                this._paper.findViewByModel(target.id)._portElementsCache[target.port].portContentElement.attr('fill', 'white');
            }
        });
        this._graph.on('remove', (cell) => {
            if (this._suppressChangeTargetEvent) return;
            var source = cell.get('source');
            var target = cell.get('target');
            if (source && source.port && target && target.port) {
                this._paper.findViewByModel(source.id)._portElementsCache[source.port].portContentElement.attr('fill', 'black');
                this._paper.findViewByModel(target.id)._portElementsCache[target.port].portContentElement.attr('fill', 'black');
            }
        });
        this._graph.on('change:target', (cell) => {
            var source = cell.get('source');
            var target = cell.get('target');
            if (source && source.port && target && target.port) {
                this._paper.findViewByModel(source.id)._portElementsCache[source.port].portContentElement.attr('fill', 'white');
                this._paper.findViewByModel(target.id)._portElementsCache[target.port].portContentElement.attr('fill', 'white');
            }
        });
        window.parent.parent.paper = this._paper;
        window.parent.parent.graph = this._graph;

        const ro = new ResizeObserver(entries => {
            this.resizeGraph();
        });
        ro.observe(dom);

        this._panPaper = false;
        this._translate = new Vec2();
        this._totalTranslate = new Vec2();
        this._pan = new Vec2();
        this._mousePos = new Vec2();
        this._paper.on('blank:pointerdown', (e) => {
            this._panPaper = true;
            this._mousePos = new Vec2(e.offsetX, e.offsetY);
        });
        this._paper.on('blank:pointerup', () => {
            this._panPaper = false;
            this._translate.add(this._pan);
        });
        document.addEventListener('mousemove', (e) => {
            if (this._panPaper) {
                this._pan = this._mousePos.clone().sub(new Vec2(e.offsetX, e.offsetY));
                this._mousePos = new Vec2(e.offsetX, e.offsetY);
                this._paper.translate(this._paper.translate().tx - this._pan.x, this._paper.translate().ty - this._pan.y);
            }
        });

        const handleCanvasMouseWheel = (e, x, y, delta) => {
            e.preventDefault();

            const oldScale = this._paper.scale().sx;
            const newScale = oldScale + delta * 0.025;

            this._scaleToPoint(newScale, x, y);
        };
        const handleCellMouseWheel = (cellView, e, x, y, delta) =>
            handleCanvasMouseWheel(e, x, y, delta);

        this._paper.on('cell:mousewheel', handleCellMouseWheel);
        this._paper.on('blank:mousewheel', handleCanvasMouseWheel);

        this._nodes = {};
        this._edges = {};
    }

    _scaleToPoint(nextScale, x, y) {
        if (nextScale >= 0.25 && nextScale <= 1.5) {
            const currentScale = this._paper.scale().sx;

            const beta = currentScale / nextScale;

            const ax = x - (x * beta);
            const ay = y - (y * beta);

            const translate = this._paper.translate();

            const nextTx = translate.tx - ax * nextScale;
            const nextTy = translate.ty - ay * nextScale;

            this._paper.translate(nextTx, nextTy);

            const ctm = this._paper.matrix();

            ctm.a = nextScale;
            ctm.d = nextScale;

            this._paper.matrix(ctm);
        }
    }

    resizeGraph() {
        this._paper.setDimensions(this._dom.offsetWidth, this._dom.offsetHeight);
    }

    addContextMenu(items) {
        this._viewContextMenu = document.createElement('div');
        this._paper.el.appendChild(this._viewContextMenu);
        new ContextMenu({
            dom: this._viewContextMenu,
            items: items
        });
    }


    addNodeContextMenu(id, items) {
        var node = this.getNode(id);
        var nodeView = this._paper.findViewByModel(node);
        var contextMenu = document.createElement('div');
        this._paper.el.appendChild(contextMenu);
        new ContextMenu({
            triggerElement: nodeView.el,
            dom: contextMenu,
            items: items
        });
    }

    addEdgeContextMenu(edgeId, items) {
        var edgeModel = this.getEdge(edgeId);
        var edgeCell = this._paper.findViewByModel(edgeModel);
        var contextMenu = document.createElement('div');
        this._paper.el.appendChild(contextMenu);
        new ContextMenu({
            triggerElement: edgeCell.el,
            dom: contextMenu,
            items: items
        });
    }

    getNode(id) {
        return this._nodes[id];
    }

    addNode(node, nodeSchema, event, onCreateEdge) {
        const scale = this._paper.scale().sx;
        if (event) {
            node.posX = (-this._paper.translate().tx * 1.0 / scale) + ((event.clientX - this._paper.el.getBoundingClientRect().x) * 1.0 / scale);
            node.posY = (-this._paper.translate().ty * 1.0 / scale) + ((event.clientY - this._paper.el.getBoundingClientRect().y) * 1.0 / scale);
        }
        var rectHeight = 30;
        var portHeight = 0;
        if (nodeSchema.inPorts) {
            portHeight = (nodeSchema.inPorts.length * 25) + 10;
        }
        if (nodeSchema.outPorts) {
            var outHeight = (nodeSchema.outPorts.length * 25) + 10;
            if (outHeight > portHeight) portHeight = outHeight;
        }
        var rectSize = { x: 180, y: rectHeight + portHeight };
        if (!nodeSchema.inPorts && !nodeSchema.outPorts) {
            rectSize = { x: 120, y: 40 };
        }
        var rectElement = joint.dia.Element.define('standard.Rectangle', {
        }, {
            markup: [{
                tagName: 'rect',
                selector: 'body'
            }, {
                tagName: 'text',
                selector: 'label'
            }, {
                tagName: 'image',
                selector: 'texture'
            }]
        });

        var rect = new rectElement({
            id: node.id,
            attrs: {
                body: {
                    fill: nodeSchema.fill,
                    stroke: nodeSchema.stroke,
                    strokeWidth: 2,
                    rx: 5,
                    ry: 5,
                    width: rectSize.x,
                    height: rectSize.y
                },
                label: {
                    text: node.name,
                    fill: 'white',
                    refX: rectSize.x / 2,
                    textAnchor: 'middle',
                    refY: 10
                },
                texture: node.texture ? {
                    href: node.texture,
                    fill: 'red',
                    width: 95,
                    height: 95,
                    refX: 5,
                    refY: 65
                } : null
            },
            ports: {
                groups: {
                    'in': {
                        position: {
                            name: 'line',
                            args: {
                                start: { x: 0, y: rectHeight },
                                end: { x: 0, y: rectHeight + (25 * (nodeSchema.inPorts ? nodeSchema.inPorts.length : 0)) }
                            }
                        },
                        label: {
                            position: {
                                name: 'right', args: {
                                    y: 5
                                }
                            }
                        },
                        markup: '<rect class="port-body"/>',
                        attrs: {
                            '.port-body': {
                                stroke: 'black',
                                fill: 'white',
                                strokeWidth: 2,
                                height: 10,
                                width: 10,
                                magnet: true
                            }
                        }
                    },
                    'out': {
                        position: {
                            name: 'line',
                            args: {
                                start: { x: rectSize.x - 10, y: rectHeight },
                                end: { x: rectSize.x - 10, y: rectHeight + (25 * (nodeSchema.outPorts ? nodeSchema.outPorts.length : 0)) }
                            }
                        },
                        label: {
                            position: {
                                name: 'left', args: { y: 5, x: -5 }
                            }
                        },
                        markup: '<rect class="port-body"/>',
                        attrs: {
                            '.port-body': {
                                stroke: 'black',
                                fill: 'white',
                                strokeWidth: 2,
                                height: 10,
                                width: 10,
                                magnet: true
                            }
                        }
                    }
                }
            }
        });
        rect.position(node.posX, node.posY);
        rect.resize(rectSize.x, rectSize.y);

        if (nodeSchema.inPorts) {
            nodeSchema.inPorts.forEach((port, i) => {
                rect.addPort({
                    id: `in${i}`,
                    group: 'in',
                    edgeType: port.edgeType,
                    attrs: {
                        '.port-body': {
                            stroke: this._graphSchema.edges[port.type].stroke,
                            fill: 'black'
                        },
                        text: {
                            text: port.name,
                            fill: 'white',
                            'font-size': 12
                        }
                    }
                });
                this._graph.on('change:target', (cell) => {
                    var source = cell.get('source');
                    var target = cell.get('target');
                    if (source && source.port && target && target.port && target.id === node.id && Number(target.port.replace('in', '')) === i) {
                        var edgeId = `${source.id},${source.port.replace('out', '')}-${target.id},${target.port.replace('in', '')}`;
                        var edge = {
                            to: target.id,
                            from: source.id,
                            outPort: Number(source.port.replace('out', '')),
                            inPort: Number(target.port.replace('in', '')),
                            edgeType: port.type
                        };
                        onCreateEdge(edgeId, edge);
                        this._suppressChangeTargetEvent = true;
                        this._graph.removeCells(cell);
                        this._suppressChangeTargetEvent = false;
                    }
                });
            });
        }

        if (nodeSchema.outPorts) {
            nodeSchema.outPorts.forEach((port, i) => rect.addPort({
                id: `out${i}`,
                group: 'out',
                attrs: {
                    '.port-body': {
                        stroke: this._graphSchema.edges[port.type].stroke,
                        fill: 'black'
                    },
                    text: {
                        text: port.name,
                        fill: 'white',
                        'font-size': 12
                    }
                }
            }));
        }

        this._graph.addCell(rect);
        this._nodes[node.id] = rect;
        this._nodes[rect.id] = node;
    }

    updateNodeName(id, name) {
        this.getNode(id).attr('label/text', name);
    }

    addNodeEvent(id, event, callback) {
        var node = this.getNode(id);
        var nodeView = this._paper.findViewByModel(node);
        switch (event) {
            case 'updatePosition': {
                nodeView.on('element:pointerup', () => {
                    var newPos = {
                        x: (nodeView.el.getBoundingClientRect().x - this._paper.el.getBoundingClientRect().x) * 1 / this._paper.scale().sx,
                        y: (nodeView.el.getBoundingClientRect().y - this._paper.el.getBoundingClientRect().y) * 1 / this._paper.scale().sx
                    };
                    callback(newPos);
                });
            }
        }
    }

    removeNode(id) {
        const node = this.getNode(id);
        this._graph.removeCells(node);
        delete this._nodes[node.id];
        delete this._nodes[id];
    }

    getEdge(id) {
        return this._edges[id];
    }

    removeEdge(id) {
        const edge = this.getEdge(id);
        this._graph.removeCells(edge);
        delete this._edges[id];
    }

    _createEdge(edgeSchema) {
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
                'd': 'M 10 -5 0 0 10 5 Z'
            });
        } else {
            link.attr('line/targetMarker', null);
        }
        if (edgeSchema.souceMarker) {
            link.attr('line/sourceMarker', {
                'type': 'path',
                'd': 'M 10 -5 0 0 10 5 Z'
            });
        } else {
            link.attr('line/sourceMarker', null);
        }
        if (edgeSchema.smooth) {
            link.set('connector', { name: 'smooth' });
        }
        return link;
    }

    addEdge(edge, edgeSchema, edgeId) {
        var link = this._createEdge(edgeSchema);
        var sourceNode = this.getNode(edge.from);
        if (Number.isFinite(edge.outPort)) {
            link.source({
                id: sourceNode.id,
                port: `out${edge.outPort}`
            });
        } else {
            link.source(sourceNode);
        }
        var targetNode = this.getNode(edge.to);
        if (Number.isFinite(edge.inPort)) {
            link.target({
                id: targetNode.id,
                port: `in${edge.inPort}`
            });
        } else {
            link.target(targetNode);
        }
        this._edges[edgeId] = link;
        this._graph.addCell(link);
    }

    addUnconnectedEdge(nodeId, edgeType, edgeSchema, validateEdge, callback) {
        var link = this._createEdge(edgeSchema);
        link.source(this.getNode(nodeId));
        var shouldLink;
        var mouseMoveEvent = (e) => {
            const scale = this._paper.scale().sx;
            var mousePos = new Vec2(
                (-this._paper.translate().tx * 1.0 / scale) + ((e.clientX - this._paper.el.getBoundingClientRect().x) * 1.0 / scale),
                (-this._paper.translate().ty * 1.0 / scale) + ((e.clientY - this._paper.el.getBoundingClientRect().y) * 1.0 / scale)
            );
            var sourceNodeView = this._paper.findViewByModel(this.getNode(nodeId));
            var sourceNodePos = new Vec2(
                (sourceNodeView.el.getBoundingClientRect().x - this._paper.el.getBoundingClientRect().x) * 1 / this._paper.scale().sx,
                (sourceNodeView.el.getBoundingClientRect().y - this._paper.el.getBoundingClientRect().y) * 1 / this._paper.scale().sx
            );
            var pointerVector = mousePos.clone().sub(sourceNodePos);
            pointerVector = pointerVector.sub(pointerVector.clone().normalize().scale(10.0));
            pointerVector = sourceNodePos.add(pointerVector);
            link.target({
                x: pointerVector.x,
                y: pointerVector.y
            });
        };
        var cellPointerDownEvent = (cellView) => {
            var targetNodeId = this.getNode(cellView.model.id).id;
            var nodeModel = this.getNode(nodeId);
            if ((cellView.model.id !== nodeModel.id) && !cellView.model.isLink() && validateEdge(edgeType, nodeId, targetNodeId)) {
                link.target(cellView.model);
                shouldLink = true;
                callback(targetNodeId);
            } else {
                this._graph.removeCells(link);
            }
            document.removeEventListener('mousemove', mouseMoveEvent);
            this._paper.off('cell:pointerdown', cellPointerDownEvent);
        };
        var mouseDownEvent = () => {
            setTimeout(() => this._paper.off('cell:pointerdown', cellPointerDownEvent), 500);
            document.removeEventListener('mousemove', mouseMoveEvent);
            if (!shouldLink) {
                this._graph.removeCells(link);
            }
        };

        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mousedown', mouseDownEvent);
        this._paper.on('cell:pointerdown', cellPointerDownEvent);

        this._graph.addCell(link);
    }


    handleNodeSelect() {
        this._paper.on('cell:pointerdown', (cellView, e) => {
            var node = this.getNode(cellView.model.id);
            if (node) {
                var selectedItem = this._graphData.get('data.selectedItem');
                if (selectedItem) {
                    var selectedModel = this.getNode(Number(selectedItem.split('.')[1]));
                    selectedModel.attr('body/stroke', 'black');
                }
                this._graphData.set('data.selectedItem', `node.${node.id}`);
                cellView.model.attr('body/stroke', 'white');
            }
        });

        this._paper.on('blank:pointerdown', () => {
            var selectedItem = this._graphData.get('data.selectedItem');
            if (selectedItem) {
                var selectedModel = this.getNode(Number(selectedItem.split('.')[1]));
                selectedModel.attr('body/stroke', 'black');
                this._graphData.unset('data.selectedItem');
            }
        });
    }
}

export default GraphView;
