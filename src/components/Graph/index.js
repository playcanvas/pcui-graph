import { Element } from '../../pcui.js';
import { Observer } from '@playcanvas/pcui/dist/pcui-binding';
import { diff } from 'json-diff';
import { deepCopyFunction } from './util';
import GraphView from './graph-view';
import './style.scss';


export var GRAPH_ACTIONS = {
    ADD_NODE: 'EVENT_ADD_NODE',
    UPDATE_NODE_POSITION: 'EVENT_UPDATE_NODE_POSITION',
    UPDATE_NODE_ATTRIBUTE: 'EVENT_UPDATE_NODE_ATTRIBUTE',
    DELETE_NODE: 'EVENT_DELETE_NODE',
    SELECT_NODE: 'EVENT_SELECT_NODE',
    ADD_EDGE: 'EVENT_ADD_EDGE',
    DELETE_EDGE: 'EVENT_DELETE_EDGE',
    SELECT_EDGE: 'EVENT_SELECT_EDGE',
    DESELECT_ITEM: 'EVENT_DESELECT_ITEM'
};

class SelectedItem {
    constructor(graph, type, id) {
        this._graph = graph;
        this._type = type;
        this._id = id;
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

        this.view = new GraphView(this, this.dom, this._graphSchema, this._graphData);

        this._buildGraphFromData();
        this._addCanvasContextMenu();

        this._selectedItem = null;
        this.view.onBlankSelection(() => {
            this.deselectItem();
        });
    }

    _buildGraphFromData() {
        Object.keys(this._graphData.get(`data.nodes`)).forEach(nodeKey => {
            this.createNode(this._graphData.get(`data.nodes.${nodeKey}`), undefined, true);
        });
        Object.keys(this._graphData.get(`data.edges`)).forEach(edgeKey => {
            this.createEdge(this._graphData.get(`data.edges.${edgeKey}`), edgeKey, true);
        });
    }

