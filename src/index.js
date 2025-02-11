/**
 * The PCUIGraph module is an extension of the PlayCanvas User Interface (PCUI) framework. It
 * provides a new PCUI Element type for building interactive, node-based graphs.
 *
 * Key features include:
 *
 * - Scalable and customizable node-based graphs for visualizing complex data.
 * - Interactive elements such as draggable nodes, clickable edges, and zoomable views.
 * - Easy integration within a PCUI-based user interface.
 *
 * Whether it's for displaying network topologies, process flows, or complex relational data,
 * PCUIGraph provides a robust and flexible solution for integrating graph visualizations into your
 * web projects.
 *
 * @module PCUIGraph
 */

import { Observer } from '@playcanvas/observer';
import { Element } from '@playcanvas/pcui';

import { GRAPH_ACTIONS, DEFAULT_CONFIG } from './constants.js';
import GraphView from './graph-view.js';
import SelectedItem from './selected-item.js';
import { deepCopyFunction } from './util.js';

/**
 * Represents a new Graph.
 */
class Graph extends Element {
    /**
     * Creates a new Graph.
     *
     * @param {object} schema - The graph schema.
     * @param {object} [options] - The graph configuration. Optional.
     * @param {object} [options.initialData] - The graph data to initialize the graph with.
     * @param {HTMLElement} [options.dom] - If supplied, the graph will be attached to this element.
     * @param {object[]} [options.contextMenuItems] - The context menu items to add to the graph.
     * @param {boolean} [options.readOnly] - Whether the graph is read only. Optional. Defaults to
     * false.
     * @param {boolean} [options.passiveUIEvents] - If true, the graph will not update its data and
     * view upon user interaction. Instead, these interactions can be handled explicitly by
     * listening to fired events. Optional. Defaults to false.
     * @param {boolean} [options.incrementNodeNames] - Whether the graph should increment the node
     * name when a node with the same name already exists. Optional. Defaults to false.
     * @param {boolean} [options.restrictTranslate] - Whether the graph should restrict the
     * translate graph operation to the graph area. Optional. Defaults to false.
     * @param {boolean} [options.edgeHoverEffect] - Whether the graph should show an edge highlight
     * effect when the mouse is hovering over edges. Optional. Defaults to true.
     * @param {object} [options.defaultStyles] - Used to override the graph's default styling. Check
     * ./constants.js for a full list of style properties.
     * @param {object} [options.adjustVertices] - If true, multiple edges connected between two
     * nodes will be spaced apart.
     */
    constructor(schema, options = {}) {
        super({
            dom: options.dom
        });
        this.class.add('pcui-graph');
        this._graphSchema = schema;
        this._graphData = new Observer({ data: options.initialData ? options.initialData : {} });
        this._contextMenuItems = options.contextMenuItems || [];
        this._suppressGraphDataEvents = false;

        this._config = {
            ...DEFAULT_CONFIG,
            readOnly: options.readOnly,
            passiveUIEvents: options.passiveUIEvents,
            incrementNodeNames: options.incrementNodeNames,
            restrictTranslate: options.restrictTranslate,
            edgeHoverEffect: options.edgeHoverEffect,
            includeFonts: options.includeFonts,
            adjustVertices: options.adjustVertices
        };
        if (options.defaultStyles) {
            if (options.defaultStyles.background) {
                this._config.defaultStyles.background = {
                    ...this._config.defaultStyles.background,
                    ...options.defaultStyles.background
                };
            }
            if (options.defaultStyles.edge) {
                this._config.defaultStyles.edge = {
                    ...this._config.defaultStyles.edge,
                    ...options.defaultStyles.edge
                };
            }
            if (options.defaultStyles.node) {
                this._config.defaultStyles.node = {
                    ...this._config.defaultStyles.node,
                    ...options.defaultStyles.node
                };
            }
        }
        if (this._config.readOnly) this._config.selfContainedMode = true;

        this._buildGraphFromData();
        if (options.defaultStyles.initialScale) {
            this.setGraphScale(options.defaultStyles.initialScale);
        }
        if (options.defaultStyles.initialPosition) {
            this.setGraphPosition(options.defaultStyles.initialPosition.x, options.defaultStyles.initialPosition.y);
        }
    }

