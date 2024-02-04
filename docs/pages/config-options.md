---
layout: page
title: Config Options
---

Options can be passed to the graph constructor as a JSON object which change the default behavior of the graph. You can do so as follows:

```javascript
const graph = new Graph(schema, {
    readOnly: true,
    initialData: { ... }
});
```

You can see a full list of options [here](https://api.playcanvas.com/classes/PCUIGraph.Graph.html#constructor).
