[Shader Graph API](../README.md) / [Exports](../modules.md) / Graph

# Class: Graph

Represents a new Graph.

## Hierarchy

- `unknown`

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

• **new Graph**(`schema`, `options?`)

Creates a new Graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `schema` | `any` | The graph schema. |
| `options` | `Object` | The graph configuration. Optional. |
| `options.initialData` | `any` | The graph data to initialise the graph with. |
| `options.dom` | `HTMLElement` | If supplied, the graph will be attached to this element. |
| `options.contextMenuItems` | `any`[] | The context menu items to add to the graph. Optional. |
| `options.readOnly` | `boolean` | Whether the graph is read only. Optional. Defaults to false. |
| `options.passiveUIEvents` | `boolean` | If true, the graph will not update it's data and view upon user interaction. Instead these interactions can be handled explicitly by listening to fired events. Optional. Defaults to false. |
| `options.incrementNodeNames` | `boolean` | Whether the graph should increment the node name when a node with the same name already exists. Optional. Defaults to false. |
| `options.restrictTranslate` | `boolean` | Whether the graph should restrict the translate graph operation to the graph area. Optional. Defaults to false. |
| `options.edgeHoverEffect` | `boolean` | Whether the graph should show an edge highlight effect when the mouse is hovering over edges. Optional. Defaults to true. |
| `options.includeFonts` | `boolean` | If true the graph will include a default font style. Defaults to true. |
| `options.defaultStyles` | `any` | Used to override the graph's default styling. Check ./constants.js for a full list of style properties. |

#### Overrides

pcui.Element.constructor

#### Defined in

[index.js:30](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L30)

## Accessors

### data

• `Readonly` `get` **data**(): `any`

The current graph data. Contains an object with any nodes and edges present in the graph. This can be passed into the graph constructor to reload the current graph.

**`readonly`**

#### Returns

`any`

#### Defined in

[index.js:83](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L83)

## Methods

### destroy

▸ **destroy**(): `void`

Destroy the graph. Clears the graph from the DOM and removes all event listeners associated with the graph.

#### Returns

`void`

#### Defined in

[index.js:90](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L90)

___

### selectNode

▸ **selectNode**(`node`): `void`

Select a node in the current graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `any` | The node to select |

#### Returns

`void`

#### Defined in

[index.js:204](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L204)

___

### selectEdge

▸ **selectEdge**(`edge`, `edgeId`): `void`

Select an edge in the current graph.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `edge` | `any` | The edge to select |
| `edgeId` | `number` | The edge id of the edge to select |

#### Returns

`void`

#### Defined in

[index.js:217](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L217)

___

### deselectItem

▸ **deselectItem**(): `void`

Deselect the currently selected item in the graph.

#### Returns

`void`

#### Defined in

[index.js:228](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L228)

___

### createEdge

▸ **createEdge**(`edge`, `edgeId`): `void`

Add an edge to the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `edge` | `any` | The edge to add |
| `edgeId` | `number` | The edge id for the new edge |

#### Returns

`void`

#### Defined in

[index.js:247](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L247)

___

### createNode

▸ **createNode**(`node`): `void`

Add a node to the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `node` | `any` | The node to add |

#### Returns

`void`

#### Defined in

[index.js:380](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L380)

___

### updateNodePosition

▸ **updateNodePosition**(`nodeId`, `pos`): `void`

Update the position of a node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to add |
| `pos` | `any` | The new position, given as an object containing x and y properties |

#### Returns

`void`

#### Defined in

[index.js:420](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L420)

___

### updateNodeAttribute

▸ **updateNodeAttribute**(`nodeId`, `attributeName`, `value`): `void`

Update the value of an attribute of a node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to update |
| `attributeName` | `string` | The name of the attribute to update |
| `value` | `any` | The new value for the attribute |

#### Returns

`void`

#### Defined in

[index.js:435](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L435)

___

### updateNodeType

▸ **updateNodeType**(`nodeId`, `nodeType`): `void`

Update the type of a node

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to update |
| `nodeType` | `string` | The new type for the node |

#### Returns

`void`

#### Defined in

[index.js:448](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L448)

___

### deleteNode

▸ **deleteNode**(`nodeId`): `void`

Delete a node from the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId` | `number` | The node to delete |

#### Returns

`void`

#### Defined in

[index.js:478](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L478)

___

### deleteEdge

▸ **deleteEdge**(`edgeId`): `void`

Delete an edge from the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `edgeId` | `string` | The edge to delete |

#### Returns

`void`

#### Defined in

[index.js:494](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L494)

___

### setGraphPosition

▸ **setGraphPosition**(`posX`, `posY`): `void`

Set the center of the viewport to the given position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `posX` | `number` | The x position to set the center of the viewport to |
| `posY` | `number` | The y position to set the center of the viewport to |

#### Returns

`void`

#### Defined in

[index.js:526](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L526)

___

### getGraphPosition

▸ **getGraphPosition**(): `any`

get the current center position of the viewport in the graph

#### Returns

`any`

The current center position of the viewport in the graph as an object containing x and y

#### Defined in

[index.js:536](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L536)

___

### setGraphScale

▸ **setGraphScale**(`scale`): `void`

Set the scale of the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | `number` | The new scale of the graph |

#### Returns

`void`

#### Defined in

[index.js:546](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L546)

___

### getGraphScale

▸ **getGraphScale**(): `number`

Get the current scale of the graph

#### Returns

`number`

The current scale of the graph

#### Defined in

[index.js:559](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L559)

___

### getWindowToGraphPosition

▸ **getWindowToGraphPosition**(`pos`): `any`

Convert a position in window space to a position in graph space

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | `any` | A position in the window, as an object containing x and y |

#### Returns

`any`

The position in the graph based on the given window position, as an object containing x and y

#### Defined in

[index.js:571](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L571)

___

### on

▸ **on**(`eventName`, `callback`): `void`

Add an event listener to the graph

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | The name of the event to listen for |
| `callback` | `Function` | The callback to call when the event is triggered |

#### Returns

`void`

#### Defined in

[index.js:582](https://github.com/playcanvas/pcui-graph/blob/282db0d/src/index.js#L582)