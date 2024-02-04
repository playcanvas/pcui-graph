---
layout: page
title: Styling
---

You can style your graph by overriding it's default style properties. This can be achieved by modifying the defaultStyles passed in as part of an options object to the graph constructor.

```javascript
const graph = new Graph(schema, {
    defaultStyles: {
        background: {
            color: 'black'
        }
    }
})
```

The defaultStyles object contains styling options for the graphs background as well as node and edge styles. A full list of these overridable properties can be see [here](https://github.com/playcanvas/pcui-graph/blob/main/src/constants.js).

If you'd like to update the styling of particular node / edge types, you can override any of the node or edge properties given in the defaultStyles object by defining them in the schema for a particular node or edge as follows:

```javascript
const schema = {
    nodes: {
        0: {
            name: 'standard node'
        },
        1: {
            name: 'red node'
            fill: 'red' // Update the background color of any nodes of this type to red
        },
    }
};

const graph = new Graph(schema, {
    defaultStyles: {
        node: {
            fill: 'grey' // All other node types will have a grey background
        }
    }
})
```
