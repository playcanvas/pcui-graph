import React from 'react';
import { GRAPH_ACTIONS } from '../../../src/constants';
import Graph from '../../base-component';

export default {
    title: 'Basic/Node Attributes Graph',
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
            headerTextFormatter: (attributes) => `Hello ${attributes.foo}`,
            outPorts: [
                {
                    name: 'output',
                    type: GRAPH_ENUM.EDGE.HELLO_TO_WORLD,
                    textFormatter: (attributes) => `output (${attributes.foo})`
                }
            ],
            attributes: [
                {
                    name: 'foo',
                    type: 'TEXT_INPUT'
                }
            ]
        },
        [GRAPH_ENUM.NODE.WORLD]: {
            name: 'World',
            inPorts: [
                {
                    name: 'input',
                    type: GRAPH_ENUM.EDGE.HELLO_TO_WORLD,
                    textFormatter: (attributes) => `input (${attributes.foo})`
                }
            ],
            attributes: [
                {
                    name: 'foo',
                    type: 'TEXT_INPUT',
                    hidden: true
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
            posY: 200,
            attributes: {
                foo: 'bar'
            }
        },
        1235: {
            id: 1235,
            nodeType: GRAPH_ENUM.NODE.WORLD,
            name: 'World',
            posX: 500,
            posY: 200,
            attributes: {
                foo: 'bar'
            }
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
export const NodeAttributesGraphExample = Template.bind({});

// Default args for the story
NodeAttributesGraphExample.args = {
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

setTimeout(() => {
    const graph = document.querySelector('.pcui-graph').ui;
    graph.on(GRAPH_ACTIONS.UPDATE_NODE_ATTRIBUTE, (data) => {
        graph.updateNodeAttribute(1235, data.attribute, data.node.attributes[data.attribute]);
    });
}, 500);