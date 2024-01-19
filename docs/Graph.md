[Home](../README.md) / Graph

# Class: Graph

Represents a new Graph.

## Hierarchy

- `Element`

  ↳ **`Graph`**

## Table of contents

### Constructors

- [constructor](Graph.md#constructor)

### Accessors

- [data](Graph.md#data)

### Methods

- [destroy](Graph.md#destroy)
- [selectNode](Graph.md#selectnode)
- [selectEdge](Graph.md#selectedge)
- [deselectItem](Graph.md#deselectitem)
- [createEdge](Graph.md#createedge)
- [createNode](Graph.md#createnode)
- [updateNodePosition](Graph.md#updatenodeposition)
- [updateNodeAttribute](Graph.md#updatenodeattribute)
- [setNodeAttributeErrorState](Graph.md#setnodeattributeerrorstate)
- [updateNodeType](Graph.md#updatenodetype)
- [deleteNode](Graph.md#deletenode)
- [deleteEdge](Graph.md#deleteedge)
- [setGraphPosition](Graph.md#setgraphposition)
- [getGraphPosition](Graph.md#getgraphposition)
- [setGraphScale](Graph.md#setgraphscale)
- [getGraphScale](Graph.md#getgraphscale)
- [getWindowToGraphPosition](Graph.md#getwindowtographposition)
- [on](Graph.md#on)

## Constructors

### constructor

• **new Graph**(`schema`, `options?`): [`Graph`](Graph.md)

Creates a new Graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `object` | The graph schema. |
| `options?` | `Object` | The graph configuration. Optional. |
| `options.initialData` | `object` | The graph data to initialize the graph with. |
| `options.dom` | [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement ) | If supplied, the graph will be attached to this element. |
| `options.contextMenuItems` | `object`[] | The context menu items to add to the graph. |
| `options.readOnly` | `boolean` | Whether the graph is read only. Optional. Defaults to false. |
| `options.passiveUIEvents` | `boolean` | If true, the graph will not update its data and view upon user interaction. Instead, these interactions can be handled explicitly by listening to fired events. Optional. Defaults to false. |
| `options.incrementNodeNames` | `boolean` | Whether the graph should increment the node name when a node with the same name already exists. Optional. Defaults to false. |
| `options.restrictTranslate` | `boolean` | Whether the graph should restrict the translate graph operation to the graph area. Optional. Defaults to false. |
| `options.edgeHoverEffect` | `boolean` | Whether the graph should show an edge highlight effect when the mouse is hovering over edges. Optional. Defaults to true. |
| `options.defaultStyles` | `object` | Used to override the graph's default styling. Check ./constants.js for a full list of style properties. |
| `options.adjustVertices` | `object` | If true, multiple edges connected between two nodes will be spaced apart. |

#### Returns

[`Graph`](Graph.md)

#### Overrides

Element.constructor

#### Defined in

[index.js:36](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L36)

## Accessors

### data

• `get` **data**(): `object`

The current graph data. Contains an object with any nodes and edges present in the graph.
This can be passed into the graph constructor to reload the current graph.

#### Returns

`object`

#### Defined in

[index.js:93](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L93)

## Methods

### destroy

▸ **destroy**(): `void`

Destroy the graph. Clears the graph from the DOM and removes all event listeners associated
with the graph.

#### Returns

`void`

#### Overrides

Element.destroy

#### Defined in

[index.js:101](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L101)

___

### selectNode

▸ **selectNode**(`node`): `void`

Select a node in the current graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `object` | The node to select |

#### Returns

`void`

#### Defined in

[index.js:214](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L214)

___

### selectEdge

▸ **selectEdge**(`edge`, `edgeId`): `void`

Select an edge in the current graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `edge` | `object` | The edge to select |
| `edgeId` | `number` | The edge id of the edge to select |

#### Returns

`void`

#### Defined in

[index.js:226](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L226)

___

### deselectItem

▸ **deselectItem**(): `void`

Deselect the currently selected item in the graph.

#### Returns

`void`

#### Defined in

[index.js:235](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L235)

___

### createEdge

▸ **createEdge**(`edge`, `edgeId`): `void`

Add an edge to the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `edge` | `object` | The edge to add. |
| `edgeId` | `number` | The edge id for the new edge. |

#### Returns

`void`

#### Defined in

[index.js:253](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L253)

___

### createNode

▸ **createNode**(`node`): `void`

Add a node to the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `object` | The node to add. |

#### Returns

`void`

#### Defined in

[index.js:385](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L385)

___

### updateNodePosition

▸ **updateNodePosition**(`nodeId`, `pos`): `void`

Update the position of a node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to add. |
| `pos` | `object` | The new position, given as an object containing x and y properties. |

#### Returns

`void`

#### Defined in

[index.js:424](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L424)

___

### updateNodeAttribute

▸ **updateNodeAttribute**(`nodeId`, `attributeName`, `value`): `void`

Update the value of an attribute of a node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to update. |
| `attributeName` | `string` | The name of the attribute to update. |
| `value` | `object` | The new value for the attribute. |

#### Returns

`void`

#### Defined in

[index.js:438](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L438)

___

### setNodeAttributeErrorState

▸ **setNodeAttributeErrorState**(`nodeId`, `attributeName`, `value`): `void`

Set the error state of a node attribute.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to update. |
| `attributeName` | `string` | The name of the attribute to update. |
| `value` | `boolean` | Whether the attribute should be set in the error state. |

#### Returns

`void`

#### Defined in

[index.js:451](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L451)

___

### updateNodeType

▸ **updateNodeType**(`nodeId`, `nodeType`): `void`

Update the type of a node.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to update. |
| `nodeType` | `string` | The new type for the node. |

#### Returns

`void`

#### Defined in

[index.js:462](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L462)

___

### deleteNode

▸ **deleteNode**(`nodeId`): `void`

Delete a node from the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to delete. |

#### Returns

`void`

#### Defined in

[index.js:491](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L491)

___

### deleteEdge

▸ **deleteEdge**(`edgeId`): `void`

Delete an edge from the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `edgeId` | `string` | The edge to delete. |

#### Returns

`void`

#### Defined in

[index.js:506](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L506)

___

### setGraphPosition

▸ **setGraphPosition**(`posX`, `posY`): `void`

Set the center of the viewport to the given position.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `posX` | `number` | The x position to set the center of the viewport to. |
| `posY` | `number` | The y position to set the center of the viewport to. |

#### Returns

`void`

#### Defined in

[index.js:537](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L537)

___

### getGraphPosition

▸ **getGraphPosition**(): `object`

Get the current center position of the viewport in the graph.

#### Returns

`object`

The current center position of the viewport in the graph as an object
containing x and y.

#### Defined in

[index.js:547](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L547)

___

### setGraphScale

▸ **setGraphScale**(`scale`): `void`

Set the scale of the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | The new scale of the graph. |

#### Returns

`void`

#### Defined in

[index.js:556](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L556)

___

### getGraphScale

▸ **getGraphScale**(): `number`

Get the current scale of the graph.

#### Returns

`number`

The current scale of the graph.

#### Defined in

[index.js:568](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L568)

___

### getWindowToGraphPosition

▸ **getWindowToGraphPosition**(`pos`): `object`

Convert a position in window space to a position in graph space.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `object` | A position in the window, as an object containing x and y. |

#### Returns

`object`

The position in the graph based on the given window position, as an object
containing x and y.

#### Defined in

[index.js:579](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L579)

___

### on

▸ **on**(`eventName`, `callback`): `void`

Add an event listener to the graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | The name of the event to listen for. |
| `callback` | [`Function`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function ) | The callback to call when the event is triggered. |

#### Returns

`void`

#### Overrides

Element.on

#### Defined in

[index.js:589](https://github.com/playcanvas/pcui-graph/blob/a471186/src/index.js#L589)