    /**
     * The current graph data. Contains an object with any nodes and edges present in the graph.
     * This can be passed into the graph constructor to reload the current graph.
     *
     * @type {object}
     */
    get data() {
        return this._graphData.get('data');
    }

    /**
     * Destroy the graph. Clears the graph from the DOM and removes all event listeners associated
     * with the graph.
     */
    destroy() {
        this.view.destroy();
    }

    _buildGraphFromData() {
        this.view = new GraphView(this, this.dom, this._graphSchema, this._graphData, this._config);

        this.view.batchCells();
        const nodes = this._graphData.get('data.nodes');
        if (nodes) {
            Object.keys(nodes).forEach((nodeKey) => {
                const node = nodes[nodeKey];
                const nodeSchema = this._graphSchema.nodes[node.nodeType];
                if (nodeSchema.attributes) {
                    if (nodeSchema.attributes && !node.attributes) {
                        node.attributes = {};
                    }
                    nodeSchema.attributes.forEach((attribute) => {
                        if (!node.attributes[attribute.name] && attribute.defaultValue) {
                            this._suppressGraphDataEvents = true;
                            this._graphData.set(`data.nodes.${nodeKey}.attributes.${attribute.name}`, attribute.defaultValue);
                            this._suppressGraphDataEvents = false;
                        }
                    });
                }
                this.createNode(this._graphData.get(`data.nodes.${nodeKey}`), undefined, true);
            });
        }
        const edges = this._graphData.get('data.edges');
        if (edges) {
            Object.keys(edges).forEach((edgeKey) => {
                this.createEdge(edges[edgeKey], edgeKey, true);
            });
        }
        this.view.applyBatchedCells();

        // handle context menus
        if (!this._config.readOnly) {
            this._addCanvasContextMenu();
        }

        this._selectedItem = null;
        this.view.onBlankSelection(() => {
            this._dispatchEvent(GRAPH_ACTIONS.DESELECT_ITEM, { prevItem: this._selectedItem });
        });

        if (!this._config.passiveUIEvents) {
            this._registerInternalEventListeners();
        }
    }

    _addCanvasContextMenu() {
        const updateItem = (item) => {
            switch (item.action) {
                case GRAPH_ACTIONS.ADD_NODE: {
                    item.onSelect = (e) => {
                        const node = {
                            ...item,
                            id: Number(`${Date.now()}${Math.floor(Math.random() * 10000)}`)
                        };
                        if (item.attributes) {
                            node.attributes = { ...item.attributes };
                        }
                        delete node.action;
                        delete node.text;
                        delete node.onClick;
                        const nodeSchema = this._graphSchema.nodes[node.nodeType];
                        if (nodeSchema.attributes && !node.attributes) {
                            node.attributes = {};
                        }
                        if (nodeSchema.attributes) {
                            nodeSchema.attributes.forEach((attribute) => {
                                if (!node.attributes[attribute.name] && attribute.defaultValue) {
                                    node.attributes[attribute.name] = attribute.defaultValue;
                                }
                            });
                        }
                        if (this._config.incrementNodeNames && node.attributes.name) {
                            node.attributes.name = `${node.attributes.name} ${Object.keys(this._graphData.get('data.nodes')).length}`;
                        }
                        let element = e.target;
                        while (!element.classList.contains('pcui-menu-items')) {
                            element = element.parentElement;
                        }
                        let pos = {
                            x: Number(element.style.left.replace('px', '')),
                            y: Number(element.style.top.replace('px', ''))
                        };
                        pos = this.getWindowToGraphPosition(pos);
                        node.posX = pos.x;
                        node.posY = pos.y;
                        this._dispatchEvent(GRAPH_ACTIONS.ADD_NODE, { node });
                    };
                }
            }
            return item;
        };
        const viewContextMenuItems = this._contextMenuItems.map((item) => {
            item = updateItem(item);
            if (!item.items) return item;
            item.items.map((subitem) => {
                return updateItem(subitem);
            });
            return item;
        });
        this.view.addCanvasContextMenu(viewContextMenuItems);
    }

