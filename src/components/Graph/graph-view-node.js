import { TextInput, BooleanInput, NumericInput, Container, Label, ContextMenu } from '../../pcui-external.js';
import * as joint from 'jointjs';
import { Vec2 } from 'playcanvas';

class GraphViewNode {
    constructor(graphView, paper, graph, graphSchema, nodeData, nodeSchema, domEvent, onCreateEdge, onNodeSelected) {
        this._graphView = graphView;
        this._paper = paper;
        this._graph = graph;
        this._graphSchema = graphSchema;
        this.nodeData = nodeData;
        this.state = GraphViewNode.STATES.DEFAULT;

        if (domEvent) {
            var pos = this._graphView.getWindowToGraphPosition(new Vec2(domEvent.clientX, domEvent.clientY));
            nodeData.posX = pos.x;
            nodeData.posY = pos.y;
        }
        var rectHeight = 28;
        var portHeight = 0;
        if (nodeSchema.inPorts) {
            portHeight = (nodeSchema.inPorts.length * 25) + 10;
        }
        if (nodeSchema.outPorts) {
            var outHeight = (nodeSchema.outPorts.length * 25) + 10;
            if (outHeight > portHeight) portHeight = outHeight;
        }
        if (nodeSchema.attributes) {
            portHeight = nodeSchema.attributes.length * 32 + 10;
        }
        var rectSize = { x: 226, y: rectHeight + portHeight };

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
                    text: nodeData.name,
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
                    var source = cell.get('source');
                    var target = cell.get('target');
                    if (source && source.port && target && target.port && target.id === nodeData.id && Number(target.port.replace('in', '')) === i) {
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
                switch (attribute.type) {
                    case 'TEXT_INPUT':
                        input = new TextInput({ class: 'graph-node-input' });
                        break;
                    case 'BOOLEAN_INPUT':
                        input = new BooleanInput({ class: 'graph-node-input' });
                        break;
                    case 'NUMERIC_INPUT':
                        input = new NumericInput({ class: 'graph-node-input', hideSlider: true });
                        break;
                }
                input.dom.setAttribute('id', `input_${attribute.name}`);
                input.value = nodeData[attribute.name];
                container.dom.setAttribute('style', 'margin-top: 5px; margin-bottom: 5px;');
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
            this.model.attr('label/text', value);
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
                        this.model.attr('label/text', value);
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
