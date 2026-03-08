# PCUI Graph - Node-based Graphs for PCUI

[![NPM Version](https://img.shields.io/npm/v/@playcanvas/pcui-graph)](https://www.npmjs.com/package/@playcanvas/pcui-graph)
[![NPM Downloads](https://img.shields.io/npm/dw/@playcanvas/pcui-graph)](https://npmtrends.com/@playcanvas/pcui-graph)
[![License](https://img.shields.io/npm/l/@playcanvas/pcui-graph)](https://github.com/playcanvas/pcui-graph/blob/main/LICENSE)
[![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white&color=black)](https://discord.gg/RSaMRzg)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=flat&logo=reddit&logoColor=white&color=black)](https://www.reddit.com/r/PlayCanvas)
[![X](https://img.shields.io/badge/X-000000?style=flat&logo=x&logoColor=white&color=black)](https://x.com/intent/follow?screen_name=playcanvas)

| [User Guide](https://developer.playcanvas.com/user-manual/pcui/pcui-graph/) | [API Reference](https://api.playcanvas.com/pcui-graph/) | [React Examples](https://playcanvas.github.io/pcui-graph/storybook/) | [Discord](https://discord.gg/RSaMRzg) | [Blog](https://blog.playcanvas.com/) | [Forum](https://forum.playcanvas.com/) |

![pcui-graph-banner](https://github.com/user-attachments/assets/e0aa8953-221b-4122-b8ce-247c389ae6d6)

Create node-based visual graphs in the browser. Supports undirected / directed graphs as well as visual scripting graphs containing nodes with input / output ports. Your graphs can be saved to a JSON file and loaded back into a new graph view at any time.

## Getting Started

To install PCUI Graph, run:

    npm install @playcanvas/pcui-graph

Then import the library and its styles into your project:

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
            to: [1], // to nodes of type 1
            stroke: 'blue'
        }
    }
};

const graph = new Graph(schema);
document.body.appendChild(graph.dom);
```

## Storybook

Examples of graphs created using PCUI Graph are available in the [Storybook](https://playcanvas.github.io/pcui-graph/storybook/). You can also run it locally as a development environment:

    npm install
    npm run storybook

This will automatically open the Storybook in a new browser tab.

## Development

The source lives in `src/` and is organized as follows:

| File | Purpose |
|------|---------|
| `index.ts` | Main `Graph` class and exports |
| `graph-view.ts` | Core graph view (wraps JointJS) |
| `graph-view-node.ts` | Node element |
| `graph-view-edge.ts` | Edge / connection element |
| `joint-graph.ts` | Base JointJS paper, pan, zoom and resize |
| `joint-shape-node.ts` | Custom JointJS HTML element shape |
| `constants.ts` | Default configuration and event constants |
| `selected-item.ts` | Selection handling |
| `util.ts` | Utility functions |
| `lib/vec2.ts` | 2D vector math |
| `styles/style.scss` | SCSS styles |

To build and lint:

```bash
npm run build    # Production build (UMD + ESM + types + styles)
npm run lint     # Run ESLint and Stylelint
npm run watch    # Watch mode with incremental rebuilds
```

TypeScript declarations are generated into `types/` during the build and are included in the published package.

## API Documentation

To build the API reference to the `docs` folder:

```bash
npm run docs
```
