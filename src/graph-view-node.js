import * as joint from '@joint/core';
import { Menu, Container, Label, TextInput, BooleanInput, NumericInput, VectorInput } from '@playcanvas/pcui';

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

        const rectHeight = this.getSchemaValue('baseHeight');
        let portHeight = 0;
        let attributeHeight = 0;
        if (nodeSchema.inPorts) {
            portHeight = (nodeSchema.inPorts.length * 25) + 10;
        }
        if (nodeSchema.outPorts) {
            const outHeight = (nodeSchema.outPorts.length * 25) + 10;
            if (outHeight > portHeight) portHeight = outHeight;
        }
        const visibleAttributes = nodeSchema.attributes && nodeSchema.attributes.filter(a => !a.hidden);
        if (visibleAttributes && visibleAttributes.length > 0) {
            attributeHeight = visibleAttributes.length * 32 + 10;
        }
        const rectSize = { x: this.getSchemaValue('baseWidth'), y: rectHeight + portHeight + attributeHeight };

        let labelName;
        const formattedText = nodeSchema.headerTextFormatter && nodeSchema.headerTextFormatter(nodeData.attributes, nodeData.id);
        if (typeof formattedText === 'string') {
            labelName = nodeSchema.headerTextFormatter(nodeData.attributes, nodeData.id);
        } else if (nodeSchema.outPorts || nodeSchema.inPorts) {
            labelName = nodeData.attributes && nodeData.attributes.name ? `${nodeData.attributes.name} (${nodeSchema.name})` : nodeSchema.name;
        } else {
            labelName = nodeData.attributes && nodeData.attributes.name || nodeData.name;
        }
        const rect = new joint.shapes.html.Element({
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
                    refX: 2,
                    refY: 2,
                    width: rectSize.x - 4,
                    height: rectHeight - 4
                },
                labelSeparator: {
                    fill: this.getSchemaValue('stroke'),
                    width: rectSize.x - 2,
                    height: this.getSchemaValue('inPorts') || this.getSchemaValue('outPorts') ? 2 : 0,
                    refX: 1,
                    refY: rectHeight - 1
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
                    x: 8,
                    y: 19
                } : undefined,
                label: {
                    text: labelName,
                    fill: this.getSchemaValue('textColor'),
                    textAnchor: this.getSchemaValue('textAlignMiddle') ? 'middle' : 'left',
                    x: !this.getSchemaValue('textAlignMiddle') ? (this.getSchemaValue('includeIcon') ? 28 : 14) : rectSize.x / 2,
                    y: !this.getSchemaValue('textAlignMiddle') ? 14 : rectHeight / 2,
                    fontSize: 12,
                    fontWeight: 600,
                    width: rectSize.x,
                    height: rectHeight,
                    lineSpacing: 50,
                    lineHeight: this.getSchemaValue('lineHeight')
                },
                marker: nodeData.marker ? {
                    refX: rectSize.x - 20,
                    fill: this.getSchemaValue('stroke'),
                    d: 'M0 0 L20 0 L20 20 Z'
                } : null,
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
                        markup: [{
                            tagName: 'circle',
                            selector: 'portBody',
                            className: 'port-body'
                        }, {
                            tagName: 'circle',
                            selector: 'portInnerBody',
                            className: 'port-inner-body',
                            attributes: { visibility: 'hidden' }
                        }],
                        attrs: {
                            portBody: {
                                strokeWidth: 2,
                                fill: Colors.bcgDarkest,
                                magnet: true,
                                r: 5,
                                cy: 5,
                                cx: 1
                            },
                            portInnerBody: {
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
                        markup: [{
                            tagName: 'circle',
                            selector: 'portBody',
                            className: 'port-body'
                        }, {
                            tagName: 'circle',
                            selector: 'portInnerBody',
                            className: 'port-inner-body',
                            attributes: { visibility: 'hidden' }
                        }],
                        attrs: {
                            portBody: {
                                strokeWidth: 2,
                                fill: Colors.bcgDarkest,
                                magnet: true,
                                r: 5,
                                cy: 5,
                                cx: 9
                            },
                            portInnerBody: {
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
                    markup: [{
                        tagName: 'circle',
                        selector: 'portBody',
                        className: 'port-body',
                        attributes: { id: `${nodeData.id}-in${i}`, edgeType: port.type }
                    }, {
                        tagName: 'circle',
                        selector: 'portInnerBody',
                        className: 'port-inner-body',
                        attributes: { visibility: 'hidden' }
                    }],
                    attrs: {
                        portBody: {
                            stroke: this._graphSchema.edges[port.type].stroke || this._config.defaultStyles.edge.stroke
                        },
                        text: {
                            text: port.textFormatter ? port.textFormatter(nodeData.attributes) : port.name,
                            fill: this.getSchemaValue('textColorSecondary'),
                            'font-size': 14
                        }
                    }
                });
                this._graph.on('change:target', (cell) => {
                    if (this._suppressChangeTargetEvent) return;
                    let target = cell.get('target');
                    let source = cell.get('source');
                    if (!target || !source) return;
                    if (target && target.port && target.port.includes('out')) {
                        const temp = target;
                        target = source;
                        source = temp;
                    }
                    if (!target || !target.id || target.id !== this.model.id) return;
                    if (source && source.port && target.port && Number(target.port.replace('in', '')) === i) {
                        const sourceNodeId = this._graphView.getNode(source.id).nodeData.id;
                        const edgeId = `${sourceNodeId},${source.port.replace('out', '')}-${this.nodeData.id},${target.port.replace('in', '')}`;
                        const edge = {
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
                markup: [{
                    tagName: 'circle',
                    selector: 'portBody',
                    className: 'port-body',
                    attributes: { id: `${nodeData.id}-out${i}`, edgeType: port.type }
                }, {
                    tagName: 'circle',
                    selector: 'portInnerBody',
                    className: 'port-inner-body',
                    attributes: { visibility: 'hidden' }
                }],
                attrs: {
                    type: port.type,
                    portBody: {
                        stroke: this._graphSchema.edges[port.type].stroke || this._config.defaultStyles.edge.stroke
                    },
                    text: {
                        text: port.textFormatter ? port.textFormatter(nodeData.attributes) : port.name,
                        fill: this.getSchemaValue('textColorSecondary'),
                        'font-size': 14
                    }
                }
            }));
        }

        const containers = [];
        if (visibleAttributes) {
            visibleAttributes.forEach((attribute, i) => {
                const container = new Container({ class: 'graph-node-container' });
                const label = new Label({ text: attribute.name, class: 'graph-node-label' });
                let input;
                let nodeValue;
                if (nodeData.attributes) {
                    if (nodeData.attributes[attribute.name] !== undefined) {
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
                        input.inputs.forEach(i => i._sliderControl.dom.remove());
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
                        input.inputs.forEach(i => i._sliderControl.dom.remove());
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
                        input.inputs.forEach(i => i._sliderControl.dom.remove());
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

        const onCellMountedToDom = () => {
            const nodeDiv = document.querySelector(`#nodediv_${rect.id}`);
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
        return this.nodeSchema[item] !== undefined ? this.nodeSchema[item] : this._config.defaultStyles.node[item];
    }

    addContextMenu(items) {
        if (this._graphView._config.readOnly) return;
        this._contextMenu = new Menu({
            items: this._graphView._parent._initializeNodeContextMenuItems(this.nodeData, items)
        });
        this._paper.el.appendChild(this._contextMenu.dom);
        const nodeElement = this._paper.findViewByModel(this.model).el;
        nodeElement.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            this._contextMenu.position(e.clientX, e.clientY);
            this._contextMenu.hidden = false;
        });
    }


    mapVectorToArray(v) {
        const arr = [];
        if (Number.isFinite(v.x)) arr.push(v.x);
        if (Number.isFinite(v.y)) arr.push(v.y);
        if (Number.isFinite(v.z)) arr.push(v.z);
        if (Number.isFinite(v.w)) arr.push(v.w);
        return arr;
    }

    updateFormattedTextFields() {
        if (this.nodeSchema.headerTextFormatter) {
            const formattedText = this.nodeSchema.headerTextFormatter(this.nodeData.attributes, this.nodeData.id);
            if (typeof formattedText === 'string') {
                this.model.attr('label/text', formattedText);
            }
        }
        if (this.nodeSchema.outPorts) {
            this.nodeSchema.outPorts.forEach((port, i) => {
                if (port.textFormatter) {
                    document.getElementById(`${this.nodeData.id}-out${i}`).parentElement.parentElement.querySelector('tspan').innerHTML = port.textFormatter(this.nodeData.attributes);
                }
            });
        }
        if (this.nodeSchema.inPorts) {
            this.nodeSchema.inPorts.forEach((port, i) => {
                if (port.textFormatter) {
                    document.getElementById(`${this.nodeData.id}-in${i}`).parentElement.parentElement.querySelector('tspan').innerHTML = port.textFormatter(this.nodeData.attributes);
                }
            });
        }
    }

    updateAttribute(attribute, value) {
        this.nodeData.attributes[attribute] = value;
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
        this.updateFormattedTextFields();
    }

    setAttributeErrorState(attribute, value) {
        const attributeElement = document.querySelector(`#nodediv_${this.model.id}`).querySelector(`#input_${attribute}`);
        if (attributeElement) {
            attributeElement.ui.error = value;
        }
    }

    updateNodeType(nodeType) {
        this._paper.findViewByModel(this.model).el.removeEventListener('contextmenu', this._contextMenu._contextMenuEvent);
        this.addContextMenu(this._graphSchema.nodes[nodeType].contextMenuItems);
    }

    updatePosition(pos) {
        this.model.position(pos.x, pos.y);
    }

    addEvent(event, callback, attribute) {
        const nodeView = this._paper.findViewByModel(this.model);
        switch (event) {
            case 'updatePosition': {
                nodeView.on('element:pointerup', () => {
                    const newPos = this._graphView.getWindowToGraphPosition(nodeView.getBBox(), false);
                    callback(this.nodeData.id, newPos);
                });
                break;
            }
            case 'updateAttribute': {
                const attributeElement = document.querySelector(`#nodediv_${this.model.id}`).querySelector(`#input_${attribute.name}`);
                if (!attributeElement) break;
                attributeElement.ui.on('change', (value) => {
                    if (attribute.name === 'name') {
                        let nameTaken = false;
                        Object.keys(this._graphView._graphData.get('data.nodes')).forEach((nodeKey) => {
                            const node = this._graphView._graphData.get('data.nodes')[nodeKey];
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
