[Home](../README.md#Documentation) / Events

# Events

After creating a graph, you can register a callback for various events. This is achieved using the graphs [on function](./Graph.md#on). The following events are supported:

```javascript
import { Graph, GRAPH_ACTIONS } from 'dist/pcuiGraph';

const schema = { ... };
const graph = new Graph(schema);

/*
 * @event
 * @param {object} args.node - The node that was added
 */
graph.on(GRAPH_ACTIONS.ADD_NODE, ({ node }) => { ... });

/*
 * @event
 * @param {object} args.node - The node that was deleted
 * @param {object} args.edgeData - The edges contained in the graph
 * @param {object} args.edges - The edges that were removed when deleting this node
 */
graph.on(GRAPH_ACTIONS.DELETE_NODE, ({ node, edgeData, edges }) => { ... });

/*
 * @event
 * @param {object} args.node - The node that was selected
 * @param {object} args.prevItem - The previously selected item, either a node or an edge
 */
graph.on(GRAPH_ACTIONS.SELECT_NODE, ({ node, prevItem }) => { ... });

/*
 * @event
 * @param {object} args.node - The node that was updated
 * @param {object} args.nodeId - The node id of the node that was updated
 */
graph.on(GRAPH_ACTIONS.UPDATE_NODE_POSITION, ({ node, nodeId }) => { ... });

/*
 * @event
 * @param {object} args.node - The node that was updated
 * @param {object} args.attribute - The name of the attribute that was updated
 * @param {object} args.attributeKey - The key of the attribute that was updated
 */
graph.on(GRAPH_ACTIONS.UPDATE_NODE_ATTRIBUTE, ({ node, attribute, attributeKey }) => { ... });

/*
 * @event
 * @param {object} args.edge - The edge that was updated
 * @param {object} args.edgeId - The id of the edge that was updated
 */
graph.on(GRAPH_ACTIONS.ADD_EDGE, ({ edge, edgeId }) => { ... });

/*
 * @event
 * @param {object} args.edge - The edge that was updated
 * @param {object} args.edgeId - The id of the edge that was updated
 */
graph.on(GRAPH_ACTIONS.DELETE_EDGE, ({ edge, edgeId }) => { ... });

/*
 * @event
 * @param {object} args.edge - The edge that was selected
 * @param {object} args.prevItem - The previously selected item, either a node or an edge
 */
graph.on(GRAPH_ACTIONS.SELECT_EDGE, ({ edge, prevItem }) => { ... });

/*
 * @event
 * @param {object} args.prevItem - The previously selected item, either a node or an edge
 */
graph.on(GRAPH_ACTIONS.DESELECT_ITEM, ({ prevItem }) => { ... });

/*
 * @event
 * @param {number} args.pos.x - The x position of the viewport in relation to the graph
 * @param {number} args.pos.y - The y position of the viewport in relation to the graph
 */
graph.on(GRAPH_ACTIONS.UPDATE_TRANSLATE, ({ pos }) => { ... });

/*
 * @event
 * param {number} args.scale - The current scale of the graph
 */
graph.on(GRAPH_ACTIONS.UPDATE_SCALE, ({ scale }) => { ... });
```