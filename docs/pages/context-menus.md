---
layout: page
title: Context Menus
---

It is possible to create context menus on your graph which display when right clicking various graph items. There are three types of context menus; background, node and edge. You can define a set of actions which will display in each of these menus and each action item in the menu will fire an action event when selected.

The background context menu appears when you right click on any blank space in the canvas. This context menu is used to add new nodes to the graph. It can be created by adding a `contextMenuItems` array to the options object passed to the graph constructor:

```javascript
const graph = new Graph(schema, {
    contextMenuItems: [
        {
            {
                text: 'Add a hello node',
                action: GRAPH.GRAPH_ACTIONS.ADD_NODE,
                nodeType: NODE_KEYS.HELLO,
                attributes: {
                    name: 'New hello'
                    'Editable boolean': true
                }
            },
            {
                text: 'Add a world node',
                action: GRAPH.GRAPH_ACTIONS.ADD_NODE,
                nodeType: NODE_KEYS.WORLD,
                attributes: {
                    name: 'New world'
                    'Editable boolean': true
                }
            }
        }
    ]
})
```

The text property defines the display text of the context menu item. The action property tells the graph that this context menu item should fire an `ADD_NODE` action when it is selected. The other properties define the type of node that will be created when this item is selected. The node type references one of the node keys defined in the graphs schema. The attributes object defines the initial values of any editable attributes that exist in that nodes schema. The name attribute will also show up in the header for the node.

Context menus can also be added to nodes and edges by including contextMenu properties in their schemas as follows:

```javascript
const schema = {
    edges: {
        0: {
            contextMenuItems: [
                {
                    text: 'Delete edge', // name of the context menu item
                    action: Graph.GRAPH_ACTIONS.DELETE_EDGE // action to carry out when item is selected
                }
            ]
        }
    }
};
```

Currently node context menus support two actions:

``` javascript
Graph.GRAPH_ACTIONS.DELTE_NODE // Delete the node associated with this context menu.
Graph.GRAPH_ACTIONS.ADD_EDGE // Add an edge that starts from the node associated with this context menu, selecting another node will complete the edge connection. Selecting the background canvas will cancel adding an edge.
```

While edges support their own deletion by adding this action in their context menu:

``` javascript
Graph.GRAPH_ACTIONS.DELETE_EDGE // Delete the edge associated with this context menu.
```
