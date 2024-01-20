import React from 'react';
import { GRAPH_ACTIONS } from '../../../src/constants';
import Graph from '../../base-component';

export default {
    title: 'Advanced/Visual Programming Graph',
    component: Graph,
    argTypes: {
        // Define the args that you want to be editable in the Storybook UI
    }
};

var GRAPH_ENUM = {
    NODE: {
        VARIABLE_FLOAT: 0,
        MULTIPLY: 1,
        OUT: 2,
        ADD: 3,
        SINE: 4,
        TEXTURE: 5,
        VARIABLE_VEC_2: 6,
    },
    EDGE: {
        FLOAT: 1,
        VEC_2: 2,
        VEC_3: 3,
        VEC_4: 4,
        MATRIX: 5
    }
};

var GRAPH_SCHEMA = {
    nodes: {
        [GRAPH_ENUM.NODE.VARIABLE_FLOAT]: {
            name: 'Variable Float',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            contextMenuItems: [],
            outPorts: [
                {
                    name: 'output',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ]
        },
        [GRAPH_ENUM.NODE.VARIABLE_VEC_2]: {
            name: 'Variable Vec2',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            contextMenuItems: [],
            outPorts: [
                {
                    name: 'output',
                    type: GRAPH_ENUM.EDGE.VEC_2
                }
            ]
        },
        [GRAPH_ENUM.NODE.MULTIPLY]: {
            name: 'Multiply',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            contextMenuItems: [],
            inPorts: [
                {
                    name: 'left',
                    type: GRAPH_ENUM.EDGE.FLOAT
                },
                {
                    name: 'right',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ]
        },
        [GRAPH_ENUM.NODE.ADD]: {
            name: 'Add',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            contextMenuItems: [
                {
                    text: 'Delete node',
                    action: GRAPH_ACTIONS.DELETE_NODE
                }
            ],
            inPorts: [
                {
                    name: 'left',
                    type: GRAPH_ENUM.EDGE.FLOAT
                },
                {
                    name: 'right',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ]
        },
        [GRAPH_ENUM.NODE.SINE]: {
            name: 'Sine',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            contextMenuItems: [
                {
                    text: 'Delete node',
                    action: GRAPH_ACTIONS.DELETE_NODE
                }
            ],
            inPorts: [
                {
                    name: 'input',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ]
        },
        [GRAPH_ENUM.NODE.FRAGMENT_OUTPUT]: {
            name: 'Fragment Output',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            contextMenuItems: [],
            inPorts: [
                {
                    name: 'rgba',
                    type: GRAPH_ENUM.EDGE.VEC_4
                },
                {
                    name: 'rgb',
                    type: GRAPH_ENUM.EDGE.VEC_3
                },
                {
                    name: 'a',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ]
        },
        [GRAPH_ENUM.NODE.TEXTURE]: {
            name: 'Texture',
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            contextMenuItems: [],
            inPorts: [
                {
                    name: 'uv',
                    type: GRAPH_ENUM.EDGE.VEC_2
                }
            ],
            outPorts: [
                {
                    name: 'rgba',
                    type: GRAPH_ENUM.EDGE.VEC_4
                },
                {
                    name: 'rgb',
                    type: GRAPH_ENUM.EDGE.VEC_3
                },
                {
                    name: 'r',
                    type: GRAPH_ENUM.EDGE.FLOAT
                },
                {
                    name: 'g',
                    type: GRAPH_ENUM.EDGE.FLOAT
                },
                {
                    name: 'b',
                    type: GRAPH_ENUM.EDGE.FLOAT
                }
            ]
        }
    },
    edges: {
        [GRAPH_ENUM.EDGE.FLOAT]: {
            stroke: '#0379EE',
            fill: 'rgb(54, 67, 70, 0.8)',
            strokeWidth: 2,
            targetMarker: null,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        },
        [GRAPH_ENUM.EDGE.VEC_2]: {
            stroke: '#0379EE',
            strokeWidth: 2,
            targetMarker: null,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        },
        [GRAPH_ENUM.EDGE.VEC_3]: {
            stroke: '#0379EE',
            strokeWidth: 2,
            targetMarker: null,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        },
        [GRAPH_ENUM.EDGE.VEC_4]: {
            stroke: '#0379EE',
            strokeWidth: 2,
            targetMarker: null,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        },
        [GRAPH_ENUM.EDGE.MATRIX]: {
            stroke: '#0379EE',
            strokeWidth: 2,
            targetMarker: null,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        }
    }
};

var GRAPH_DATA = {
    nodes: {
        1234: {
            id: 1234,
            nodeType: GRAPH_ENUM.NODE.VARIABLE_FLOAT,
            name: 'maxAlpha',
            posX: 100,
            posY: 150,
            attributes: {
                name: 'maxAlpha'
            }
        },
        1235: {
            id: 1235,
            nodeType: GRAPH_ENUM.NODE.VARIABLE_FLOAT,
            posX: 100,
            posY: 350,
            attributes: {
                name: 'time'
            }
        },
        1236: {
            id: 1236,
            nodeType: GRAPH_ENUM.NODE.MULTIPLY,
            name: 'Multiply',
            posX: 650,
            posY: 250
        },
        1237: {
            id: 1237,
            nodeType: GRAPH_ENUM.NODE.FRAGMENT_OUTPUT,
            name: 'Fragment Output',
            posX: 1050,
            posY: 50
        },
        1238: {
            id: 1238,
            nodeType: GRAPH_ENUM.NODE.SINE,
            name: 'Sine',
            posX: 350,
            posY: 350
        },
        1239: {
            id: 1239,
            nodeType: GRAPH_ENUM.NODE.TEXTURE,
            name: 'Texture',
            posX: 650,
            posY: 50,
            // texture: 'https://cdnb.artstation.com/p/assets/images/images/008/977/853/large/brandon-liu-mod9-grass-bliu2.jpg?1516424810'
        },
        1240: {
            id: 1240,
            nodeType: GRAPH_ENUM.NODE.VARIABLE_VEC_2,
            name: 'meshUV',
            posX: 100,
            posY: 50,
            attributes: {
                name: 'uvCoords'
            }
        }
    },
    edges: {
        '1234,0-1236,0': {
            edgeType: GRAPH_ENUM.EDGE.FLOAT,
            from: 1234,
            to: 1236,
            outPort: 0,
            inPort: 0
        },
        '1235,0-1238,0': {
            edgeType: GRAPH_ENUM.EDGE.FLOAT,
            from: 1235,
            to: 1238,
            outPort: 0,
            inPort: 0
        },
        '1238,0-1236,1': {
            edgeType: GRAPH_ENUM.EDGE.FLOAT,
            from: 1238,
            to: 1236,
            outPort: 0,
            inPort: 1
        },
        '1236,0-1237,2': {
            edgeType: GRAPH_ENUM.EDGE.FLOAT,
            from: 1236,
            to: 1237,
            outPort: 0,
            inPort: 2
        },
        '1239,1-1237,1': {
            edgeType: GRAPH_ENUM.EDGE.VEC_3,
            from: 1239,
            to: 1237,
            outPort: 1,
            inPort: 1
        },
        '1240,0-1239,0': {
            edgeType: GRAPH_ENUM.EDGE.VEC_2,
            from: 1240,
            to: 1239,
            outPort: 0,
            inPort: 0
        }
    }
};

var GRAPH_CONTEXT_MENU_ITEMS = [
    {
        text: 'New add',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: GRAPH_ENUM.NODE.ADD,
        name: 'Add'
    },
    {
        text: 'New multiply',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: GRAPH_ENUM.NODE.MULTIPLY,
        name: 'Multiply'
    },
    {
        text: 'New sine',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: GRAPH_ENUM.NODE.SINE,
        name: 'Sine'
    },
    {
        text: 'New texture',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: GRAPH_ENUM.NODE.TEXTURE,
        name: 'Texture'
    },
];

// Template function
const Template = (args) => <Graph schema={GRAPH_SCHEMA} options={{...args}} />;

// Default story using the template
export const VisualProgrammingGraphExample = Template.bind({});

// Default args for the story
VisualProgrammingGraphExample.args = {
    initialData: GRAPH_DATA,
    contextMenuItems: GRAPH_CONTEXT_MENU_ITEMS,
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