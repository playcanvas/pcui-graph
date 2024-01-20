import React from 'react';
import Graph from '../../base-component';

export default {
    title: 'Basic/Visual Programming Graph',
    component: Graph,
    argTypes: {
        // Define the args that you want to be editable in the Storybook UI
    }
};

const GRAPH_ENUM = {
    NODE: {
        HELLO: 0,
        WORLD: 1,
    },
    EDGE: {
        HELLO_TO_WORLD: 0,
    }
};

const GRAPH_SCHEMA = {
    nodes: {
        [GRAPH_ENUM.NODE.HELLO]: {
            name: 'Hello',
            outPorts: [
                {
                    name: 'output',
                    type: GRAPH_ENUM.EDGE.HELLO_TO_WORLD
                }
            ]
        },
        [GRAPH_ENUM.NODE.WORLD]: {
            name: 'World',
            inPorts: [
                {
                    name: 'input',
                    type: GRAPH_ENUM.EDGE.HELLO_TO_WORLD
                }
            ]
        }
    },
    edges: {
        [GRAPH_ENUM.EDGE.HELLO_TO_WORLD]: {
            from: GRAPH_ENUM.NODE.HELLO,
            to: GRAPH_ENUM.NODE.WORLD,
        }
    }
};

var GRAPH_DATA = {
    nodes: {
        1234: {
            id: 1234,
            nodeType: GRAPH_ENUM.NODE.HELLO,
            name: 'Hello',
            posX: 200,
            posY: 200
        },
        1235: {
            id: 1235,
            nodeType: GRAPH_ENUM.NODE.WORLD,
            name: 'World',
            posX: 500,
            posY: 200
        },
    },
    edges: {
        '1234,0-1235,0': {
            edgeType: GRAPH_ENUM.EDGE.HELLO_TO_WORLD,
            from: 1234,
            to: 1235,
            inPort: 0,
            outPort: 0,
        }
    }
};

// Template function
const Template = (args) => <Graph schema={GRAPH_SCHEMA} options={{...args}} />;

// Default story using the template
export const VisualProgrammingGraphExample = Template.bind({});

// Default args for the story
VisualProgrammingGraphExample.args = {
    initialData: GRAPH_DATA,
    passiveUIEvents: false,
    includeFonts: true,
    defaultStyles: {
        edge: {
            connectionStyle: 'smoothInOut'
        },
        background: {
            color: '#20292B',
            gridSize: 10
        }
    }
};

document.getElementById('storybook-root').setAttribute('style', 'position: fixed; width: 100%; height: 100%');
document.body.setAttribute('style', 'margin: 0px; padding: 0px;');