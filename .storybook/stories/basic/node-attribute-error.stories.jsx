import React from 'react';
import { GRAPH_ACTIONS } from '../../../src/constants';
import Graph from '../../base-component';

export default {
    title: 'Basic/Node Attribute Error Graph',
    component: Graph,
    argTypes: {
        // Define the args that you want to be editable in the Storybook UI
    }
};

const GRAPH_ENUM = {
    NODE: {
        HELLO_WORLD: 0,
    }
};

const GRAPH_SCHEMA = {
    nodes: {
        [GRAPH_ENUM.NODE.HELLO_WORLD]: {
            name: 'Alphabet Only',
            attributes: [
                {
                    name: 'text',
                    type: 'TEXT_INPUT'
                }
            ]
        }
    }
};

var GRAPH_DATA = {
    nodes: {
        1234: {
            id: 1234,
            nodeType: GRAPH_ENUM.NODE.HELLO_WORLD,
            name: 'Alphabet Only',
            posX: 200,
            posY: 200,
            attributes: {
                text: 'abcdef'
            }
        }
    },
    edges: {}
};

// Template function
const Template = (args) => <Graph schema={GRAPH_SCHEMA} options={{...args}} />;

// Default story using the template
export const NodeAttributeErrorGraphExample = Template.bind({});

// Default args for the story
NodeAttributeErrorGraphExample.args = {
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
        if (data.node.attributes[data.attribute].match('^[A-Za-z]*$')) {
            graph.updateNodeAttribute(1234, data.attribute, data.node.attributes[data.attribute]);
            graph.setNodeAttributeErrorState(1234, data.attribute, false);
        } else {
            graph.setNodeAttributeErrorState(1234, data.attribute, true);
        }
    });
}, 500);