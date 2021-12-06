import React from 'react';
import { GRAPH_ACTIONS } from '../../../src/constants';
import Component from '../../base-component';

var name = 'Node Attribute Error Graph';
var config = {
    title: `Basic/${name}`
};

export default {
    title: config.title,
    component: Component,
    parameters: {
        docs: {}
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

export const NodeAttributeErrorGraphExample = (args) => { 
    return <Component schema={GRAPH_SCHEMA} options={{
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
    }} />;
};

document.querySelector('#root').setAttribute('style', 'position: fixed; width: 100%; height: 100%');
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