    /**
     * Select a node in the current graph.
     *
     * @param {object} node - The node to select
     */
    selectNode(node) {
        this.deselectItem();
        this._selectedItem = new SelectedItem(this, 'NODE', node.id);
        this._selectedItem.selectItem();
    }

    /**
     * Select an edge in the current graph.
     *
     * @param {object} edge - The edge to select
     * @param {number} edgeId - The edge id of the edge to select
     */
    selectEdge(edge, edgeId) {
        this.deselectItem();
        this._selectedItem = new SelectedItem(this, 'EDGE', `${edge.from}-${edge.to}`, edgeId);
        this._selectedItem.selectItem();
    }

    /**
     * Deselect the currently selected item in the graph.
     */
    deselectItem() {
        if (this._selectedItem) {
            this._selectedItem.deselectItem();
            this._selectedItem = null;
        }
    }

    _isValidEdge(edgeType, source, target) {
        const edge = this._graphSchema.edges[edgeType];
        return edge.from.includes(this._graphData.get(`data.nodes.${source}.nodeType`)) && edge.to.includes(this._graphData.get(`data.nodes.${target}.nodeType`));
    }

    /**
     * Add an edge to the graph.
     *
     * @param {object} edge - The edge to add.
     * @param {number} edgeId - The edge id for the new edge.
     */
    createEdge(edge, edgeId) {
        const edgeSchema = this._graphSchema.edges[edge.edgeType];
        this.view.addEdge(edge, edgeSchema, (edge) => {
            this._dispatchEvent(GRAPH_ACTIONS.SELECT_EDGE, { edge, prevItem: this._selectedItem });
        });
        if (edgeSchema.contextMenuItems) {
            const contextMenuItems = deepCopyFunction(edgeSchema.contextMenuItems).map((item) => {
                if (item.action === GRAPH_ACTIONS.DELETE_EDGE) {
                    item.onSelect = () => {
                        this._dispatchEvent(GRAPH_ACTIONS.DELETE_EDGE, { edgeId: edgeId, edge: this._graphData.get(`data.edges.${edgeId}`) });
                    };
                }
                return item;
            });
            const addEdgeContextMenuFunction = () => {
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
        }

        if (!this._graphData.get(`data.edges.${edgeId}`)) {
            this._graphData.set(`data.edges.${edgeId}`, edge);
        }
    }


    _onEdgeConnected(edgeType, from, to) {
        const edgeId = Number(`${Date.now()}${Math.floor(Math.random() * 10000)}`);
        const edge = {
            from: from,
            to: to,
            edgeType: edgeType,
            conditions: {}
        };
        this._dispatchEvent(GRAPH_ACTIONS.ADD_EDGE, { edge, edgeId });
    }

    _createUnconnectedEdgeForNode(node, edgeType) {
        const edgeSchema = this._graphSchema.edges[edgeType];
        this.view.addUnconnectedEdge(node.id, edgeType, edgeSchema, this._isValidEdge.bind(this), this._onEdgeConnected.bind(this));
    }

    _onCreateEdge(edgeId, edge) {
        this._dispatchEvent(GRAPH_ACTIONS.ADD_EDGE, { edge, edgeId });
    }

    _onNodeSelected(node) {
        if (this.suppressNodeSelect) {
            this.suppressNodeSelect = false;
        } else {
            this._dispatchEvent(GRAPH_ACTIONS.SELECT_NODE, { node, prevItem: this._selectedItem });
        }
    }

    _onNodePositionUpdated(nodeId, pos) {
        const node = this._graphData.get(`data.nodes.${nodeId}`);
        const prevPosX = node.posX;
        const prevPosY = node.posY;
        if (pos.x !== node.posX || pos.y !== node.posY) {
            node.posX = pos.x;
            node.posY = pos.y;
            this.updateNodePosition(nodeId, { x: prevPosX, y: prevPosY });
            this._dispatchEvent(GRAPH_ACTIONS.UPDATE_NODE_POSITION, { nodeId, node });
        }
    }

    _onNodeAttributeUpdated(nodeId, attribute, value) {
        const node = this._graphData.get(`data.nodes.${nodeId}`);
        let prevAttributeValue;
        let attributeKey = node.attributes[attribute.name] !== undefined ? attribute.name : undefined;
        if (!attributeKey) {
            Object.keys(node.attributes).forEach((k) => {
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
            const keyMap = ['x', 'y', 'z', 'w'];
            value.forEach((v, i) => {
                node.attributes[attributeKey][keyMap[i]] = v;
            });
        } else if (Object.keys(prevAttributeValue).includes('x') && Number.isFinite(value)) {
            node.attributes[attributeKey].x = value;
        } else {
            node.attributes[attributeKey] = value;
        }
        if (JSON.stringify(node.attributes[attributeKey]) === JSON.stringify(prevAttributeValue)) return;
        this.updateNodeAttribute(nodeId, attribute.name, value);
        this._dispatchEvent(
            GRAPH_ACTIONS.UPDATE_NODE_ATTRIBUTE,
            {
                node: node,
                attribute: attribute.name,
                attributeKey: attributeKey
            }
        );
    }

    _initializeNodeContextMenuItems(node, items) {
        const contextMenuItems = deepCopyFunction(items).map((item) => {
            if (item.action === GRAPH_ACTIONS.ADD_EDGE) {
                item.onSelect = () => this._createUnconnectedEdgeForNode(node, item.edgeType);
            }
            if (item.action === GRAPH_ACTIONS.DELETE_NODE) {
                item.onSelect = () => {
                    this._dispatchEvent(GRAPH_ACTIONS.DELETE_NODE, this._deleteNode(node.id));
                };
            }
            return item;
        });
        return contextMenuItems;
    }

    /**
     * Add a node to the graph.
     *
     * @param {object} node - The node to add.
     */
    createNode(node) {
        const nodeSchema = this._graphSchema.nodes[node.nodeType];
        node = this.view.addNode(
            node,
            nodeSchema,
            this._onCreateEdge.bind(this),
            this._onNodeSelected.bind(this)
        );

        if (!this._graphData.get(`data.nodes.${node.id}`)) {
            this._graphData.set(`data.nodes.${node.id}`, node);
        }
        this.view.addNodeEvent(
            node.id,
            'updatePosition',
            this._onNodePositionUpdated.bind(this)
        );
        if (nodeSchema.attributes) {
            nodeSchema.attributes.forEach((attribute) => {
                this.view.addNodeEvent(
                    node.id,
                    'updateAttribute',
                    this._onNodeAttributeUpdated.bind(this),
                    attribute
                );
            });
        }
        if (nodeSchema.contextMenuItems) {
            const contextMenuItems = this._initializeNodeContextMenuItems(node, nodeSchema.contextMenuItems);
            this.view.addNodeContextMenu(node.id, contextMenuItems);
        }
    }

    /**
     * Update the position of a node.
     *
     * @param {number} nodeId - The node to add.
     * @param {object} pos - The new position, given as an object containing x and y properties.
     */
    updateNodePosition(nodeId, pos) {
        if (!this._graphData.get(`data.nodes.${nodeId}`)) return;
        this._graphData.set(`data.nodes.${nodeId}.posX`, pos.x);
        this._graphData.set(`data.nodes.${nodeId}.posY`, pos.y);
        this.view.updateNodePosition(nodeId, pos);
    }

    /**
     * Update the value of an attribute of a node.
     *
     * @param {number} nodeId - The node to update.
     * @param {string} attributeName - The name of the attribute to update.
     * @param {object} value - The new value for the attribute.
     */
    updateNodeAttribute(nodeId, attributeName, value) {
        if (!this._graphData.get(`data.nodes.${nodeId}`)) return;
        this._graphData.set(`data.nodes.${nodeId}.attributes.${attributeName}`, value);
        this.view.updateNodeAttribute(nodeId, attributeName, value);
    }

    /**
     * Set the error state of a node attribute.
     *
     * @param {number} nodeId - The node to update.
     * @param {string} attributeName - The name of the attribute to update.
     * @param {boolean} value - Whether the attribute should be set in the error state.
     */
    setNodeAttributeErrorState(nodeId, attributeName, value) {
        if (!this._graphData.get(`data.nodes.${nodeId}`)) return;
        this.view.setNodeAttributeErrorState(nodeId, attributeName, value);
    }

    /**
     * Update the type of a node.
     *
     * @param {number} nodeId - The node to update.
     * @param {string} nodeType - The new type for the node.
     */
    updateNodeType(nodeId, nodeType) {
        if (Number.isFinite(nodeType) && this._graphData.get(`data.nodes.${nodeId}`)) {
            this._graphData.set(`data.nodes.${nodeId}.nodeType`, nodeType);
            this.view.updateNodeType(nodeId, nodeType);
        }
    }

    _deleteNode(nodeId) {
        if (!this._graphData.get(`data.nodes.${nodeId}`)) return;
        if (this._selectedItem && this._selectedItem._id === nodeId) this.deselectItem();
        const node = this._graphData.get(`data.nodes.${nodeId}`);
        const edges = [];
        const edgeData = {};
        const edgeKeys = Object.keys(this._graphData.get('data.edges'));
        for (let i = 0; i < edgeKeys.length; i++) {
            const edge = this._graphData.get(`data.edges.${edgeKeys[i]}`);
            edgeData[edgeKeys[i]] = edge;
            if (edge.from === nodeId || edge.to === nodeId) {
                edges.push(edgeKeys[i]);
            }
        }
        return { node, edges, edgeData };
    }

    /**
     * Delete a node from the graph.
     *
     * @param {number} nodeId - The node to delete.
     */
    deleteNode(nodeId) {
        const { node, edges, edgeData } = this._deleteNode(nodeId);
        Object.values(edges).forEach((e) => {
            const edge = edgeData[e];
            this.deleteEdge(`${edge.from}-${edge.to}`);
        });
        this._graphData.unset(`data.nodes.${nodeId}`);
        this.view.removeNode(node.id);
    }

    /**
     * Delete an edge from the graph.
     *
     * @param {string} edgeId - The edge to delete.
     */
    deleteEdge(edgeId) {
        if (!this._graphData.get(`data.edges.${edgeId}`)) return;
        const { from, to, outPort, inPort } = this._graphData.get(`data.edges.${edgeId}`) || {};
        if (this._selectedItem && this._selectedItem._id === `${from}-${to}`) this.deselectItem();

        if (Number.isFinite(outPort)) {
            this.view.removeEdge(`${from},${outPort}-${to},${inPort}`);
        } else {
            this.view.removeEdge(`${from}-${to}`);
        }
        this.view.removeEdge(`${from}-${to}`);
        this._graphData.unset(`data.edges.${edgeId}`);
        const edges = this._graphData.get('data.edges');
        Object.keys(edges).forEach((edgeKey) => {
            const edge = edges[edgeKey];
            const edgeSchema = this._graphSchema.edges[edge.edgeType];
            if ([edge.from, edge.to].includes(from) && [edge.from, edge.to].includes(to)) {
                this.view.addEdge(edge, edgeSchema, (edge) => {
                    this.selectEdge(edge, edgeKey);
                });
                this.selectEdge(edge, edgeKey);
            }
        });
    }

    /**
     * Set the center of the viewport to the given position.
     *
     * @param {number} posX - The x position to set the center of the viewport to.
     * @param {number} posY - The y position to set the center of the viewport to.
     */
    setGraphPosition(posX, posY) {
        this.view.setGraphPosition(posX, posY);
    }

    /**
     * Get the current center position of the viewport in the graph.
     *
     * @returns {object} The current center position of the viewport in the graph as an object
     * containing x and y.
     */
    getGraphPosition() {
        return this.view.getGraphPosition();
    }

    /**
     * Set the scale of the graph.
     *
     * @param {number} scale - The new scale of the graph.
     */
    setGraphScale(scale) {
        this.view.setGraphScale(scale);
        Object.keys(this.view._nodes).forEach((nodeKey) => {
            this.view._paper.findViewByModel(this.view._nodes[nodeKey].model).updateBox();
        });
    }

    /**
     * Get the current scale of the graph.
     *
     * @returns {number} The current scale of the graph.
     */
    getGraphScale() {
        return this.view.getGraphScale();
    }

    /**
     * Convert a position in window space to a position in graph space.
     *
     * @param {object} pos - A position in the window, as an object containing x and y.
     * @returns {object} The position in the graph based on the given window position, as an object
     * containing x and y.
     */
    getWindowToGraphPosition(pos) {
        return this.view.getWindowToGraphPosition(pos);
    }

    /**
     * Add an event listener to the graph.
     *
     * @param {string} eventName - The name of the event to listen for.
     * @param {Function} callback - The callback to call when the event is triggered.
     */
    on(eventName, callback) {
        if (this._config.readOnly && (!eventName.includes('EVENT_SELECT_') && !eventName.includes('EVENT_DESELECT'))) return;
        this.dom.addEventListener(eventName, (e) => {
            callback(e.detail);
        });
    }

    _dispatchEvent(action, data) {
        this.dom.dispatchEvent(new CustomEvent(action, { detail: data }));
    }

    _registerInternalEventListeners() {
        this.on(GRAPH_ACTIONS.ADD_NODE, ({ node }) => {
            this.createNode(node);
            this.selectNode(node);
        });
        this.on(GRAPH_ACTIONS.DELETE_NODE, ({ node, edgeData, edges }) => {
            this.deleteNode(node.id);
        });
        this.on(GRAPH_ACTIONS.SELECT_NODE, ({ node }) => {
            if (this._selectedItem) {
                this._selectedItem.deselectItem();
            }
            this._selectedItem = new SelectedItem(this, 'NODE', node.id);
            this._selectedItem.selectItem();
        });
        this.on(GRAPH_ACTIONS.UPDATE_NODE_POSITION, ({ nodeId, node }) => {
            this.updateNodePosition(nodeId, { x: node.posX, y: node.posY });
        });
        this.on(GRAPH_ACTIONS.UPDATE_NODE_ATTRIBUTE, ({ node }) => {
            this._graphData.set(`data.nodes.${node.id}`, node);
        });
        this.on(GRAPH_ACTIONS.ADD_EDGE, ({ edge, edgeId }) => {
            if (Number.isFinite(edge.inPort)) {
                Object.keys(this._graphData.get('data.edges')).forEach((edgeKey) => {
                    const edgeToCompare = this._graphData.get(`data.edges.${edgeKey}`);
                    if (edgeToCompare.to === edge.to && edgeToCompare.inPort === edge.inPort) {
                        this.deleteEdge(edgeKey);
                    }
                });
            }
            this.createEdge(edge, edgeId);
            this.suppressNodeSelect = true;
            this.selectEdge(edge, edgeId);
        });
        this.on(GRAPH_ACTIONS.DELETE_EDGE, ({ edgeId }) => {
            this.deleteEdge(edgeId);
        });
        this.on(GRAPH_ACTIONS.SELECT_EDGE, ({ edge }) => {
            if (this._selectedItem) {
                this._selectedItem.deselectItem();
            }
            this._selectedItem = new SelectedItem(this, 'EDGE', `${edge.from}-${edge.to}`);
            this._selectedItem.selectItem();
        });
        this.on(GRAPH_ACTIONS.DESELECT_ITEM, () => {
            this.deselectItem();
        });
    }
}

Graph.GRAPH_ACTIONS = GRAPH_ACTIONS;

export default Graph;
