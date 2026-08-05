import { dia, shapes, util } from '@joint/core';

type ExtendableRectangle = {
    extend: (properties: object) => unknown;
    prototype: { defaults: object };
};

const jointShapeElement = () =>
    (shapes.standard.Rectangle as unknown as ExtendableRectangle).extend({
        defaults: util.deepSupplement(
            {
                type: 'html.Element',
                markup: [
                    {
                        tagName: 'rect',
                        selector: 'body'
                    },
                    {
                        tagName: 'rect',
                        selector: 'labelBackground'
                    },
                    {
                        tagName: 'rect',
                        selector: 'labelSeparator'
                    },
                    {
                        tagName: 'rect',
                        selector: 'inBackground'
                    },
                    {
                        tagName: 'rect',
                        selector: 'outBackground'
                    },
                    {
                        tagName: 'text',
                        selector: 'icon'
                    },
                    {
                        tagName: 'text',
                        selector: 'label'
                    },
                    {
                        tagName: 'image',
                        selector: 'texture'
                    },
                    {
                        tagName: 'path',
                        selector: 'marker'
                    }
                ]
            },
            (shapes.standard.Rectangle as unknown as ExtendableRectangle).prototype.defaults
        )
    });

const jointShapeElementView = (paper: dia.Paper) =>
    dia.ElementView.extend({
        initialize: function () {
            this.updateBox = this.updateBox.bind(this);
            dia.ElementView.prototype.initialize.apply(this, arguments as unknown as []);

            this.div = document.createElement('div');
            this.div.setAttribute('id', `nodediv_${this.model.id}`);
            this.div.classList.add('graph-node-div');

            this._fo = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
            this._fo.setAttribute('pointer-events', 'none');
            this._fo.appendChild(this.div);

            this.model.on('change', this.updateBox, this);
            this.model.on('remove', this.removeBox, this);
        },
        render: function () {
            dia.ElementView.prototype.render.apply(this, arguments as unknown as []);
            this.el.appendChild(this._fo);
            this.updateBox();
            return this;
        },
        updateBox: function () {
            const bbox = this.model.getBBox();
            this._fo.setAttribute('width', bbox.width);
            this._fo.setAttribute('height', bbox.height);
            this.div.setAttribute('style', `width: ${bbox.width}px; height: ${bbox.height}px;`);
        },
        removeBox: function (evt: unknown) {
            this._fo.remove();
        }
    });

export { jointShapeElement, jointShapeElementView };
