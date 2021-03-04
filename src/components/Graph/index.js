import { Element } from '../../pcui-external';
import { Observer } from '../../pcui-binding-external';
import { diff } from 'json-diff';
import { deepCopyFunction } from './util';
import GraphView from './graph-view';
import './style.scss';
import './style-story.scss';


export var GRAPH_ACTIONS = {
    ADD_NODE: 'EVENT_ADD_NODE',
    DELETE_NODE: 'EVENT_DELETE_NODE',
    SELECT_NODE: 'EVENT_SELECT_NODE',
    UPDATE_NODE_POSITION: 'EVENT_UPDATE_NODE_POSITION',
    UPDATE_NODE_ATTRIBUTE: 'EVENT_UPDATE_NODE_ATTRIBUTE',
    ADD_EDGE: 'EVENT_ADD_EDGE',
    DELETE_EDGE: 'EVENT_DELETE_EDGE',
    SELECT_EDGE: 'EVENT_SELECT_EDGE',
    DESELECT_ITEM: 'EVENT_DESELECT_ITEM',
    UPDATE_TRANSLATE: 'EVENT_UPDATE_TRANSLATE',
    UPDATE_SCALE: 'EVENT_UPDATE_SCALE'
};

var defaultConfig = {
    edgeHoverEffect: true,
    passiveUIEvents: false,
    readOnly: false,
    restrictTranslate: false
};

class SelectedItem {
    constructor(graph, type, id, edgeId) {
        this._graph = graph;
        this._type = type;
        this._id = id;
        this._edgeId = edgeId;
    }

    get type() {
        return this._type;
    }

    get id() {
        return this._id;
    }

    get edgeId() {
        return this._edgeId;
    }

    selectItem() {
        switch (this._type) {
            case 'NODE':
                this._graph.view.selectNode(this._id);
                break;
            case 'EDGE':
                this._graph.view.selectEdge(this._id);
                break;
        }
    }

    deselectItem() {
        switch (this._type) {
            case 'NODE':
                this._graph.view.deselectNode(this._id);
                break;
            case 'EDGE':
                this._graph.view.deselectEdge(this._id);
                break;
        }
    }
}

class Graph extends Element {
    /**
     * Creates a new Graph.
     *
     * @param {object} args - The arguments. Extends the pcui.Element constructor arguments. All settable properties can also be set through the constructor.
     * @param {boolean} [args.unsafe] - If true then the innerHTML property will be used to set the text. Otherwise textContent will be used instead.
     * @param {number} [args.nodeCount=100] - Amount of nodes to render (each node contains 8-24 links depending on it's position)
     */
    constructor(args) {
        if (!args) args = {};
        super(args.dom ? args.dom : document.createElement('div'), args);
        this.class.add('pcui-graph');
        this.diff = diff;
        this._graphData = new Observer({ data: args.graphData });
        this._graphSchema = args.graphSchema;
        this._contextMenuItems = args.contextMenuItems;

        this._suppressGraphDataEvents = false;

        this._config = { ...defaultConfig, ...args.config };
        if (this._config.readOnly) this._config.passiveUIEvents = true;

        this.view = new GraphView(this, this.dom, this._graphSchema, this._graphData, this._config);

        this._buildGraphFromData();
        if (!this._config.readOnly) {
            this._addCanvasContextMenu();
        }

        this._selectedItem = null;
        this.view.onBlankSelection(() => {
            this.deselectItem();
        });
    }

