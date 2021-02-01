import 'jointjs/dist/joint.css';
import 'jointjs/css/layout.css';
import 'jointjs/css/themes/material.css';
import 'jquery';
import 'lodash';
import 'backbone';
import * as joint from 'jointjs';
import { Vec2 } from 'playcanvas';

class JointGraph {

    constructor(dom, config = {}) {

        this._config = config;
        this._graph = new joint.dia.Graph({}, { cellNamespace: joint.shape });

        this._paper = new joint.dia.Paper({
            el: dom,
            model: this._graph,
            width: dom.offsetWidth,
            cellViewNamespace: joint.shapes,
            height: dom.offsetHeight,
            clickThreshold: 1,
            restrictTranslate: true,
            background: {
                color: '#20292B'
            },
            gridSize: 10,
            linkPinning: false,
            defaultLink: (cellView, magnet) => {
                var defaultLink = new joint.shapes.standard.Link({
                    connector: {
                        name: 'normal'
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
                var sPort = joint.V(magnetS).attr('port');
                var tPort = joint.V(magnetT.parentNode).attr('port');
                if ((sPort.includes('in') && tPort.includes('in')) || (sPort.includes('out') && tPort.includes('out'))) return false;
                if (sPort.includes('in') && joint.V(magnetS.children[1]).attr().visibility !== 'hidden') return false;
                if (tPort.includes('in') && joint.V(magnetT.parentNode.children[1]).attr().visibility !== 'hidden') return false;
                if (cellViewS._portElementsCache[sPort].portContentElement.children()[0].attr().edgeType !== cellViewT._portElementsCache[tPort].portContentElement.children()[0].attr().edgeType) return false;
                return true;
            },
            markAvailable: true,
            drawGrid: {
                name: 'doubleMesh',
                args: [
                    { color: '#0e1923', thickness: 1 },
                    { color: '#06101b', scaleFactor: 10, thickness: 2 }
                ]
            }
        });

        const graphResizeObserver = new ResizeObserver(_ => {
            this._resizeGraph();
        });
        graphResizeObserver.observe(dom);

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
        dom.addEventListener('mousemove', (e) => {
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

        if (config.adjustVertices) {
            var adjustGraphVertices = _.partial(this.adjustVertices.bind(this), this._graph);

            // adjust vertices when a cell is removed or its source/target was changed
            this._graph.on('add remove change:source change:target', adjustGraphVertices);

            // adjust vertices when the user stops interacting with an element
            this._paper.on('cell:pointerup', adjustGraphVertices);
        }


    }

    _resizeGraph() {
        this._paper.setDimensions(this._dom.offsetWidth, this._dom.offsetHeight);
    }

    _scaleToPoint(nextScale, x, y) {
        if (nextScale >= (this._config.minZoom || 0.25) && nextScale <= (this._config.maxZoom || 1.5)) {
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

    adjustVertices(graph, cell) {
        if (this.ignoreAdjustVertices) return;
        // if `cell` is a view, find its model
        cell = cell.model || cell;
        if (cell instanceof joint.dia.Element) {
            // `cell` is an element
            _.chain(graph.getConnectedLinks(cell))
                .groupBy((link) => {
                    // the key of the group is the model id of the link's source or target
                    // cell id is omitted
                    return _.omit([link.source().id, link.target().id], cell.id)[0];
                })
                .each((group, key) => {
                    // if the member of the group has both source and target model
                    // then adjust vertices
                    if (key !== 'undefined') this.adjustVertices(graph, _.first(group));
                })
                .value();
            return;
        }
        // `cell` is a link
        // get its source and target model IDs
        var sourceId = cell.get('source').id || cell.previous('source').id;
        var targetId = cell.get('target').id || cell.previous('target').id;
        // if one of the ends is not a model
        // (if the link is pinned to paper at a point)
        // the link is interpreted as having no siblings
        if (!sourceId || !targetId) return;
        // identify link siblings
        var siblings = _.filter(graph.getLinks(), (sibling) => {
            var siblingSourceId = sibling.source().id;
            var siblingTargetId = sibling.target().id;
            // if source and target are the same
            // or if source and target are reversed
            return ((siblingSourceId === sourceId) && (siblingTargetId === targetId)) ||
                ((siblingSourceId === targetId) && (siblingTargetId === sourceId));
        });
        var numSiblings = siblings.length;
        switch (numSiblings) {
            case 0: {
                // the link has no siblings
                break;
            } case 1: {
                // there is only one link
                // no vertices needed
                cell.unset('vertices');
                cell.set('connector', { name: 'normal' });
                break;
            } default: {
                // there are multiple siblings
                // we need to create vertices
                // find the middle point of the link
                var sourceCenter = graph.getCell(sourceId).getBBox().center();
                var targetCenter = graph.getCell(targetId).getBBox().center();
                var midPoint = joint.g.Line(sourceCenter, targetCenter).midpoint();
                // find the angle of the link
                var theta = sourceCenter.theta(targetCenter);
                // constant
                // the maximum distance between two sibling links
                var GAP = 20;
                _.each(siblings, (sibling, index) => {
                    // we want offset values to be calculated as 0, 20, 20, 40, 40, 60, 60 ...
                    var offset = GAP * Math.ceil(index / 2);
                    // place the vertices at points which are `offset` pixels perpendicularly away
                    // from the first link
                    //
                    // as index goes up, alternate left and right
                    //
                    //  ^  odd indices
                    //  |
                    //  |---->  index 0 sibling - centerline (between source and target centers)
                    //  |
                    //  v  even indices
                    var sign = ((index % 2) ? 1 : -1);
                    // to assure symmetry, if there is an even number of siblings
                    // shift all vertices leftward perpendicularly away from the centerline
                    if ((numSiblings % 2) === 0) {
                        offset -= ((GAP / 2) * sign);
                    }
                    // make reverse links count the same as non-reverse
                    var reverse = ((theta < 180) ? 1 : -1);
                    // we found the vertex
                    var angle = joint.g.toRad(theta + (sign * reverse * 90));

                    var shift = joint.g.Point.fromPolar(offset * sign, angle, 0);
                    this.ignoreAdjustVertices = true;
                    sibling.source(sibling.getSourceCell(), {
                        anchor: {
                            name: 'center',
                            args: {
                                dx: shift.x,
                                dy: shift.y,
                            }
                        } 
                    });
                    sibling.target(sibling.getTargetCell(), {
                        anchor: {
                            name: 'center',
                            args: {
                                dx: shift.x,
                                dy: shift.y,
                            }
                        } 
                    });
                    this.ignoreAdjustVertices = false;
                });
            }
        }
    }
}

export default JointGraph;
