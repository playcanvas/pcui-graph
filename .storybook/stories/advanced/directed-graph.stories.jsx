import React from 'react';
import { GRAPH_ACTIONS } from '../../../src/constants';
import Graph from '../../base-component';

export default {
    title: 'Advanced/Directed Graph',
    component: Graph,
    argTypes: {
        // Define the args that you want to be editable in the Storybook UI
    }
};

const GRAPH_ENUM = {
    NODE: {
        STATE: 0,
    },
    EDGE: {
        EDGE: 0,
    }
};

const GRAPH_SCHEMA = {
    nodes: {
        [GRAPH_ENUM.NODE.STATE]: {
            name: 'state',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            icon: '',
            iconColor: '#FFFFFF',
            contextMenuItems: [
                {
                    text: 'Add transition',
                    action: GRAPH_ACTIONS.ADD_EDGE,
                    edgeType: GRAPH_ENUM.EDGE.EDGE
                },
                {
                    text: 'Delete state',
                    action: GRAPH_ACTIONS.DELETE_NODE
                }
            ]
        }
    },
    edges: {
        [GRAPH_ENUM.EDGE.EDGE]: {
            stroke: '#0379EE',
            strokeWidth: 2,
            targetMarkerStroke: '#0379EE',
            targetMarker: true,
            from: [
                GRAPH_ENUM.NODE.STATE,
                GRAPH_ENUM.NODE.START_STATE,
                GRAPH_ENUM.NODE.DEFAULT_STATE
            ],
            to: [
                GRAPH_ENUM.NODE.STATE,
                GRAPH_ENUM.NODE.DEFAULT_STATE,
                GRAPH_ENUM.NODE.END_STATE
            ],
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ]
        }
    }
};

var GRAPH_DATA = {
    nodes: {
        1234: {
            id: 1234,
            nodeType: GRAPH_ENUM.NODE.STATE,
            name: 'NODE A',
            posX: 100,
            posY: 100
        },
        1235: {
            id: 1235,
            nodeType: GRAPH_ENUM.NODE.STATE,
            name: 'NODE B',
            posX: 100,
            posY: 300
        },
        1236: {
            id: 1236,
            nodeType: GRAPH_ENUM.NODE.STATE,
            name: 'NODE C',
            posX: 300,
            posY: 200
        }
    },
    edges: {
        '1234-1235': {
            edgeType: GRAPH_ENUM.EDGE.EDGE,
            from: 1234,
            to: 1235
        },
        '1235-1236': {
            edgeType: GRAPH_ENUM.EDGE.EDGE,
            from: 1235,
            to: 1236
        },
        '1236-1235': {
            edgeType: GRAPH_ENUM.EDGE.EDGE,
            from: 1236,
            to: 1235
        }
    }
};

const GRAPH_CONTEXT_MENU_ITEMS_ITEMS = [
    {
        text: 'Add new state',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: GRAPH_ENUM.NODE.STATE,
        attributes: {
            name: 'New state',
            speed: 1.0,
            loop: false
        }
    }
];

// Template function
const Template = (args) => <Graph schema={GRAPH_SCHEMA} options={{...args}} />;

// Default story using the template
export const DirectedGraphExample = Template.bind({});

// Default args for the story
DirectedGraphExample.args = {
    initialData: GRAPH_DATA,
    contextMenuItems: GRAPH_CONTEXT_MENU_ITEMS_ITEMS,
    passiveUIEvents: false,
    includeFonts: true,
    incrementNodeNames: true,
    adjustVertices: true,
    defaultStyles: {
        background: {
            color: '#20292B',
            gridSize: 10
        },
        edge: {
            connectionStyle: 'default'
        }
    }
};

document.getElementById('storybook-root').setAttribute('style', 'position: fixed; width: 100%; height: 100%');
document.body.setAttribute('style', 'margin: 0px; padding: 0px;');

setTimeout(() => {
    Object.keys(GRAPH_ACTIONS).forEach((key) => {
        const graphAction = GRAPH_ACTIONS[key];
        document.querySelector('.pcui-graph').ui.on(graphAction, (data) => {
            console.log(graphAction, data);
        });
    });
}, 500);