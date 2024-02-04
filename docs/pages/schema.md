---
layout: page
title: Schema
permalink: /schema/
---

# Schema

The schema object is used to define what type of graph you will be initializing. More specifically, it defines which node your graph can contain and how those nodes can be connected together with edges.

It should contain a set of nodes and edges which can be created in the graph. Each node and edge that is defined will need a unique number key which is used to reference that particular part of the schema. In the above example the single edge type defined references the two nodes contained in the schema when defining which node types it can connect. When creating large schemas, it can be useful to define these keys before creating the schema, so they can be easily referenced:

```javascript
const NODE_KEYS = {
    HELLO: 0,
    WORLD: 1
};
const EDGE_KEYS = {
    HELLO_TO_WORLD: 0
};

const schema = {
    nodes: {
        [NODE_KEYS.HELLO]: {
            name: 'Hello',
            fill: 'red'
        },
        [NODE_KEYS.WORLD]: {
            name: 'World',
            fill: 'green'
        }
    },
    edges: {
        [EDGE_KEYS.HELLO_TO_WORLD]: {
            from: [NODE_KEYS.HELLO], // this edge can connect nodes of type NODE_KEYS.HELLO
            to: [NODE_KEYS.WORLD] // to nodes of type NODE_KEYS.WORLD,
            stroke: 'blue'
        }
    }
};
```

The schemas above are used to created directed graphs, as they define edges which contain `from` and `to` attributes. These attributes tell an edge which nodes they can connect, creating a directed edge from one node to another.

When creating visual programming graphs, nodes are not connected directly. Instead, they contain input and output ports which can be connected together. This will need to be expressed in the schema you create. To achieve this, you can add `inPorts` and `outPorts` attributes to your nodes in the schema. These will define a set of ports which will be created on a given node, specifying which edges can connect those ports.

The schema defined above can be reworked to support port connections as follows:

```javascript
const NODE_KEYS = {
    HELLO: 0,
    WORLD: 1
};
const EDGE_KEYS = {
    HELLO_TO_WORLD: 0
};

const schema = {
    nodes: {
        [NODE_KEYS.HELLO]: {
            name: 'Hello',
            fill: 'red',
            outPorts: [
                {
                    name: 'output',
                    type: EDGE_KEYS.HELLO_TO_WORLD
                }
            ]
        },
        [NODE_KEYS.WORLD]: {
            name: 'World',
            fill: 'green',
            inPorts: [
                {
                    name: 'input',
                    type: EDGE_KEYS.HELLO_TO_WORLD
                }
            ]
        }
    },
    edges: {
        [EDGE_KEYS.HELLO_TO_WORLD]: {
            stroke: 'blue'
        }
    }
};
```

You can see that created ports have a type which defines the edge type each port accepts. Only input and output ports of the same type can be connected together in the graph. Ports also contain a name which will appear next to the port in the graph.

Nodes can also contain editable attributes, which will show up as input fields within them. These attributes can be set in a node as follows:

```javascript
const schema = {
    nodes: {
        0: {
            name: 'Foobar',
            attributes: [
                {
                    name: 'Editable boolean',
                    type: 'BOOLEAN_INPUT'
                },
                {
                    name: 'Editable text',
                    type: 'TEXT_INPUT'
                },
                {
                    name: 'Editable number',
                    type: 'NUMERIC_INPUT'
                },
                {
                    name: 'Editable 2D vector',
                    type: 'VEC2_INPUT'
                },
                {
                    name: 'Editable 3D vector',
                    type: 'VEC3_INPUT'
                },
                {
                    name: 'Editable 4D vector',
                    type: 'VEC4_INPUT'
                }
            ]
        }
    }
};
```

Editable attributes for a given node type must have unique names as they are stored in the graph data in a dictionary. When a node with an editable attribute is created, it can be accessed via the graph data as follows:

```javascript
const selectedItemId = graph.selectedItem.id;
const currentBooleanValue = graph.data.nodes[selectedItemId].attributes['Editable boolean'].value;
```
