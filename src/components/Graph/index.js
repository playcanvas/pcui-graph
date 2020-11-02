import { Element } from '@playcanvas/pcui';
import { Observer } from '@playcanvas/pcui/pcui-binding';
import { diff } from 'json-diff';
import GraphView from './graph-view';
import './style.scss';

const deepCopyFunction = (inObject) => {
    let outObject, value, key;

    if (typeof inObject !== "object" || inObject === null) {
        return inObject; // Return the value if inObject is not an object
    }

    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {};

    for (key in inObject) {
        value = inObject[key];

        // Recursively (deep) copy for nested objects, including arrays
        outObject[key] = deepCopyFunction(value);
    }

    return outObject;
};


export var GRAPH_ACTIONS = {
    ADD_NODE: 'EVENT_ADD_NODE',
    UPDATE_NODE_POSITION: 'EVENT_UPDATE_NODE_POSITION',
    DELETE_NODE: 'EVENT_DELETE_NODE',
    SELECT_NODE: 'EVENT_SELECT_NODE',
    ADD_EDGE: 'EVENT_ADD_EDGE',
    DELETE_EDGE: 'EVENT_DELETE_EDGE',
    SELECT_EDGE: 'EVENT_SELECT_EDGE',
    DESELECT_ITEM: 'EVENT_DESELECT_ITEM'
};

