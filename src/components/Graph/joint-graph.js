import 'jointjs/dist/joint.css';
import 'jointjs/css/layout.css';
import 'jointjs/css/themes/material.css';
import 'jquery';
import 'lodash';
import 'backbone';
import * as joint from 'jointjs';
import { Vec2 } from 'playcanvas';

class JointGraph {

    constructor(dom) {

        this._graph = new joint.dia.Graph({}, { cellNamespace: joint.shape });

        this._paper = new joint.dia.Paper({
            el: dom,
            model: this._graph,
            width: dom.offsetWidth,
            cellViewNamespace: joint.shapes,
            height: dom.offsetHeight,
            clickThreshold: 1,
            background: {
                color: '#20292B'
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

    }

    _resizeGraph() {
        this._paper.setDimensions(this._dom.offsetWidth, this._dom.offsetHeight);
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
}

export default JointGraph;
