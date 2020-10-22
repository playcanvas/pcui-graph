import React from 'react';
import Component from './component';
import Graph, {GRAPH_ACTIONS } from './index.js';
import { getDescriptionForClass, getPropertiesForClass } from '../../../.storybook/utils/docscript'

var name = 'Graph';
var config = {
    title: `Input/${name}`,
    description: getDescriptionForClass(name),
    args: getPropertiesForClass(name),
};

export default {
    title: config.title,
    component: Component,
    parameters: {
        docs: {
            storyDescription: config.description
        }
    },
    argTypes: config.args
};

var ANIM_SCHEMA = {
    NODE: {
        STATE: 0,
        START_STATE: 3,
        ANY_STATE: 4,
        END_STATE: 5
    },
    EDGE: {
        TRANSITION_DEFAULT: 0,
        TRANSITION: 1,
        TRANSITION_FROM_ANY: 3
    },
    PORTS: {
        TEXTURE: 0,
        FLOAT: 1,
        VEC_2: 2,
        VEC_3: 3,
        VEC_4: 4,
        MATRIX: 5
    }
};

var animSchema = {
    nodes: {
        [ANIM_SCHEMA.NODE.STATE]: {
            name: 'state',
            fill: '#364346',
            stroke: '#20292b',
            contextMenuItems: [
                {
                    text: 'Add transition',
                    action: GRAPH_ACTIONS.ADD_EDGE,
                    edgeType: ANIM_SCHEMA.EDGE.TRANSITION
                },
                {
                    text: 'Delete state',
                    action: GRAPH_ACTIONS.DELETE_NODE
                }
            ]
        },
        [ANIM_SCHEMA.NODE.START_STATE]: {
            name: 'startState',
            fill: '#507b50',
            stroke: '#20292b',
            contextMenuItems: [
                {
                    text: 'Add transition',
                    action: GRAPH_ACTIONS.ADD_EDGE,
                    edgeType: ANIM_SCHEMA.EDGE.TRANSITION
                }
            ]
        },
        [ANIM_SCHEMA.NODE.ANY_STATE]: {
            name: 'anyState',
            fill: '#505a7b',
            stroke: '#20292b',
            contextMenuItems: [
                {
                    text: 'Add transition',
                    action: GRAPH_ACTIONS.ADD_EDGE,
                    edgeType: ANIM_SCHEMA.EDGE.TRANSITION_FROM_ANY
                }
            ]
        },
        [ANIM_SCHEMA.NODE.END_STATE]: {
            name: 'endState',
            fill: 'red',
            stroke: '#20292b',
            contextMenuItems: []
        }
    },
    edges: {
        [ANIM_SCHEMA.EDGE.TRANSITION_DEFAULT]: {
            stroke: '#f60',
            targetMarker: true,
            from: [
                ANIM_SCHEMA.NODE.START_STATE
            ],
            to: [
                ANIM_SCHEMA.NODE.STATE
            ],
            contextMenuItems: [],
        },
        [ANIM_SCHEMA.EDGE.TRANSITION]: {
            stroke: '#20292b',
            targetMarker: true,
            from: [
                ANIM_SCHEMA.NODE.STATE,
                ANIM_SCHEMA.NODE.START_STATE
            ],
            to: [
                ANIM_SCHEMA.NODE.STATE,
                ANIM_SCHEMA.NODE.END_STATE
            ],
            contextMenuItems: [],
        },
        [ANIM_SCHEMA.EDGE.TRANSITION_FROM_ANY]: {
            stroke: '#20292b',
            targetMarker: true,
            contextMenuItems: [],
            from: [
                ANIM_SCHEMA.NODE.ANY_STATE
            ],
            to: [
                ANIM_SCHEMA.NODE.STATE,
                ANIM_SCHEMA.NODE.END_STATE
            ]
        }
    }
};

var animData = {
    nodes: {
        0: {
            id: 0,
            nodeType: ANIM_SCHEMA.NODE.START_STATE,
            name: 'START',
            posX: 50,
            posY: 50
        },
        1: {
            id: 1,
            nodeType: ANIM_SCHEMA.NODE.STATE,
            name: 'New State',
            posX: 200,
            posY: 200
        },
        2: {
            id: 2,
            nodeType: ANIM_SCHEMA.NODE.ANY_STATE,
            name: 'ANY',
            posX: 400,
            posY: 50
        }
    },
    edges: {
        '0-1': {
            from: 0,
            to: 1,
            edgeType: ANIM_SCHEMA.EDGE.TRANSITION_DEFAULT
        }
    }
};

