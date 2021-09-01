# PCUI Graph

Create node based visual graphs in the browser. Supports undirected / directed graphs as well as visual scripting graphs containing nodes with input / output ports. Your graphs can be saved to a JSON file and loaded back into a new graph view at any time.

## Getting Started

To build the graph library, run the following in the root directory.

```
npm install
npm run build
```

You can then use the library in your own project by including the `dist/index.mjs` file. The graph can then be instantiated as follows:
```javascript
import { Graph } from 'dist/index.mjs';

const schema = {
    nodes: {
        0: {
            name: 'Hello',
            fill: 'red'
        },
        1: {
            name: 'World',
            fill: 'green'
        }
    },
    edges: {
        0: {
            from: [0], // this edge can connect nodes of type 0
            to: [1] // to nodes of type 1,
            stroke: 'blue'
        }
    }
}

const graph = new Graph(schema);
document.body.appendChild(graph.dom);
```

The library is also available on [npm](https://www.npmjs.com/package/pcui-graph) and can be installed in your project with 
```
npm install @playcanvas/pcui-graph
```

The npm package includes three builds of the library:
```
@playcanvas/pcui-graph/index.js // UMD build, excluding external dependencies (requires dependencies to be placed in the global namespace)
@playcanvas/pcui-graph/index.mjs // module build, excluding external dependencies (requires a build tool like rollup / webpack)
@playcanvas/pcui-graph/bundle.mjs // module build, with all external dependencies bundled
```

The current external dependencies for this project are:
```
@playcanvas/pcui
@playcanvas/observer
```
## Storybook

Examples of different graphs created with this library can be viewed by running storybook. Do so by running the following in the this projects root directory:

```
npm install
npm run storybook
```

Which will automatically open the storybook locally at `http://localhost:9009`.

# Documentation

- [Config Options](./docs/config-options.md)

- [Schema](./docs/schema.md)

- [Context Menus](./docs/context-menus.md)

- [Styling](./docs/styling.md)

- [Events](./docs/events.md)

- [API](./docs/api.md)
