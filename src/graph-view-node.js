import * as joint from 'jointjs/dist/joint.min';
import ContextMenu from '@playcanvas/pcui/ContextMenu';
import Container from '@playcanvas/pcui/Container';
import Label from '@playcanvas/pcui/Label';
import TextInput from '@playcanvas/pcui/TextInput';
import BooleanInput from '@playcanvas/pcui/BooleanInput';
import NumericInput from '@playcanvas/pcui/NumericInput';
import VectorInput from '@playcanvas/pcui/VectorInput';

const Colors = {
    bcgDarkest: '#20292b',
    bcgDarker: '#293538',
    bcgDark: '#2c393c',
    bcgPrimary: '#364346',
    textDarkest: '#5b7073',
    textDark: '#9ba1a3',
    textSecondary: '#b1b8ba',
    textPrimary: '#ffffff',
    textActive: '#f60'
};

class GraphViewNode {
    constructor(graphView, paper, graph, graphSchema, nodeData, nodeSchema, onCreateEdge, onNodeSelected) {
        this._graphView = graphView;
        this._config = graphView._config;
        this._paper = paper;
        this._graph = graph;
        this._graphSchema = graphSchema;
        this.nodeData = nodeData;
        this.nodeSchema = nodeSchema;
        this.state = GraphViewNode.STATES.DEFAULT;

        var rectHeight = 28;
        var portHeight = 0;
        var attributeHeight = 0;
        if (nodeSchema.inPorts) {
            portHeight = (nodeSchema.inPorts.length * 25) + 12;
        }
        if (nodeSchema.outPorts) {
            var outHeight = (nodeSchema.outPorts.length * 25) + 12;
            if (outHeight > portHeight) portHeight = outHeight;
        }
        if (nodeSchema.attributes) {
            attributeHeight = nodeSchema.attributes.length * 32 + 10;
        }
        var rectSize = { x: 226, y: rectHeight + portHeight + attributeHeight };

        var labelName;
        if (nodeSchema.outPorts || nodeSchema.inPorts) {
            labelName = nodeData.attributes && nodeData.attributes.name ? `${nodeData.attributes.name} (${nodeSchema.name})` : nodeSchema.name;
        } else {
            labelName = nodeData.attributes && nodeData.attributes.name || nodeData.name;
        }
        var rect = new joint.shapes.html.Element({
            attrs: {
                body: {
                    fill: this.getSchemaValue('fill'),
                    stroke: this.getSchemaValue('stroke'),
                    strokeWidth: 2,
                    width: rectSize.x,
                    height: rectSize.y
                },
                labelBackground: {
                    fill: this.getSchemaValue('fill'),
                    refX: 1,
                    refY: 1,
                    width: rectSize.x - 2,
                    height: rectHeight - 2
                },
                inBackground: {
                    fill: this.getSchemaValue('fillSecondary'),
                    width: this.getSchemaValue('inPorts') ? rectSize.x / 2 - 1 : rectSize.x - 2,
                    height: (rectSize.y - rectHeight - 2) >= 0 ? rectSize.y - rectHeight - 2 : 0,
                    refX: 1,
                    refY: rectHeight + 1
                },
                outBackground: {
                    fill: this.getSchemaValue('fill'),
                    width: this.getSchemaValue('inPorts') ? rectSize.x / 2 - 1 : 0,
                    height: (rectSize.y - rectHeight - 2) >= 0 ? rectSize.y - rectHeight - 2 : 0,
                    refX: rectSize.x / 2,
                    refY: rectHeight + 1
                },
                icon: this.getSchemaValue('includeIcon') ? {
                    text: this.getSchemaValue('icon'),
                    fontFamily: 'pc-icon',
                    fontSize: 14,
                    fill: this.getSchemaValue('iconColor'),
                    refX: 8,
                    refY: 8
                } : undefined,
                label: {
                    text: labelName,
                    fill: this.getSchemaValue('textColor'),
                    textAnchor: 'left',
                    refX: this.getSchemaValue('includeIcon') ? 28 : 14,
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
                                name: 'right',
                                args: {
                                    y: 5
                                }
                            }
                        },
                        markup: '<circle class="port-body"></circle><circle class="port-inner-body" visibility="hidden"></circle>',
                        attrs: {
                            '.port-body': {
                                strokeWidth: 2,
                                fill: Colors.bcgDarkest,
                                magnet: true,
                                r: 5,
                                cy: 5,
                                cx: 1
                            },
                            '.port-inner-body': {
                                strokeWidth: 2,
                                stroke: this._config.defaultStyles.edge.stroke,
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
                                fill: Colors.bcgDarkest,
                                magnet: true,
                                r: 5,
                                cy: 5,
                                cx: 9
                            },
                            '.port-inner-body': {
                                strokeWidth: 2,
                                stroke: this._config.defaultStyles.edge.stroke,
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
                            stroke: this._graphSchema.edges[port.type].stroke || this._config.defaultStyles.edge.stroke
                        },
                        text: {
                            text: port.name,
                            fill: this.getSchemaValue('textColorSecondary'),
                            'font-size': 14
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
                        stroke: this._graphSchema.edges[port.type].stroke || this._config.defaultStyles.edge.stroke
                    },
                    text: {
                        text: port.name,
                        fill: this.getSchemaValue('textColorSecondary'),
                        'font-size': 14
                    }
                }
            }));
        }

        var containers = [];
        if (nodeSchema.attributes) {
            nodeSchema.attributes.forEach((attribute, i) => {
                const container = new Container({ class: 'graph-node-container' });
                const label = new Label({ text: attribute.name, class: 'graph-node-label' });
                let input;
                let nodeValue;
                if (nodeData.attributes) {
                    if (nodeData.attributes[attribute.name]) {
                        nodeValue = nodeData.attributes[attribute.name];
                    } else {
                        Object.keys(nodeData.attributes).forEach((k) => {
                            const a = nodeData.attributes[k];
                            if (a.name === attribute.name) {
                                nodeValue = a.defaultValue;
                            }
                        });
                    }
                }
                if (!nodeValue) {
                    nodeValue = nodeData[attribute.name];
                }
                switch (attribute.type) {
                    case 'TEXT_INPUT':
                        input = new TextInput({ class: 'graph-node-input', value: nodeValue });
                        break;
                    case 'BOOLEAN_INPUT':
                        input = new BooleanInput({ class: 'graph-node-input', value: nodeValue });
                        break;
                    case 'NUMERIC_INPUT':
                        input = new NumericInput({ class: 'graph-node-input', hideSlider: true, value: nodeValue && nodeValue.x ? nodeValue.x : nodeValue });
                        break;
                    case 'VEC_2_INPUT':
                        input = new VectorInput({ dimensions: 2,
                            class: 'graph-node-input',
                            hideSlider: true,
                            value: [
                                nodeValue.x,
                                nodeValue.y
                            ] });
                        input.dom.setAttribute('style', 'margin-right: 6px;');
                        input.inputs.forEach((i) => i._sliderControl.dom.remove());
                        break;
                    case 'VEC_3_INPUT':
                        input = new VectorInput({ dimensions: 3,
                            class: 'graph-node-input',
                            hideSlider: true,
                            value: [
                                nodeValue.x,
                                nodeValue.y,
                                nodeValue.z
                            ] });
                        input.dom.setAttribute('style', 'margin-right: 6px;');
                        input.inputs.forEach((i) => i._sliderControl.dom.remove());
                        break;
                    case 'VEC_4_INPUT':
                        input = new VectorInput({ dimensions: 4,
                            class: 'graph-node-input',
                            hideSlider: true,
                            value: [
                                nodeValue.x,
                                nodeValue.y,
                                nodeValue.z,
                                nodeValue.w
                            ] });
                        input.dom.setAttribute('style', 'margin-right: 6px;');
                        input.inputs.forEach((i) => i._sliderControl.dom.remove());
                        break;
                }
                input.enabled = !this._graphView._config.readOnly;
                input.dom.setAttribute('id', `input_${attribute.name}`);
                container.dom.setAttribute('style', `margin-top: ${i === 0 ? 33 + portHeight : 5}px; margin-bottom: 5px;`);
                container.append(label);
                container.append(input);
                containers.push(container);
            });
        }

        var onCellMountedToDom = () => {
            var nodeDiv = document.querySelector(`#nodediv_${rect.id}`);
            containers.forEach((container) => {
                nodeDiv.appendChild(container.dom);
            });
            this._paper.findViewByModel(rect).on('element:pointerdown', () => {
                if (this._hasLinked) {
                    this._hasLinked = false;
                    return;
                }
                onNodeSelected(this.nodeData);
            });
        };

        if (this._graphView._batchingCells) {
            this._graphView._cells.push(rect);
            this._graphView._cellMountedFunctions.push(onCellMountedToDom);
        } else {
            this._graph.addCell(rect);
            onCellMountedToDom();
        }

        this.model = rect;
    }

    getSchemaValue(item) {
        return this.nodeSchema[item] || this._config.defaultStyles.node[item];
    }

    addContextMenu(items) {
        if (this._graphView._config.readOnly) return;
        var nodeView = this._paper.findViewByModel(this.model);
        var contextMenu = document.createElement('div');
        this._paper.el.appendChild(contextMenu);
        this._contextMenuElement = contextMenu;
        this._contextMenu = new ContextMenu({
            triggerElement: nodeView.el,
            dom: contextMenu,
            items: this._graphView._parent._initialiseNodeContextMenuItems(this.nodeData, items)
        });
    }


    mapVectorToArray(v) {
        var arr = [];
        if (Number.isFinite(v.x)) arr.push(v.x);
        if (Number.isFinite(v.y)) arr.push(v.y);
        if (Number.isFinite(v.z)) arr.push(v.z);
        if (Number.isFinite(v.w)) arr.push(v.w);
        return arr;
    }

    updateAttribute(attribute, value) {
        if (attribute === 'name') {
            var labelName;
            if (this.nodeSchema.outPorts || this.nodeSchema.inPorts) {
                labelName = `${value} (${this.nodeSchema.name})`;
            } else {
                labelName = value;
            }
            this.model.attr('label/text', labelName);
        }
        const attributeElement = document.querySelector(`#nodediv_${this.model.id}`).querySelector(`#input_${attribute}`);
        if (attributeElement) {
            attributeElement.ui.suspendEvents = true;
            if (Number.isFinite(value.x)) {
                attributeElement.ui.value = this.mapVectorToArray(value);
            } else {
                attributeElement.ui.value = value;
            }
            attributeElement.ui.error = false;
            attributeElement.ui.suspendEvents = false;
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
                    var newPos = this._graphView.getWindowToGraphPosition(nodeView.el.getBoundingClientRect());
                    callback(this.nodeData.id, newPos);
                });
                break;
            }
            case 'updateAttribute': {
                document.querySelector(`#nodediv_${this.model.id}`).querySelector(`#input_${attribute.name}`).ui.on('change', (value) => {
                    if (attribute.name === 'name') {
                        var nameTaken = false;
                        Object.keys(this._graphView._graphData.get('data.nodes')).forEach((nodeKey) => {
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
        this.model.attr('body/stroke', this.getSchemaValue('strokeSelected'));
        this.state = GraphViewNode.STATES.SELECTED;
    }

    hover() {
        if (this.state === GraphViewNode.STATES.SELECTED) return;
        this.model.attr('body/stroke', this.getSchemaValue('strokeHover'));
    }

    hoverRemove() {
        if (this.state === GraphViewNode.STATES.DEFAULT) {
            this.deselect();
        } else if (this.state === GraphViewNode.STATES.SELECTED) {
            this.select();
        }
    }

    deselect() {
        this.model.attr('body/stroke', this.getSchemaValue('stroke'));
        this.state = GraphViewNode.STATES.DEFAULT;
    }
}

GraphViewNode.STATES = {
    DEFAULT: 0,
    SELECTED: 1
};

export default GraphViewNode;