var animContextMenuItems = [
    {
        text: 'Add new state',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: ANIM_SCHEMA.NODE.STATE,
        name: 'New state'
    }
];

export const Anim = (args) => { 
    return <Component graphSchema={animSchema} graphData={animData} contextMenuItems={animContextMenuItems} />;
};

var MATERIAL_SCHEMA = {
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

var materialSchema = {
    nodes: {
        [MATERIAL_SCHEMA.NODE.VARIABLE_FLOAT]: {
            name: 'Variable Float',
            fill: 'grey',
            stroke: '#20292b',
            contextMenuItems: [],
            outPorts: [
                {
                    name: 'output',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ]
        },
        [MATERIAL_SCHEMA.NODE.VARIABLE_VEC_2]: {
            name: 'Variable Vec2',
            fill: 'grey',
            stroke: '#20292b',
            contextMenuItems: [],
            outPorts: [
                {
                    name: 'output',
                    type: MATERIAL_SCHEMA.EDGE.VEC_2
                }
            ]
        },
        [MATERIAL_SCHEMA.NODE.MULTIPLY]: {
            name: 'Multiply',
            fill: 'grey',
            stroke: '#20292b',
            contextMenuItems: [],
            inPorts: [
                {
                    name: 'left',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                },
                {
                    name: 'right',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ]
        },
        [MATERIAL_SCHEMA.NODE.ADD]: {
            name: 'Add',
            fill: 'grey',
            stroke: '#20292b',
            contextMenuItems: [],
            inPorts: [
                {
                    name: 'left',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                },
                {
                    name: 'right',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ]
        },
        [MATERIAL_SCHEMA.NODE.SINE]: {
            name: 'Sine',
            fill: 'grey',
            stroke: '#20292b',
            contextMenuItems: [],
            inPorts: [
                {
                    name: 'input',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ],
            outPorts: [
                {
                    name: 'output',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ]
        },
        [MATERIAL_SCHEMA.NODE.FRAGMENT_OUTPUT]: {
            name: 'Fragment Output',
            fill: 'grey',
            stroke: '#20292b',
            contextMenuItems: [],
            inPorts: [
                {
                    name: 'rgba',
                    type: MATERIAL_SCHEMA.EDGE.VEC_4
                },
                {
                    name: 'rgb',
                    type: MATERIAL_SCHEMA.EDGE.VEC_3
                },
                {
                    name: 'a',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ]
        },
        [MATERIAL_SCHEMA.NODE.TEXTURE]: {
            name: 'Texture',
            fill: 'grey',
            stroke: '#20292b',
            contextMenuItems: [],
            inPorts: [
                {
                    name: 'uv',
                    type: MATERIAL_SCHEMA.EDGE.VEC_2
                }
            ],
            outPorts: [
                {
                    name: 'rgba',
                    type: MATERIAL_SCHEMA.EDGE.VEC_4
                },
                {
                    name: 'rgb',
                    type: MATERIAL_SCHEMA.EDGE.VEC_3
                },
                {
                    name: 'r',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                },
                {
                    name: 'g',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                },
                {
                    name: 'b',
                    type: MATERIAL_SCHEMA.EDGE.FLOAT
                }
            ]
        }
    },
    edges: {
        [MATERIAL_SCHEMA.EDGE.FLOAT]: {
            stroke: 'rgba(140, 230, 230, 1.0)',
            strokeWidth: 2,
            targetMarker: null,
            smooth: true,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        },
        [MATERIAL_SCHEMA.EDGE.VEC_2]: {
            stroke: 'rgba(170, 260, 170, 1.0)',
            strokeWidth: 2,
            targetMarker: null,
            smooth: true,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        },
        [MATERIAL_SCHEMA.EDGE.VEC_3]: {
            stroke: 'rgba(230, 140, 230, 1.0)',
            strokeWidth: 2,
            targetMarker: null,
            smooth: true,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        },
        [MATERIAL_SCHEMA.EDGE.VEC_4]: {
            stroke: 'rgba(260, 170, 170, 1.0)',
            strokeWidth: 2,
            targetMarker: null,
            smooth: true,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        },
        [MATERIAL_SCHEMA.EDGE.MATRIX]: {
            stroke: 'rgba(230, 230, 140, 1.0)',
            strokeWidth: 2,
            targetMarker: null,
            smooth: true,
            contextMenuItems: [
                {
                    text: 'Delete edge',
                    action: GRAPH_ACTIONS.DELETE_EDGE
                }
            ],
        }
    }
};

var materialData = {
    nodes: {
        1234: {
            id: 1234,
            nodeType: MATERIAL_SCHEMA.NODE.VARIABLE_FLOAT,
            name: 'maxAlpha',
            posX: 100,
            posY: 300
        },
        1235: {
            id: 1235,
            nodeType: MATERIAL_SCHEMA.NODE.VARIABLE_FLOAT,
            name: 'time',
            posX: 100,
            posY: 500
        },
        1236: {
            id: 1236,
            nodeType: MATERIAL_SCHEMA.NODE.MULTIPLY,
            name: 'Multiply',
            posX: 600,
            posY: 400
        },
        1237: {
            id: 1237,
            nodeType: MATERIAL_SCHEMA.NODE.FRAGMENT_OUTPUT,
            name: 'Fragment Output',
            posX: 900,
            posY: 350
        },
        1238: {
            id: 1238,
            nodeType: MATERIAL_SCHEMA.NODE.SINE,
            name: 'Sine',
            posX: 300,
            posY: 500
        },
        1239: {
            id: 1239,
            nodeType: MATERIAL_SCHEMA.NODE.TEXTURE,
            name: 'Texture',
            posX: 550,
            posY: 200,
            texture: 'https://cdnb.artstation.com/p/assets/images/images/008/977/853/large/brandon-liu-mod9-grass-bliu2.jpg?1516424810'
        },
        1240: {
            id: 1240,
            nodeType: MATERIAL_SCHEMA.NODE.VARIABLE_VEC_2,
            name: 'meshUV',
            posX: 100,
            posY: 200
        }
    },
    edges: {
        '1234,0-1236,0': {
            edgeType: MATERIAL_SCHEMA.EDGE.FLOAT,
            from: 1234,
            to: 1236,
            outPort: 0,
            inPort: 0
        },
        '1235,0-1238,0': {
            edgeType: MATERIAL_SCHEMA.EDGE.FLOAT,
            from: 1235,
            to: 1238,
            outPort: 0,
            inPort: 0
        },
        '1238,0-1236,1': {
            edgeType: MATERIAL_SCHEMA.EDGE.FLOAT,
            from: 1238,
            to: 1236,
            outPort: 0,
            inPort: 1
        },
        '1236,0-1237,2': {
            edgeType: MATERIAL_SCHEMA.EDGE.FLOAT,
            from: 1236,
            to: 1237,
            outPort: 0,
            inPort: 2
        },
        '1239,1-1237,1': {
            edgeType: MATERIAL_SCHEMA.EDGE.VEC_3,
            from: 1239,
            to: 1237,
            outPort: 1,
            inPort: 1
        },
        '1240,0-1239,0': {
            edgeType: MATERIAL_SCHEMA.EDGE.VEC_2,
            from: 1240,
            to: 1239,
            outPort: 0,
            inPort: 0
        }
    }
};

var materialContextMenuItems = [
    {
        text: 'New add',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: MATERIAL_SCHEMA.NODE.ADD,
        name: 'Add'
    },
    {
        text: 'New multiply',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: MATERIAL_SCHEMA.NODE.MULTIPLY,
        name: 'Multiply'
    },
    {
        text: 'New sine',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: MATERIAL_SCHEMA.NODE.SINE,
        name: 'Sine'
    },
    {
        text: 'New texture',
        action: GRAPH_ACTIONS.ADD_NODE,
        nodeType: MATERIAL_SCHEMA.NODE.TEXTURE,
        name: 'Texture'
    },
];


export const Material = (args) => { 
    return <Component graphSchema={materialSchema} graphData={materialData} contextMenuItems={materialContextMenuItems}/>;
};

document.querySelector('#root').setAttribute('style', 'position: fixed; width: 100%; height: 100%');

setTimeout(() => {
    document.body.setAttribute('style', 'margin: 0px; padding: 0px;');
}, 1);