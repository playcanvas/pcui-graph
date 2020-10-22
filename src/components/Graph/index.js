import { Element } from '@playcanvas/pcui/pcui';
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
    ADD_NODE: 0,
    DELETE_NODE: 1,
    ADD_EDGE: 2,
    DELETE_EDGE: 3
};

/**
 * @name Graph
 * @classdesc Represents a graph.
 * @mixes pcui.IFocusable
 */
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

        this.view = new GraphView(this.dom, this._graphSchema);

        this._buildGraphFromData();
        this._addContextMenu();
    }

    _buildGraphFromData() {
        Object.keys(this._graphData.get(`data.nodes`)).forEach(nodeKey => {
            this.createNode(this._graphData.get(`data.nodes.${nodeKey}`));
        });
        Object.keys(this._graphData.get(`data.edges`)).forEach(edgeKey => {
            this._createConnectedEdge(this._graphData.get(`data.edges.${edgeKey}`), edgeKey);
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
                        this.createNode(node, e);
                        this._graphData.set(`data.nodes.${node.id}`, node);
                        this.dom.dispatchEvent(new CustomEvent('createNode', { detail: node }));
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

    _createConnectedEdge(edge, edgeId) {
        var edgeSchema = this._graphSchema.edges[edge.edgeType];
        this.view.addEdge(edge, edgeSchema, edgeId);
        var contextMenuItems = deepCopyFunction(edgeSchema.contextMenuItems).map(item => {
            if (item.action === GRAPH_ACTIONS.DELETE_EDGE) {
                item.onClick = () => this._deleteEdge(edgeId);
            }
            return item;
        });
        this.view.addEdgeContextMenu(edgeId, contextMenuItems);
    }

    _createUnconnectedEdgeForNode(node, edgeType) {
        const onEdgeConnected = (targetNodeId) => {
            this._graphData.set(`data.edges.${node.id}-${targetNodeId}`, {
                from: node.id,
                to: targetNodeId,
                edgeType: edgeType,
                conditions: {}
            });
        };
        var edgeSchema = this._graphSchema.edges[edgeType];
        this.view.addUnconnectedEdge(node.id, edgeType, edgeSchema, this._isValidEdge.bind(this), onEdgeConnected);
    }

    createNode(node, event) {
        if (!this._graphData.get(`data.nodes.${node.id}`)) {
            this._graphData.set(`data.nodes.${node.id}`, node);
        }
        var nodeSchema = this._graphSchema.nodes[node.nodeType];
        this.view.addNode(node, nodeSchema, event, (edgeId, edge) => {
            this._createConnectedEdge(edge, edgeId);
            this._graphData.set(`data.edges.${edgeId}`, edge);
        });
        this.view.addNodeEvent(node.id, 'updatePosition', (pos) => {
            this._graphData.set(`data.nodes.${node.id}.posX`, pos.x);
            this._graphData.set(`data.nodes.${node.id}.posY`, pos.y);
        });
        this._graphData.on(`data.nodes.${node.id}.name:set`, (value) => {
            this.view.updateNodeName(node.id, value);
        });

        var contextMenuItems = deepCopyFunction(nodeSchema.contextMenuItems).map(item => {
            if (item.action === GRAPH_ACTIONS.ADD_EDGE) {
                item.onClick = () => this._createUnconnectedEdgeForNode(node, item.edgeType);
            }
            if (item.action === GRAPH_ACTIONS.DELETE_NODE) {
                item.onClick = () => this._deleteNode(node);
            }
            return item;
        });
        this.view.addNodeContextMenu(node.id, contextMenuItems);
    }

    _deleteNode(node) {
        this.view.removeNode(node.id);
        this._graphData.unset(`data.nodes.${node.id}`);
        var edgeKeys = Object.keys(this._graphData.get('data.edges'));
        for (var i = 0; i < edgeKeys.length; i++) {
            var edge = this._graphData.get(`data.edges.${edgeKeys[i]}`);
            if (edge.from === node.id || edge.to === node.id){
                this._graphData.unset(`data.edges.${edgeKeys[i]}`);
            }
        }
    }

    _deleteEdge(edgeId) {
        this.view.removeEdge(edgeId);
        this._graphData.unset(`data.edges.${edgeId}`);
    }
}

export default Graph;
