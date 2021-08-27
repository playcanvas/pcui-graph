import React from 'react';
import { GRAPH_ACTIONS } from '../../../src/constants';
import Component from '../../base-component';

var name = 'Directed Graph';
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
        HELLO: 0,
        WORLD: 0,
    },
    EDGE: {
        HELLO_TO_WORLD: 0,
    }
};

const GRAPH_SCHEMA = {
    nodes: {
        [GRAPH_ENUM.NODE.HELLO]: {
            name: 'Hello'
        },
        [GRAPH_ENUM.NODE.WORLD]: {
            name: 'World'
        }
    },
    edges: {
        [GRAPH_ENUM.EDGE.HELLO_TO_WORLD]: {
            from: [
                GRAPH_ENUM.NODE.HELLO,
            ],
            to: [
                GRAPH_ENUM.NODE.WORLD,
            ]
        }
    }
};

var GRAPH_DATA = {
    nodes: {
        1234: {
            id: 1234,
            nodeType: GRAPH_ENUM.NODE.HELLO,
            name: 'Hello',
            posX: 100,
            posY: 100
        },
        1235: {
            id: 1235,
            nodeType: GRAPH_ENUM.NODE.WORLD,
            name: 'World',
            posX: 100,
            posY: 300
        },
    },
    edges: {
        '1234-1235': {
            edgeType: GRAPH_ENUM.EDGE.HELLO_TO_WORLD,
            from: 1234,
            to: 1235
        }
    }
};

export const DirectedGraphExample = (args) => { 
    return <Component schema={GRAPH_SCHEMA} options={{
        initialData: GRAPH_DATA,
        passiveUIEvents: false,
        includeFonts: true,
        defaultStyles: {
            background: {
                color: '#20292B',
                gridSize: 10
            },
            edge: {
                connectionStyle: 'default',
                targetMarker: true
            }
        }
    }} />;
};

document.querySelector('#root').setAttribute('style', 'position: fixed; width: 100%; height: 100%');
document.body.setAttribute('style', 'margin: 0px; padding: 0px;');