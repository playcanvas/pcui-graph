import * as joint from '@joint/core';
import _ from 'lodash';

import { Vec2 } from './lib/vec2';

(joint.V as any).matrixToTransformString = function (matrix: any) {
    if (!matrix) matrix = true;
    return `matrix(${[
        matrix.a || 1,
        matrix.b || 0,
        matrix.c || 0,
        matrix.d || 1,
        matrix.e || 0,
        matrix.f || 0
    ]})`;
};

(joint.V as any).prototype.transform = function (matrix: any, opt: any) {

    const node = this.node;
    if ((joint.V as any).isUndefined(matrix)) {
        return (node.parentNode) ?
            this.getTransformToElement(node.parentNode) :
            node.getScreenCTM();
    }

    if (opt && opt.absolute) {
        return this.attr('transform', (joint.V as any).matrixToTransformString(matrix));
    }

    const svgTransform = (joint.V as any).createSVGTransform(matrix);
    node.transform.baseVal.appendItem(svgTransform);
    return this;
};

class JointGraph {
    _config: any;

    _graph: any;

    _paper: any;

    _panPaper: boolean;

    _translate: Vec2;

    _totalTranslate: Vec2;

    _pan: Vec2;

    _mousePos: Vec2;

    ignoreAdjustVertices: boolean;