/**
 * @name Graph
 * @classdesc Represents a graph.
 * @mixes pcui.IFocusable
 */

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

        this.view = new GraphView(this.dom, this._graphSchema, this._graphData);

        this._buildGraphFromData();
        this._addContextMenu();

        this._selectedItem = null;
        this.view.onBlankSelection(() => {
            if (this._selectedItem) {
                this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DESELECT_ITEM, { detail: {
                    type: this._selectedItem._type,
                    id: this._selectedItem._id
                } }));
                this._selectedItem.deselectItem();
                this._selectedItem = null;
            }
        });
    }

    _buildGraphFromData() {
        Object.keys(this._graphData.get(`data.nodes`)).forEach(nodeKey => {
            this.createNode(this._graphData.get(`data.nodes.${nodeKey}`), undefined, true);
        });
        Object.keys(this._graphData.get(`data.edges`)).forEach(edgeKey => {
            this.createConnectedEdge(this._graphData.get(`data.edges.${edgeKey}`), edgeKey, true);
        });
    }

    _addContextMenu() {
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
                        this.createNode(node, e);
                        this._graphData.set(`data.nodes.${node.id}`, node);
                        this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_NODE, { detail: node }));
                        if (this._selectedItem) {
                            this._selectedItem.deselectItem();
                        }
                        this._selectedItem = new SelectedItem(this, 'NODE', node.id);
                        this._selectedItem.selectItem();
                    };
                }
            }
            return item;
        });
        this.view.addContextMenu(viewContextMenuItems);
    }

    _isValidEdge(edgeType, source, target) {
        var edge = this._graphSchema.edges[edgeType];
        return edge.from.includes(this._graphData.get(`data.nodes.${source}.nodeType`)) && edge.to.includes(this._graphData.get(`data.nodes.${target}.nodeType`));
    }

    createConnectedEdge(edge, edgeId, suppressEvents) {
        var edgeSchema = this._graphSchema.edges[edge.edgeType];
        this.view.addEdge(edge, edgeSchema, edgeId, (edge) => {
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_EDGE, { detail: { edge, edgeId } }));
            if (this._selectedItem) {
                this._selectedItem.deselectItem();
            }
            this._selectedItem = new SelectedItem(this, 'EDGE', edgeId);
            this._selectedItem.selectItem();
        });
        var contextMenuItems = deepCopyFunction(edgeSchema.contextMenuItems).map(item => {
            if (item.action === GRAPH_ACTIONS.DELETE_EDGE) {
                item.onClick = () => this.deleteEdge(edgeId);
            }
            return item;
        });
        this.view.addEdgeContextMenu(edgeId, contextMenuItems);
        if (!this._graphData.get(`data.edges.${edgeId}`)) {
            this._graphData.set(`data.edges.${edgeId}`, edge);
        }
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.ADD_EDGE, { detail: edge }));
    }

    _createUnconnectedEdgeForNode(node, edgeType) {
        const onEdgeConnected = (targetNodeId) => {
            var edgeId = `${node.id}-${targetNodeId}`;
            var edge = {
                from: node.id,
                to: targetNodeId,
                edgeType: edgeType,
                conditions: {}
            };
            this.createConnectedEdge(edge, edgeId);
            this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_EDGE, { detail: { edge, edgeId } }));
            if (this._selectedItem) {
                this._selectedItem.deselectItem();
            }
            this._selectedItem = new SelectedItem(this, 'EDGE', edgeId);
            this._selectedItem.selectItem();
        };
        var edgeSchema = this._graphSchema.edges[edgeType];
        this.view.addUnconnectedEdge(node.id, edgeType, edgeSchema, this._isValidEdge.bind(this), onEdgeConnected);
    }

    createNode(node, event, suppressEvents) {
        var nodeSchema = this._graphSchema.nodes[node.nodeType];
        node = this.view.addNode(
            node,
            nodeSchema,
            event,
            (edgeId, edge) => {
                this.createConnectedEdge(edge, edgeId);
            },
            (node) => {
                this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.SELECT_NODE, { detail: node }));
                if (this._selectedItem) {
                    this._selectedItem.deselectItem();
                }
                this._selectedItem = new SelectedItem(this, 'NODE', node.id);
                this._selectedItem.selectItem();
            }
        );

        if (!this._graphData.get(`data.nodes.${node.id}`)) {
            this._graphData.set(`data.nodes.${node.id}`, node);
        }
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.ADD_NODE, { detail: node }));
        this.view.addNodeEvent(
            node.id,
            'updatePosition',
            (pos) => {
                var currNode = this._graphData.get(`data.nodes.${node.id}`);
                if (pos.x !== currNode.posX || pos.y !== currNode.posY) {
                    this._graphData.set(`data.nodes.${node.id}.posX`, pos.x);
                    this._graphData.set(`data.nodes.${node.id}.posY`, pos.y);
                    this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.UPDATE_NODE_POSITION, { detail: this._graphData.get(`data.nodes.${node.id}`) }));
                }
            }
        );
        this._graphData.on(`data.nodes.${node.id}.name:set`, (value) => {
            this.view.updateNodeName(node.id, value);
        });

        var contextMenuItems = deepCopyFunction(nodeSchema.contextMenuItems).map(item => {
            if (item.action === GRAPH_ACTIONS.ADD_EDGE) {
                item.onClick = () => this._createUnconnectedEdgeForNode(node, item.edgeType);
            }
            if (item.action === GRAPH_ACTIONS.DELETE_NODE) {
                item.onClick = () => this.deleteNode(node.id);
            }
            return item;
        });
        this.view.addNodeContextMenu(node.id, contextMenuItems);
    }

    updateNodePosition(nodeId, pos) {
        this._graphData.set(`data.nodes.${nodeId}.posX`, pos.x);
        this._graphData.set(`data.nodes.${nodeId}.posY`, pos.y);
        this.view.updateNodePosition(nodeId, pos);
    }

    updateNodeName(nodeId, name) {
        this._graphData.set(`data.nodes.${nodeId}.name`, name);
        this.view.updateNodeName(nodeId, name);
    }

    deleteNode(nodeId, suppressEvents) {
        this.view.removeNode(nodeId);
        const node = this._graphData.get(`data.nodes.${nodeId}`);
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DELETE_NODE, { detail: node }));
        this._graphData.unset(`data.nodes.${nodeId}`);
        var edgeKeys = Object.keys(this._graphData.get('data.edges'));
        for (var i = 0; i < edgeKeys.length; i++) {
            var edge = this._graphData.get(`data.edges.${edgeKeys[i]}`);
            if (edge.from === nodeId || edge.to === nodeId){
                this._graphData.unset(`data.edges.${edgeKeys[i]}`);
                if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DELETE_EDGE, { detail: edge }));
            }
        }
    }

    deleteEdge(edgeId, suppressEvents) {
        this.view.removeEdge(edgeId);
        if (!suppressEvents) this.dom.dispatchEvent(new CustomEvent(GRAPH_ACTIONS.DELETE_EDGE, { detail: this._graphData.get(`data.edges.${edgeId}`) }));
        this._graphData.unset(`data.edges.${edgeId}`);
    }

    on(eventName, callback) {
        this.dom.addEventListener(eventName, (e) => {
            callback(e.detail);
        });
    }
}

export default Graph;
