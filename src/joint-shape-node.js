import * as joint from '@joint/core';
import _ from 'lodash';

const jointShapeElement = () => joint.shapes.standard.Rectangle.extend({
    defaults: joint.util.deepSupplement({
        type: 'html.Element',
        markup: [{
            tagName: 'rect',
            selector: 'body'
        }, {
            tagName: 'rect',
            selector: 'labelBackground'
        }, {
            tagName: 'rect',
            selector: 'labelSeparator'
        }, {
            tagName: 'rect',
            selector: 'inBackground'
        }, {
            tagName: 'rect',
            selector: 'outBackground'
        }, {
            tagName: 'text',
            selector: 'icon'
        }, {
            tagName: 'text',
            selector: 'label'
        }, {
            tagName: 'image',
            selector: 'texture'
        }, {
            tagName: 'path',
            selector: 'marker'
        }]
    }, joint.shapes.standard.Rectangle.prototype.defaults)
});

const jointShapeElementView = paper => joint.dia.ElementView.extend({
    initialize: function () {
        _.bindAll(this, 'updateBox');
        joint.dia.ElementView.prototype.initialize.apply(this, arguments);

        this.div = document.createElement('div');
        this.div.setAttribute('id', `nodediv_${this.model.id}`);
        this.div.classList.add('graph-node-div');

        // // Update the box position whenever the underlying model changes.
        this.model.on('change', this.updateBox, this);
        paper.on('cell:mousewheel', this.updateBox, this);
        paper.on('blank:mousewheel', this.updateBox, this);
        paper.on('blank:pointerup', this.updateBox, this);
        document.addEventListener('mousemove', (e) => {
            this.updateBox();
        });
        // // Remove the box when the model gets removed from the graph.
        this.model.on('remove', this.removeBox, this);

        this.updateBox();
    },
    render: function () {
        joint.dia.ElementView.prototype.render.apply(this, arguments);
        paper.$el.append(this.div);
        this.updateBox();
        return this;
    },
    updateBox: function () {
        // Set the position and dimension of the box so that it covers the JointJS element.
        const bbox = this.model.getBBox();
        // Example of updating the HTML with a data stored in the cell model.
        this.div.setAttribute('style', `
            position: absolute;
            width: ${bbox.width}px;
            height: ${bbox.height}px;
            left: ${bbox.width / 2 * paper.scale().sx}px;
            top: ${bbox.height / 2 * paper.scale().sx}px;
            transform: translate(${paper.translate().tx + paper.scale().sx * bbox.x - bbox.width / 2}px, ${paper.translate().ty + paper.scale().sx * bbox.y - (bbox.height / 2)}px) scale(${paper.scale().sx});
        `);
    },
    removeBox: function (evt) {
        this.div.remove();
    }
});

export {
    jointShapeElement,
    jointShapeElementView
};