    _addCanvasContextMenu() {
        const viewContextMenuItems = this._contextMenuItems.map(item => {
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
                        this.createNode(node, e);
                        this._graphData.set(`data.nodes.${node.id}`, node);
                        this.selectNode(node);
                    };
                }
            }
            return item;
        });
        this.view.addCanvasContextMenu(viewContextMenuItems);
    }

    selectNode(node) {
        this.deselectItem();
        this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_NODE, { detail: node }));
        this._selectedItem = new SelectedItem(this, 'NODE', node.id);
        this._selectedItem.selectItem();
    }

    selectEdge(edge) {
        this.deselectItem();
        this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_EDGE, { detail: { edge } }));
        this._selectedItem = new SelectedItem(this, 'EDGE', `${edge.from}-${edge.to}`);
        this._selectedItem.selectItem();
    }

    deselectItem() {
        if (this._selectedItem) {
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DESELECT_ITEM, { detail: {
                type: this._selectedItem._type,
                id: this._selectedItem._id
            } }));
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
            this.selectEdge(edge);
        });
        var contextMenuItems = deepCopyFunction(edgeSchema.contextMenuItems).map(item => {
            if (item.action === GRAPH_ACTIONS.DELETE_EDGE) {
                item.onClick = () => this.deleteEdge(edgeId);
            }
            return item;
        });
        this.view.addEdgeContextMenu(`${edge.from}-${edge.to}`, contextMenuItems);
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
        this.createEdge(edge, edgeId);
        this.suppressNodeSelect = true;
        this.selectEdge(edge);
    }

    _createUnconnectedEdgeForNode(node, edgeType) {
        var edgeSchema = this._graphSchema.edges[edgeType];
        this.view.addUnconnectedEdge(node.id, edgeType, edgeSchema, this._isValidEdge.bind(this), this.onEdgeConnected.bind(this));
    }

    onCreateEdge(edgeId, edge) {
        this.createEdge(edge, edgeId);
    }

    onNodeSelected(node) {
        if (this.suppressNodeSelect) {
            this.suppressNodeSelect = false;
        } else {
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_NODE, { detail: node }));
            if (this._selectedItem) {
                this._selectedItem.deselectItem();
            }
            this._selectedItem = new SelectedItem(this, 'NODE', node.id);
            this._selectedItem.selectItem();
        }
    }

    onNodePositionUpdated(nodeId, pos) {
        var currNode = this._graphData.get(`data.nodes.${nodeId}`);
        if (pos.x !== currNode.posX || pos.y !== currNode.posY) {
            this._graphData.set(`data.nodes.${nodeId}.posX`, pos.x);
            this._graphData.set(`data.nodes.${nodeId}.posY`, pos.y);
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.UPDATE_NODE_POSITION, { detail: this._graphData.get(`data.nodes.${nodeId}`) }));
        }
    }

    onNodeAttributeUpdated(nodeId, attribute, value) {
        this._graphData.set(`data.nodes.${nodeId}.${attribute.name}`, value);
        this.dom.dispatchEvent(
            new CustomEvent(
                GRAPH_ACTIONS.UPDATE_NODE_ATTRIBUTE,
                {
                    detail: {
                        node: this._graphData.get(`data.nodes.${nodeId}`),
                        attribute: attribute.name
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
                item.onClick = () => this.deleteNode(node.id);
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
                    this.onNodeAttributeUpdated.bind(this),
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
        this._graphData.set(`data.nodes.${nodeId}.${attribute}`, value);
        this.view.updateNodeAttribute(nodeId, attribute, value);
    }

    updateNodeType(nodeId, nodeType) {
        this._graphData.set(`data.nodes.${nodeId}.nodeType`, nodeType);
        this.view.updateNodeType(nodeId, nodeType);
    }

    deleteNode(nodeId, suppressEvents) {
        if (!this._graphData.get(`data.nodes.${nodeId}`)) return;
        this.view.removeNode(nodeId);
        const node = this._graphData.get(`data.nodes.${nodeId}`);
        this._graphData.unset(`data.nodes.${nodeId}`);
        var edges = [];
        var edgeKeys = Object.keys(this._graphData.get('data.edges'));
        for (var i = 0; i < edgeKeys.length; i++) {
            var edge = this._graphData.get(`data.edges.${edgeKeys[i]}`);
            if (edge.from === nodeId || edge.to === nodeId) {
                this._graphData.unset(`data.edges.${edgeKeys[i]}`);
                edges.push(edgeKeys[i]);
                this.view.removeEdge(`${edge.from}-${edge.to}`);
            }
        }
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DELETE_NODE, { detail: { node, edges } }));
    }

    deleteEdge(edgeId, suppressEvents) {
        if (!this._graphData.get(`data.edges.${edgeId}`)) return;
        var { from, to } = this._graphData.get(`data.edges.${edgeId}`) || {};
        this.view.removeEdge(`${from}-${to}`);
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DELETE_EDGE, { detail: { edgeId: edgeId, edge: this._graphData.get(`data.edges.${edgeId}`) } }));
        this._graphData.unset(`data.edges.${edgeId}`);
        var edges = this._graphData.get(`data.edges`);
        Object.keys(edges).forEach(edgeKey => {
            var edge = edges[edgeKey];
            var edgeSchema = this._graphSchema.edges[edge.edgeType];
            if ([edge.from, edge.to].includes(from) && [edge.from, edge.to].includes(to)) {
                this.view.addEdge(edge, edgeSchema, (edge) => {
                    this.selectEdge(edge);
                });
                this.selectEdge(edge);
            }
        });
    }

    on(eventName, callback) {
        this.dom.addEventListener(eventName, (e) => {
            callback(e.detail);
        });
    }

    on(eventName, callback) {
        this.dom.addEventListener(eventName, (e) => {
            callback(e.detail);
        });
    }
}

export default Graph;
