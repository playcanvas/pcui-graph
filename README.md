# PCUI Graph - Node-based Graphs for PCUI

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/playcanvas/pcui-graph/blob/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/@playcanvas/pcui-graph.svg?style=flat?style=flat)](https://www.npmjs.com/package/@playcanvas/pcui-graph)
[![NPM Downloads](https://img.shields.io/npm/dw/@playcanvas/pcui-graph)](https://npmtrends.com/@playcanvas/pcui-graph)

| [User Guide](https://developer.playcanvas.com/user-manual/pcui/pcui-graph/) | [API Reference](https://api.playcanvas.com/pcui-graph/) | [React Examples](https://playcanvas.github.io/pcui-graph/storybook/) | [Blog](https://blog.playcanvas.com/) | [Forum](https://forum.playcanvas.com/) | [Discord](https://discord.gg/RSaMRzg) |

![pcui-graph-banner](https://github.com/user-attachments/assets/e0aa8953-221b-4122-b8ce-247c389ae6d6)

Create node based visual graphs in the browser. Supports undirected / directed graphs as well as visual scripting graphs containing nodes with input / output ports. Your graphs can be saved to a JSON file and loaded back into a new graph view at any time.

## Getting Started

First install PCUI Graph into your npm project:

    npm install @playcanvas/pcui-graph --save-dev

You can then use the library in your own project by importing the PCUI Graph build and its styling file into your project. The graph can then be instantiated as follows:

```javascript
import Graph from '@playcanvas/pcui-graph';
import '@playcanvas/pcui/styles';
import '@playcanvas/pcui-graph/styles';

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
            to: [1], // to nodes of type 1,
            stroke: 'blue'
        }
    }
}

const graph = new Graph(schema);
document.body.appendChild(graph.dom);
```

The library is also available on [npm](https://www.npmjs.com/package/@playcanvas/pcui-graph) and can be installed in your project with:

    npm install --save @playcanvas/pcui-graph @playcanvas/pcui @playcanvas/observer

The npm package includes two builds of the library:

    @playcanvas/pcui-graph/dist/pcui-graph.js  // UMD build (requires that the pcui and observer libraries are present in the global namespace)
    @playcanvas/pcui-graph/dist/pcui-graph.mjs // module build (requires a build tool like rollup / webpack)

## Storybook

Examples of graphs created using PCUI Graph are available in this library's [storybook](https://playcanvas.github.io/pcui-graph/storybook/). Alternatively you can run the storybook locally and use it as a development environment for your own graphs. To do so, run the following commands in this projects root directory:

    npm install
    npm run storybook

This will automatically open the storybook in a new browser tab.

# Documentation

Information on building the documentation can be found in the [docs](./docs/README.md) directory.
