import React from 'react';

import { GRAPH_ACTIONS } from './index.js';

import Component from './base-component';

// import './style-story.scss';

var name = 'Graph';
var config = {
    title: `/${name}`
};

export default {
    title: config.title,
    component: Component,
    parameters: {
        docs: {
            // description: {
            //     component: config.docs.description
            // }
        }
    }
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
            fill: 'rgb(54, 67, 70, 0.8)',
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
            fill: 'rgb(54, 67, 70, 0.8)',
            stroke: '#20292b',
            contextMenuItems: [],
            outPorts: [
                {
                    name: 'output',
                    type: MATERIAL_SCHEMA.EDGE.VEC_2
                }
            ],
            attributes: [
                {
                    name: 'values',
                    type: 'VEC_2_INPUT'
                },
            ]
        },
        [MATERIAL_SCHEMA.NODE.MULTIPLY]: {
            name: 'Multiply',
            fill: 'rgb(54, 67, 70, 0.8)',
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
            fill: 'rgb(54, 67, 70, 0.8)',
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
            fill: 'rgb(54, 67, 70, 0.8)',
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
            fill: 'rgb(54, 67, 70, 0.8)',
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
            fill: 'rgb(54, 67, 70, 0.8)',
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
            // stroke: 'rgba(140, 230, 230, 1.0)',
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
        [MATERIAL_SCHEMA.EDGE.VEC_2]: {
            // stroke: 'rgba(170, 260, 170, 1.0)',
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
        [MATERIAL_SCHEMA.EDGE.VEC_3]: {
            // stroke: 'rgba(230, 140, 230, 1.0)',
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
        [MATERIAL_SCHEMA.EDGE.VEC_4]: {
            // stroke: 'rgba(260, 170, 170, 1.0)',
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
        [MATERIAL_SCHEMA.EDGE.MATRIX]: {
            // stroke: 'rgba(230, 230, 140, 1.0)',
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
            posY: 200,
            attributes: {
                name: 'tester'
            }
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

setTimeout(() => {
    document.querySelector('.pcui-graph').ui.on(GRAPH_ACTIONS.ADD_NODE, (node) => {
        console.log(GRAPH_ACTIONS.ADD_NODE, node);
    });
    document.querySelector('.pcui-graph').ui.on(GRAPH_ACTIONS.ADD_EDGE, (edge) => {
        console.log(GRAPH_ACTIONS.ADD_EDGE, edge);
    });
    document.querySelector('.pcui-graph').ui.on(GRAPH_ACTIONS.DELETE_NODE, (node) => {
        console.log(GRAPH_ACTIONS.DELETE_NODE, node);
    });
    document.querySelector('.pcui-graph').ui.on(GRAPH_ACTIONS.DELETE_EDGE, (edge) => {
        console.log(GRAPH_ACTIONS.DELETE_EDGE, edge);
    });
    document.querySelector('.pcui-graph').ui.on(GRAPH_ACTIONS.UPDATE_NODE_POSITION, (node) => {
        console.log(GRAPH_ACTIONS.UPDATE_NODE_POSITION, node);
    });
    document.querySelector('.pcui-graph').ui.on(GRAPH_ACTIONS.UPDATE_NODE_ATTRIBUTE, (node) => {
        console.log(GRAPH_ACTIONS.UPDATE_NODE_ATTRIBUTE, node);
    });
}, 500);