    constructor(dom: HTMLElement, config: any = {}) {

        this._config = config;
        this._graph = new joint.dia.Graph({}, { cellNamespace: (joint as any).shape });

        this._paper = new joint.dia.Paper({
            el: dom,
            model: this._graph,
            width: dom.offsetWidth,
            cellViewNamespace: joint.shapes,
            height: dom.offsetHeight,
            clickThreshold: 1,
            restrictTranslate: this._config.restrictTranslate,
            background: {
                color: config.defaultStyles.background.color
            },
            gridSize: config.defaultStyles.background.gridSize,
            linkPinning: false,
            interactive: !this._config.readOnly,
            defaultLink: (cellView: any, magnet: any) => {
                const stroke = magnet.getAttribute('stroke') || '#0379EE';
                return new joint.shapes.standard.Link({
                    connector: { name: 'normal' },
                    attrs: {
                        line: {
                            stroke: stroke,
                            strokeWidth: 2,
                            targetMarker: null
                        }
                    }
                });
            },
            validateConnection: (cellViewS: any, magnetS: any, cellViewT: any, magnetT: any, end: any, linkView: any) => {
                // Can't connect to self
                if (cellViewS.model.id === cellViewT.model.id) return false;

                // Need valid magnets
                if (!magnetS || !magnetT) return false;

                // Get port info from the parent group element
                const sPortGroup = magnetS.parentNode;
                const tPortGroup = magnetT.parentNode;
                if (!sPortGroup || !tPortGroup) return false;

                const sPort = sPortGroup.getAttribute('port');
                const tPort = tPortGroup.getAttribute('port');
                if (!sPort || !tPort) return false;

                // Can't connect in-to-in or out-to-out
                if ((sPort.includes('in') && tPort.includes('in')) || (sPort.includes('out') && tPort.includes('out'))) return false;

                // Check if source port is already connected (for 'in' ports)
                if (sPort.includes('in')) {
                    const innerBody = sPortGroup.querySelector('.port-inner-body');
                    if (innerBody && innerBody.getAttribute('visibility') !== 'hidden') return false;
                }

                // Check edge type compatibility (JointJS 4.x converts edgeType to edge-type)
                const sEdgeType = magnetS.getAttribute('edge-type') || magnetS.getAttribute('edgeType');
                const tEdgeType = magnetT.getAttribute('edge-type') || magnetT.getAttribute('edgeType');
                if (sEdgeType !== tEdgeType) return false;

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
        } as any);

        const graphResizeObserver = new ResizeObserver(() => {
            this._resizeGraph(dom);
        });
        graphResizeObserver.observe(dom);

        this._panPaper = false;
        this._translate = new Vec2();
        this._totalTranslate = new Vec2();
        this._pan = new Vec2();
        this._mousePos = new Vec2();
        this.ignoreAdjustVertices = false;
        this._paper.on('blank:pointerdown', (e: any) => {
            this._panPaper = true;
            this._mousePos = new Vec2(e.offsetX, e.offsetY);
        });
        this._paper.on('blank:pointerup', () => {
            this._panPaper = false;
            this._translate.add(this._pan);
        });
        dom.addEventListener('mousemove', (e: MouseEvent) => {
            if (this._panPaper) {
                this._pan = this._mousePos.clone().sub(new Vec2(e.offsetX, e.offsetY));
                this._mousePos = new Vec2(e.offsetX, e.offsetY);
                this._paper.translate(this._paper.translate().tx - this._pan.x, this._paper.translate().ty - this._pan.y);
            }
        });

        const handleCanvasMouseWheel = (e: any, x: number, y: number, delta: number) => {
            e.preventDefault();
            const oldScale = this._paper.scale().sx;
            const newScale = oldScale + delta * 0.025;
            this._scaleToPoint(newScale, x, y);
        };
        const handleCellMouseWheel = (cellView: any, e: any, x: number, y: number, delta: number) => handleCanvasMouseWheel(e, x, y, delta);

        this._paper.on('cell:mousewheel', handleCellMouseWheel);
        this._paper.on('blank:mousewheel', handleCanvasMouseWheel);

        if (config.adjustVertices) {
            const adjustGraphVertices = _.partial(this.adjustVertices.bind(this), this._graph);

            // adjust vertices when a cell is removed or its source/target was changed
            this._graph.on('add remove change:source change:target', adjustGraphVertices);

            // adjust vertices when the user stops interacting with an element
            this._paper.on('cell:pointerup', adjustGraphVertices);
        }
    }

    _resizeGraph(dom: HTMLElement): void {
        this._paper.setDimensions(dom.offsetWidth, dom.offsetHeight);
    }

    _scaleToPoint(nextScale: number, x: number, y: number): void {
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

    adjustVertices(graph: any, cell: any): void {
        if (this.ignoreAdjustVertices) return;
        // if `cell` is a view, find its model
        cell = cell.model || cell;
        if (cell instanceof joint.dia.Element) {
            // `cell` is an element
            _.chain(graph.getConnectedLinks(cell))
            .groupBy((link: any) => {
                // the key of the group is the model id of the link's source or target
                // cell id is omitted
                return (_.omit([link.source().id, link.target().id], cell.id) as any)[0];
            })
            .each((group: any, key: any) => {
                // if the member of the group has both source and target model
                // then adjust vertices
                if (key !== 'undefined') this.adjustVertices(graph, _.first(group));
            })
            .value();
            return;
        }
        // `cell` is a link
        // get its source and target model IDs
        const sourceId = cell.get('source').id || cell.previous('source').id;
        const targetId = cell.get('target').id || cell.previous('target').id;
        // if one of the ends is not a model
        // (if the link is pinned to paper at a point)
        // the link is interpreted as having no siblings
        if (!sourceId || !targetId) return;
        // identify link siblings
        const siblings = _.filter(graph.getLinks(), (sibling: any) => {
            const siblingSourceId = sibling.source().id;
            const siblingTargetId = sibling.target().id;
            // if source and target are the same
            // or if source and target are reversed
            return ((siblingSourceId === sourceId) && (siblingTargetId === targetId)) ||
                ((siblingSourceId === targetId) && (siblingTargetId === sourceId));
        });
        const numSiblings = siblings.length;
        switch (numSiblings) {
            case 0: {
                break;
            } case 1: {
                cell.unset('vertices');
                cell.set('connector', { name: 'normal' });
                break;
            } default: {
                const sourceCenter = graph.getCell(sourceId).getBBox().center();
                const targetCenter = graph.getCell(targetId).getBBox().center();
                (joint.g as any).Line(sourceCenter, targetCenter).midpoint();
                const theta = sourceCenter.theta(targetCenter);
                const GAP = 20;
                _.each(siblings, (sibling: any, index: number) => {
                    let offset = GAP * Math.ceil(index / 2);
                    const sign = ((index % 2) ? 1 : -1);
                    if ((numSiblings % 2) === 0) {
                        offset -= ((GAP / 2) * sign);
                    }
                    const reverse = ((theta < 180) ? 1 : -1);
                    const angle = (joint.g as any).toRad(theta + (sign * reverse * 90));

                    const shift = (joint.g as any).Point.fromPolar(offset * sign, angle, 0);
                    this.ignoreAdjustVertices = true;
                    sibling.source(sibling.getSourceCell(), {
                        anchor: {
                            name: 'center',
                            args: {
                                dx: shift.x,
                                dy: shift.y
                            }
                        }
                    });
                    sibling.target(sibling.getTargetCell(), {
                        anchor: {
                            name: 'center',
                            args: {
                                dx: shift.x,
                                dy: shift.y
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
