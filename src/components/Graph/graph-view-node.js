import { TextInput, BooleanInput, NumericInput, Container, Label, ContextMenu, VectorInput } from '../../pcui-external.js';
import * as joint from 'jointjs';
import { Vec2 } from 'playcanvas';
import { node } from 'prop-types';

class GraphViewNode {
    constructor(graphView, paper, graph, graphSchema, nodeData, nodeSchema, domEvent, onCreateEdge, onNodeSelected) {
        this._graphView = graphView;
        this._paper = paper;
        this._graph = graph;
        this._graphSchema = graphSchema;
        this.nodeData = nodeData;
        this.nodeSchema = nodeSchema;
        this.state = GraphViewNode.STATES.DEFAULT;

        if (domEvent) {
            var pos = this._graphView.getWindowToGraphPosition(new Vec2(domEvent.clientX, domEvent.clientY));
            nodeData.posX = pos.x;
            nodeData.posY = pos.y;
        }
        var rectHeight = 28;
        var portHeight = 0;
        var attributeHeight = 0;
        if (nodeSchema.inPorts) {
            portHeight = (nodeSchema.inPorts.length * 25) + 10;
        }
        if (nodeSchema.outPorts) {
            var outHeight = (nodeSchema.outPorts.length * 25) + 10;
            if (outHeight > portHeight) portHeight = outHeight;
        }
        if (nodeSchema.attributes) {
            attributeHeight = nodeSchema.attributes.length * 32 + 10;
        }
        var rectSize = { x: 226, y: rectHeight + portHeight + attributeHeight };

        var labelName;
        if (nodeSchema.outPorts || nodeSchema.inPorts) {
            labelName = nodeData.attributes && nodeData.attributes.name ? `${nodeSchema.name} (${nodeData.attributes.name})` : nodeSchema.name;
        } else {
            labelName = nodeData.name;
        }
        var rect = new joint.shapes.html.Element({
            attrs: {
                body: {
                    fill: nodeSchema.fill,
                    stroke: nodeSchema.stroke,
                    strokeWidth: 2,
                    width: rectSize.x,
                    height: rectSize.y
                },
                labelBackground: {
                    fill: '#293538',
                    width: rectSize.x - 2,
                    height: rectHeight - 2,
                    refX: 1,
                    refY: 1
                },
                icon: {
                    text: nodeSchema.icon || '',
                    fontFamily: 'pc-icon',
                    fontSize: 14,
                    fill: nodeSchema.iconColor || '#F60',
                    refX: 8,
                    refY: 8
                },
                label: {
                    text: labelName,
                    fill: 'white',
                    textAnchor: 'left',
                    refX: 28,
                    refY: 14,
                    fontSize: 12,
                    fontWeight: 600,
                    width: 40,
                    height: 40
                },
                texture: nodeData.texture ? {
                    href: nodeData.texture,
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
                        markup: '<circle class="port-body"></circle><circle class="port-inner-body" visibility="hidden"></circle>',
                        attrs: {
                            '.port-body': {
                                strokeWidth: 2,
                                fill: '#20292B',
                                magnet: true,
                                r: 5,
                                cy: 5,
                                cx: 1
                            },
                            '.port-inner-body': {
                                strokeWidth: 2,
                                stroke: '#0379EE',
                                r: 1,
                                cy: 5,
                                cx: 1
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
                        markup: '<circle class="port-body"></circle><circle class="port-inner-body" visibility="hidden"></circle>',
                        attrs: {
                            '.port-body': {
                                strokeWidth: 2,
                                fill: '#20292B',
                                magnet: true,
                                r: 5,
                                cy: 5,
                                cx: 9
                            },
                            '.port-inner-body': {
                                strokeWidth: 2,
                                stroke: '#0379EE',
                                r: 1,
                                cy: 5,
                                cx: 9
                            }
                        }
                    }
                }
            }
        });
        rect.position(nodeData.posX, nodeData.posY);
        rect.resize(rectSize.x, rectSize.y);

        if (nodeSchema.inPorts) {
            nodeSchema.inPorts.forEach((port, i) => {
                rect.addPort({
                    id: `in${i}`,
                    group: 'in',
                    edgeType: port.edgeType,
                    markup: `<circle class="port-body" edgeType="${port.type}"></circle><circle class="port-inner-body" visibility="hidden"></circle>`,
                    attrs: {
                        '.port-body': {
                            stroke: this._graphSchema.edges[port.type].stroke
                        },
                        text: {
                            text: port.name,
                            fill: 'white',
                            'font-size': 12
                        }
                    }
                });
                this._graph.on('change:target', (cell) => {
                    if (this._suppressChangeTargetEvent) return;
                    var target = cell.get('target');
                    var source = cell.get('source');
                    if (!target || !source) return;
                    if (target && target.port && target.port.includes('out')) {
                        var temp = target;
                        target = source;
                        source = temp;
                    }
                    if (!target || !target.id || target.id !== this.model.id) return;
                    if (source && source.port && target.port && Number(target.port.replace('in', '')) === i) {
                        var sourceNodeId = this._graphView.getNode(source.id).nodeData.id;
                        var edgeId = `${sourceNodeId},${source.port.replace('out', '')}-${this.nodeData.id},${target.port.replace('in', '')}`;
                        var edge = {
                            to: this.nodeData.id,
                            from: sourceNodeId,
                            outPort: Number(source.port.replace('out', '')),
                            inPort: Number(target.port.replace('in', '')),
                            edgeType: port.type
                        };
                        this._suppressChangeTargetEvent = true;
                        this._graph.removeCells(cell);
                        this._suppressChangeTargetEvent = false;
                        onCreateEdge(edgeId, edge);
                    }
                });
            });
        }

        if (nodeSchema.outPorts) {
            nodeSchema.outPorts.forEach((port, i) => rect.addPort({
                id: `out${i}`,
                group: 'out',
                markup: `<circle class="port-body" edgeType="${port.type}"></circle><circle class="port-inner-body" visibility="hidden"></circle>`,
                attrs: {
                    type: port.type,
                    '.port-body': {
                        stroke: this._graphSchema.edges[port.type].stroke
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

        if (nodeSchema.attributes) {
            const nodeDiv = document.querySelector(`#nodediv_${rect.id}`);
            nodeSchema.attributes.forEach((attribute, i) => {
                const container = new Container({ class: 'graph-node-container' });
                const label = new Label({ text: attribute.name, class: 'graph-node-label' });
                let input;
                let nodeValue;
                var dimensionMap = {
                    0: 'x',
                    1: 'y',
                    2: 'z',
                    3: 'w'
                };
                switch (attribute.type) {
                    case 'TEXT_INPUT':
                        nodeValue = nodeData.attributes[attribute.name];
                        input = new TextInput({ class: 'graph-node-input', value: nodeValue });
                        break;
                    case 'BOOLEAN_INPUT':
                        nodeValue = nodeData.attributes[attribute.name];
                        input = new BooleanInput({ class: 'graph-node-input', value: nodeValue });
                        break;
                    case 'NUMERIC_INPUT':
                        nodeValue = nodeData.attributes[attribute.name];
                        input = new NumericInput({ class: 'graph-node-input', hideSlider: true, value: nodeValue.x });
                        break;
                    case 'VEC_2_INPUT':
                        nodeValue = nodeData.attributes[attribute.name];
                        input = new VectorInput({ dimensions: 2, class: 'graph-node-input', hideSlider: true, value: [
                            nodeValue.x,
                            nodeValue.y
                        ] });
                        input.dom.setAttribute('style', 'margin-right: 6px;');
                        input.inputs.forEach(i => i._sliderControl.dom.remove());
                        break;
                    case 'VEC_3_INPUT':
                        nodeValue = nodeData.attributes[attribute.name];
                        input = new VectorInput({ dimensions: 3, class: 'graph-node-input', hideSlider: true, value: [
                            nodeValue.x,
                            nodeValue.y,
                            nodeValue.z
                        ] });
                        input.dom.setAttribute('style', 'margin-right: 6px;');
                        input.inputs.forEach(i => i._sliderControl.dom.remove());
                        break;
                    case 'VEC_4_INPUT':
                        nodeValue = nodeData.attributes[attribute.name];
                        input = new VectorInput({ dimensions: 4, class: 'graph-node-input', hideSlider: true, value: [
                            nodeValue.x,
                            nodeValue.y,
                            nodeValue.z,
                            nodeValue.w
                        ] });
                        input.dom.setAttribute('style', 'margin-right: 6px;');
                        input.inputs.forEach(i => i._sliderControl.dom.remove());
                        break;
                }
                input.dom.setAttribute('id', `input_${attribute.name}`);
                container.dom.setAttribute('style', `margin-top: ${i === 0 ? 33 + portHeight : 5}px; margin-bottom: 5px;`);
                container.append(label);
                container.append(input);
                nodeDiv.appendChild(container.dom);
            });
        }

        this._paper.findViewByModel(rect).on('element:pointerdown', () => {
            if (this._hasLinked) {
                this._hasLinked = false;
                return;
            }
            onNodeSelected(this.nodeData);
        });

        this.model = rect;
    }

    addContextMenu(items) {
        var nodeView = this._paper.findViewByModel(this.model);
        var contextMenu = document.createElement('div');
        this._paper.el.appendChild(contextMenu);
        this._contextMenuElement = contextMenu;
        this._contextMenu = new ContextMenu({
            triggerElement: nodeView.el,
            dom: contextMenu,
            items: this._graphView._parent.initialiseNodeContextMenuItems(this.nodeData, items)
        });
    }

    updateAttribute(attribute, value) {
        if (attribute === 'name') {
            var labelName;
            if (this.nodeSchema.outPorts || this.nodeSchema.inPorts) {
                labelName = `${this.nodeSchema.name} (${value})`;
            } else {
                labelName = value;
            }
            this.model.attr('label/text', labelName);
        }
        const attributeElement = document.querySelector(`#nodediv_${this.model.id}`).querySelector(`#input_${attribute}`);
        if (attributeElement) {
            attributeElement.ui.value = value;
            attributeElement.ui.error = false;
        }
    }

    updateNodeType(nodeType) {
        this._paper.findViewByModel(this.model).el.removeEventListener('contextmenu', this._contextMenu._contextMenuEvent);
        this._paper.el.removeChild(this._contextMenuElement);
        this.addContextMenu(this._graphSchema.nodes[nodeType].contextMenuItems);
    }

    updatePosition(pos) {
        this.model.position(pos.x, pos.y);
    }

    addEvent(event, callback, attribute) {
        var nodeView = this._paper.findViewByModel(this.model);
        switch (event) {
            case 'updatePosition': {
                nodeView.on('element:pointerup', () => {
                    callback(this.nodeData.id, this._graphView.getWindowToGraphPosition(nodeView.el.getBoundingClientRect()));
                });
                break;
            }
            case 'updateAttribute': {
                document.querySelector(`#nodediv_${this.model.id}`).querySelector(`#input_${attribute.name}`).ui.on('change', (value) => {
                    if (attribute.name === 'name') {
                        var nameTaken = false;
                        Object.keys(this._graphView._graphData.get('data.nodes')).forEach(nodeKey => {
                            var node = this._graphView._graphData.get('data.nodes')[nodeKey];
                            if (node.name === value) {
                                nameTaken = true;
                            }
                        });
                        const attributeElement = document.querySelector(`#nodediv_${this.model.id}`).querySelector(`#input_${attribute.name}`);
                        if (nameTaken) {
                            attributeElement.ui.error = true;
                            return;
                        }
                        attributeElement.ui.error = false;
                        var labelName;
                        if (this.nodeSchema.outPorts || this.nodeSchema.inPorts) {
                            labelName = `${this.nodeSchema.name} (${value})`;
                        } else {
                            labelName = value;
                        }
                        this.model.attr('label/text', labelName);
                    }
                    callback(this.nodeData.id, attribute, value);
                });
                break;
            }
        }
    }

    select() {
        this.model.attr({
            body: {
                stroke: '#F60',
                strokeWidth: 1
            }
        });
        this.state = GraphViewNode.STATES.SELECTED;
    }

    hover() {
        if (this.state === GraphViewNode.STATES.SELECTED) return;

        this.model.attr({
            body: {
                stroke: 'rgba(255, 102, 0, 0.32)',
                strokeWidth: 1
            }
        });
    }

    hoverRemove() {
        if (this.state === GraphViewNode.STATES.DEFAULT) {
            this.deselect();
        } else if (this.state === GraphViewNode.STATES.SELECTED) {
            this.select();
        }

    }

    deselect() {
        var nodeSchema = this._graphSchema.nodes[this.nodeData.nodeType];
        this.model.attr('body/stroke', nodeSchema.stroke);
        this.state = GraphViewNode.STATES.DEFAULT;
    }
}

GraphViewNode.STATES = {
    DEFAULT: 0,
    SELECTED: 1
};

export default GraphViewNode;