    _buildGraphFromData() {
        this.view.batchCells();
        Object.keys(this._graphData.get(`data.nodes`)).forEach(nodeKey => {
            var node = this._graphData.get(`data.nodes.${nodeKey}`);
            var nodeSchema = this._graphSchema.nodes[node.nodeType];
            if (nodeSchema.attributes) {
                if (nodeSchema.attributes && !node.attributes) {
                    node.attributes = {};
                }
                nodeSchema.attributes.forEach(attribute => {
                    if (!node.attributes[attribute.name] && attribute.defaultValue) {
                        this._suppressGraphDataEvents = true;
                        this._graphData.set(`data.nodes.${nodeKey}.attributes.${attribute.name}`, attribute.defaultValue);
                        this._suppressGraphDataEvents = false;
                    }
                });
            }
            this.createNode(this._graphData.get(`data.nodes.${nodeKey}`), undefined, true);
        });
        Object.keys(this._graphData.get(`data.edges`)).forEach(edgeKey => {
            this.createEdge(this._graphData.get(`data.edges.${edgeKey}`), edgeKey, true);
        });
        this.view.applyBatchedCells();
    }

    _addCanvasContextMenu() {
        var updateItem = (item) => {
            switch (item.action) {
                case GRAPH_ACTIONS.ADD_NODE: {
                    item.onClick = (e) => {
                        var node = {
                            ...item,
                            id: Number(`${Date.now()}${Math.floor(Math.random() * 10000)}`)
                        };
                        delete node.action;
                        delete node.text;
                        delete node.onClick;
                        if (node.name) {
                            node.name = `${node.name} ${Object.keys(this._graphData.get('data.nodes')).length}`;
                        }
                        var nodeSchema = this._graphSchema.nodes[node.nodeType];
                        if (nodeSchema.attributes && !node.attributes) {
                            node.attributes = {};
                        }
                        if (nodeSchema.attributes) {
                            nodeSchema.attributes.forEach(attribute => {
                                if (!node.attributes[attribute.name] && attribute.defaultValue) {
                                    node.attributes[attribute.name] = attribute.defaultValue;
                                }
                            });
                        }
                        let element = e.target;
                        while (!element.classList.contains('pcui-contextmenu')) {
                            element = element.parentElement;
                        }
                        var pos = {
                            x: Number(element.style.left.replace('px', '')),
                            y: Number(element.style.top.replace('px', ''))
                        };
                        pos = this.getWindowToGraphPosition(pos);
                        node.posX = pos.x;
                        node.posY = pos.y;
                        if (this._config.passiveUIEvents) {
                            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.ADD_NODE, { detail: node }));
                        } else {
                            this.createNode(node);
                            this._graphData.set(`data.nodes.${node.id}`, node);
                            this.selectNode(node);
                        }
                    };
                }
            }
            return item;
        };
        const viewContextMenuItems = this._contextMenuItems.map(item => {
            item = updateItem(item);
            if (!item.items) return item;
            item.items.map(subitem => {
                return updateItem(subitem);
            });
            return item;
        });
        this.view.addCanvasContextMenu(viewContextMenuItems);
    }

    get selectedItem() {
        return this._selectedItem;
    }

    selectNode(node, suppressEvents) {
        const prevItem = this._selectedItem;
        this.deselectItem();
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_NODE, { detail: { node, prevItem } }));
        this._selectedItem = new SelectedItem(this, 'NODE', node.id);
        this._selectedItem.selectItem();
    }

    selectEdge(edge, edgeId, suppressEvents) {
        const prevItem = this._selectedItem;
        this.deselectItem();
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_EDGE, { detail: { edge, edgeId, prevItem } }));
        this._selectedItem = new SelectedItem(this, 'EDGE', `${edge.from}-${edge.to}`, edgeId);
        this._selectedItem.selectItem();
    }

    deselectItem(suppressEvents) {
        if (this._selectedItem) {
            if (!suppressEvents) {
                this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DESELECT_ITEM, { detail: {
                    type: this._selectedItem._type,
                    id: this._selectedItem._id,
                    edgeId: this._selectedItem._edgeId
                } }));
            }
            this._selectedItem.deselectItem();
            this._selectedItem = null;
        }
    }

    _isValidEdge(edgeType, source, target) {
        var edge = this._graphSchema.edges[edgeType];
        return edge.from.includes(this._graphData.get(`data.nodes.${source}.nodeType`)) && edge.to.includes(this._graphData.get(`data.nodes.${target}.nodeType`));
    }

    createEdge(edge, edgeId, suppressEvents) {
        var edgeSchema = this._graphSchema.edges[edge.edgeType];
        this.view.addEdge(edge, edgeSchema, (edge) => {
            this.selectEdge(edge, edgeId);
        });
        var contextMenuItems = deepCopyFunction(edgeSchema.contextMenuItems).map(item => {
            if (item.action === GRAPH_ACTIONS.DELETE_EDGE) {
                item.onClick = () => {
                    if (this._config.passiveUIEvents) {
                        this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DELETE_EDGE, { detail: { edgeId: edgeId, edge: this._graphData.get(`data.edges.${edgeId}`) } }));
                    } else {
                        this.deleteEdge(edgeId);
                    }
                };
            }
            return item;
        });
        var addEdgeContextMenuFunction = () => {
            if (Number.isFinite(edge.outPort)) {
                this.view.addEdgeContextMenu(`${edge.from},${edge.outPort}-${edge.to},${edge.inPort}`, contextMenuItems);
            } else {
                this.view.addEdgeContextMenu(`${edge.from}-${edge.to}`, contextMenuItems);
            }
        };

        if (this.view.isBatchingCells()) {
            this.view.addCellMountedFunction(addEdgeContextMenuFunction);
        } else {
            addEdgeContextMenuFunction();
        }

        if (!this._graphData.get(`data.edges.${edgeId}`)) {
            this._graphData.set(`data.edges.${edgeId}`, edge);
        }
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.ADD_EDGE, { detail: { edge, edgeId } }));
    }


    onEdgeConnected(edgeType, from, to) {
        var edgeId = Number(`${Date.now()}${Math.floor(Math.random() * 10000)}`);
        var edge = {
            from: from,
            to: to,
            edgeType: edgeType,
            conditions: {}
        };
        if (this._config.passiveUIEvents) {
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.ADD_EDGE, { detail: { edge, edgeId } }));
            return;
        }
        this.createEdge(edge, edgeId);
        this.suppressNodeSelect = true;
        this.selectEdge(edge, edgeId);
    }

    _createUnconnectedEdgeForNode(node, edgeType) {
        var edgeSchema = this._graphSchema.edges[edgeType];
        this.view.addUnconnectedEdge(node.id, edgeType, edgeSchema, this._isValidEdge.bind(this), this.onEdgeConnected.bind(this));
    }

    onCreateEdge(edgeId, edge) {
        if (this._config.passiveUIEvents) {
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.ADD_EDGE, { detail: { edge, edgeId } }));
            return;
        }
        if (Number.isFinite(edge.inPort)) {
            Object.keys(this._graphData.get('data.edges')).forEach(edgeKey => {
                var edgeToCompare = this._graphData.get(`data.edges.${edgeKey}`);
                if (edgeToCompare.to === edge.to && edgeToCompare.inPort === edge.inPort) {
                    this.deleteEdge(edgeKey);
                }
            });
        }
        this.createEdge(edge, edgeId);
    }

    onNodeSelected(node) {
        if (this.suppressNodeSelect) {
            this.suppressNodeSelect = false;
        } else {
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_NODE, { detail: { node, prevItem: this._selectedItem } }));
            if (this._selectedItem) {
                this._selectedItem.deselectItem();
            }
            this._selectedItem = new SelectedItem(this, 'NODE', node.id);
            this._selectedItem.selectItem();
        }
    }

    onNodePositionUpdated(nodeId, pos) {
        var node = this._graphData.get(`data.nodes.${nodeId}`);
        var prevPosX = node.posX;
        var prevPosY = node.posY;
        if (pos.x !== node.posX || pos.y !== node.posY) {
            node.posX = pos.x;
            node.posY = pos.y;
            if (!this._config.passiveUIEvents) {
                this._graphData.set(`data.nodes.${nodeId}`, node);
            } else {
                this.updateNodePosition(nodeId, { x: prevPosX, y: prevPosY });
            }
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.UPDATE_NODE_POSITION, { detail: node }));
        }
    }

    _onNodeAttributeUpdated(nodeId, attribute, value) {
        var node = this._graphData.get(`data.nodes.${nodeId}`);
        var prevAttributeValue;
        let attributeKey = node.attributes[attribute.name] ? attribute.name : undefined;
        if (!attributeKey) {
            Object.keys(node.attributes).forEach(k => {
                const item = node.attributes[k];
                if (item.name === attribute.name) attributeKey = k;
            });
        }
        if (Number.isFinite(node.attributes[attributeKey].x)) {
            prevAttributeValue = { ...node.attributes[attributeKey] };
        } else {
            prevAttributeValue = node.attributes[attributeKey];
        }
        if (Array.isArray(value)) {
            var keyMap = ['x', 'y', 'z', 'w'];
            value.forEach((v, i) => {
                node.attributes[attributeKey][keyMap[i]] = v;
            });
        } else {
            node.attributes[attributeKey] = value;
        }
        if (JSON.stringify(node.attributes[attributeKey]) === JSON.stringify(prevAttributeValue)) return;
        if (this._config.passiveUIEvents) {
            this.updateNodeAttribute(nodeId, attribute.name, prevAttributeValue);
        } else {
            this._graphData.set(`data.nodes.${nodeId}`, node);
        }
        this.dom.dispatchEvent(
            new CustomEvent(
                GRAPH_ACTIONS.UPDATE_NODE_ATTRIBUTE,
                {
                    detail: {
                        node: node,
                        attribute: attribute.name,
                        attributeKey: attributeKey
                    }
                }
            )
        );
    }

    initialiseNodeContextMenuItems(node, items) {
        var contextMenuItems = deepCopyFunction(items).map(item => {
            if (item.action === GRAPH_ACTIONS.ADD_EDGE) {
                item.onClick = () => this._createUnconnectedEdgeForNode(node, item.edgeType);
            }
            if (item.action === GRAPH_ACTIONS.DELETE_NODE) {
                item.onClick = () => this.deleteNode(node.id, false, this._config.passiveUIEvents);
            }
            return item;
        });
        return contextMenuItems;
    }

    createNode(node, domEvent, suppressEvents) {
        var nodeSchema = this._graphSchema.nodes[node.nodeType];
        node = this.view.addNode(
            node,
            nodeSchema,
            domEvent,
            this.onCreateEdge.bind(this),
            this.onNodeSelected.bind(this)
        );

        if (!this._graphData.get(`data.nodes.${node.id}`)) {
            this._graphData.set(`data.nodes.${node.id}`, node);
        }
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.ADD_NODE, { detail: node }));
        this.view.addNodeEvent(
            node.id,
            'updatePosition',
            this.onNodePositionUpdated.bind(this)
        );
        if (nodeSchema.attributes) {
            nodeSchema.attributes.forEach(attribute => {
                this.view.addNodeEvent(
                    node.id,
                    `updateAttribute`,
                    this._onNodeAttributeUpdated.bind(this),
                    attribute
                );
            });
        }
        var contextMenuItems = this.initialiseNodeContextMenuItems(node, nodeSchema.contextMenuItems);
        this.view.addNodeContextMenu(node.id, contextMenuItems);
    }

    updateNodePosition(nodeId, pos) {
        if (!this._graphData.get(`data.nodes.${nodeId}`)) return;
        this._graphData.set(`data.nodes.${nodeId}.posX`, pos.x);
        this._graphData.set(`data.nodes.${nodeId}.posY`, pos.y);
        this.view.updateNodePosition(nodeId, pos);
    }

    updateNodeAttribute(nodeId, attribute, value) {
        if (!this._graphData.get(`data.nodes.${nodeId}`)) return;
        this._graphData.set(`data.nodes.${nodeId}.attributes.${attribute}`, value);
        this.view.updateNodeAttribute(nodeId, attribute, value);
    }

    updateNodeType(nodeId, nodeType) {
        if (Number.isFinite(nodeType) && this._graphData.get(`data.nodes.${nodeId}`)) {
            this._graphData.set(`data.nodes.${nodeId}.nodeType`, nodeType);
            this.view.updateNodeType(nodeId, nodeType);
        }
    }

    deleteNode(nodeId, suppressEvents, passiveUIEvents) {
        if (!this._graphData.get(`data.nodes.${nodeId}`)) return;
        if (this._selectedItem && this._selectedItem._id === nodeId) this.deselectItem();
        if (!passiveUIEvents) this.view.removeNode(nodeId);
        const node = this._graphData.get(`data.nodes.${nodeId}`);
        if (!passiveUIEvents) this._graphData.unset(`data.nodes.${nodeId}`);
        var edges = [];
        var edgeData = {};
        var edgeKeys = Object.keys(this._graphData.get('data.edges'));
        for (var i = 0; i < edgeKeys.length; i++) {
            var edge = this._graphData.get(`data.edges.${edgeKeys[i]}`);
            edgeData[edgeKeys[i]] = edge;
            if (edge.from === nodeId || edge.to === nodeId) {
                if (!passiveUIEvents) this._graphData.unset(`data.edges.${edgeKeys[i]}`);
                edges.push(edgeKeys[i]);
                if (!passiveUIEvents) this.view.removeEdge(`${edge.from}-${edge.to}`);
            }
        }
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DELETE_NODE, { detail: { node, edges } }));
        return { node, edges, edgeData };
    }

    deleteEdge(edgeId, suppressEvents) {
        if (!this._graphData.get(`data.edges.${edgeId}`)) return;
        var { from, to, outPort, inPort } = this._graphData.get(`data.edges.${edgeId}`) || {};
        if (this._selectedItem && this._selectedItem._id === `${from}-${to}`) this.deselectItem();

        if (Number.isFinite(outPort)) {
            this.view.removeEdge(`${from},${outPort}-${to},${inPort}`);
        } else {
            this.view.removeEdge(`${from}-${to}`);
        }
        this.view.removeEdge(`${from}-${to}`);
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DELETE_EDGE, { detail: { edgeId: edgeId, edge: this._graphData.get(`data.edges.${edgeId}`) } }));
        this._graphData.unset(`data.edges.${edgeId}`);
        var edges = this._graphData.get(`data.edges`);
        Object.keys(edges).forEach(edgeKey => {
            var edge = edges[edgeKey];
            var edgeSchema = this._graphSchema.edges[edge.edgeType];
            if ([edge.from, edge.to].includes(from) && [edge.from, edge.to].includes(to)) {
                this.view.addEdge(edge, edgeSchema, (edge) => {
                    this.selectEdge(edge, edgeKey);
                });
                this.selectEdge(edge, edgeKey);
            }
        });
    }

    setGraphPosition(posX, posY) {
        this.view.setGraphPosition(posX, posY);
    }

    getGraphPosition() {
        return this.view.getGraphPosition();
    }

    setGraphScale(scale) {
        this.view.setGraphScale(scale);
        Object.keys(this.view._nodes).forEach(nodeKey => {
            this.view._paper.findViewByModel(this.view._nodes[nodeKey].model).updateBox();
        });
    }

    getGraphScale() {
        return this.view.getGraphScale();
    }

    getWindowToGraphPosition(pos) {
        return this.view.getWindowToGraphPosition(pos);
    }

    getGraphPosition(pos) {
        return this.view.getGraphPosition(pos);
    }

    on(eventName, callback) {
        if (this._config.readOnly && (!eventName.includes('EVENT_SELECT_') && !eventName.includes('EVENT_DESELECT'))) return;
        this.dom.addEventListener(eventName, (e) => {
            callback(e.detail);
        });
    }
}

Graph.GRAPH_ACTIONS = GRAPH_ACTIONS;

export default Graph;
