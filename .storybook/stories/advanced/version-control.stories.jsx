import React from 'react';
import Graph from '../../base-component';

export default {
    title: 'Advanced/Version Control Graph',
    component: Graph,
    argTypes: {
        // Define the args that you want to be editable in the Storybook UI
    }
};

const GRAPH_SCHEMA = {
    nodes: {
        0: {
            fill: '#ead1db',
            stroke: '#965070',
            strokeSelected: '#965070',
            strokeHover: '#965070',
            textColor: '#20292b',
            baseHeight: 60,
            baseWidth: 150,
            textAlignMiddle: true,
            includeIcon: false
        },
        1: {
            fill: '#fbe5cd',
            stroke: '#ff574b',
            strokeSelected: '#ff574b',
            strokeHover: '#ff574b',
            textColor: '#20292b',
            baseHeight: 60,
            baseWidth: 150,
            textAlignMiddle: true,
            includeIcon: false
        },
        2: {
            fill: '#d0e1f2',
            stroke: '#4d7cd7',
            strokeSelected: '#4d7cd7',
            strokeHover: '#4d7cd7',
            textColor: '#20292b',
            baseHeight: 60,
            baseWidth: 150,
            textAlignMiddle: true,
            includeIcon: false
        },
        3: {
            fill: '#d9ead3',
            stroke: '#43fb39',
            strokeSelected: '#43fb39',
            strokeHover: '#43fb39',
            textColor: '#20292b',
            baseHeight: 60,
            baseWidth: 150,
            textAlignMiddle: true,
            includeIcon: false
        },
    },
    edges: {
        0: {
            from: [
                0,
            ],
            to: [
                0, 1, 2, 3
            ],
            stroke: '#965070',
            strokeWidth: 3,
            connectionStyle: 'smoothInOut'
        },
        1: {
            from: [
                1,
            ],
            to: [
                0, 1, 2, 3
            ],
            stroke: '#ff574b',
            strokeWidth: 3,
            connectionStyle: 'smoothInOut'
        },
        2: {
            from: [
                2,
            ],
            to: [
                0, 1, 2, 3
            ],
            stroke: '#4d7cd7',
            strokeWidth: 3,
            connectionStyle: 'smoothInOut'
        },
        3: {
            from: [
                3,
            ],
            to: [
                0, 1, 2, 3
            ],
            stroke: '#43fb39',
            strokeWidth: 3,
            connectionStyle: 'smoothInOut'
        }
    }
};

const GRAPH_DATA =  {
    nodes: {},
    edges: {
        '02-12': {
            from: '02',
            to: '12',
            edgeType: 0
        },
        '17-04': {
            from: '17',
            to: '04',
            edgeType: 1
        },
        '13-30': {
            from: '13',
            to: '30',
            edgeType: 1
        },
        '24-32': {
            from: '24',
            to: '32',
            edgeType: 2
        },
        '25-14': {
            from: '25',
            to: '14',
            edgeType: 2
        },
        '36-26': {
            from: '36',
            to: '26',
            edgeType: 3
        }
    }
};

[
    [
        'Branch 1, Commit 5\nAug 23, 21 zpaul',
        'Branch 1, Commit 4\nAug 23, 21 zpaul',
        'Branch 1, Commit 3\nAug 23, 21 zpaul',
        'Branch 1, Commit 2\nAug 23, 21 zpaul',
        'Branch 1, Commit 1\nAug 23, 21 zpaul'
    ],
    [
        'Branch 2, Commit 8\nAug 23, 21 zpaul',
        'Branch 2, Commit 7\nAug 23, 21 zpaul',
        'Branch 2, Commit 6\nAug 23, 21 zpaul',
        'Branch 2, Commit 5\nAug 23, 21 zpaul',
        'Branch 2, Commit 4\nAug 23, 21 zpaul',
        'Branch 2, Commit 3\nAug 23, 21 zpaul',
        'Branch 2, Commit 2\nAug 23, 21 zpaul',
        'Branch 2, Commit 1\nAug 23, 21 zpaul'
    ],
    [
        'Branch 3, Commit 7\nAug 23, 21 zpaul',
        'Branch 3, Commit 6\nAug 23, 21 zpaul',
        'Branch 3, Commit 5\nAug 23, 21 zpaul',
        'Branch 3, Commit 4\nAug 23, 21 zpaul',
        'Branch 3, Commit 3\nAug 23, 21 zpaul',
        'Branch 3, Commit 2\nAug 23, 21 zpaul',
        'Branch 3, Commit 1\nAug 23, 21 zpaul'
    ],
    [
        'Branch 4, Commit 7\nAug 23, 21 zpaul',
        'Branch 4, Commit 6\nAug 23, 21 zpaul',
        'Branch 4, Commit 5\nAug 23, 21 zpaul',
        'Branch 4, Commit 4\nAug 23, 21 zpaul',
        'Branch 4, Commit 3\nAug 23, 21 zpaul',
        'Branch 4, Commit 2\nAug 23, 21 zpaul',
        'Branch 4, Commit 1\nAug 23, 21 zpaul'
    ]
].forEach((commits, i) => {
    commits.forEach((commit, j) => {
        GRAPH_DATA.nodes[`${i}${j}`] = {
            id: `${i}${j}`,
            name: commit,
            nodeType: i,
            posX: 250 * i + 50,
            posY: 100 * j + 100,
            marker: ['17', '31', '36'].includes(`${i}${j}`)
        };
        if (j === 0) return;
        GRAPH_DATA.edges[`${i}${j - 1}-${i}${j}`] = {
            to: `${i}${j - 1}`,
            from: `${i}${j}`,
            edgeType: i
        };
    });
});

// Template function
const Template = (args) => <Graph schema={GRAPH_SCHEMA} options={{...args}} />;

// Default story using the template
export const VersionControlGraphExample = Template.bind({});

// Default args for the story
VersionControlGraphExample.args = {
    initialData: GRAPH_DATA,
    passiveUIEvents: false,
    includeFonts: true,
    defaultStyles: {
        initialScale: 0.75,
        background: {
            color: '#20292B',
            gridSize: 1
        },
        edge: {
            connectionStyle: 'default',
            targetMarker: true,
            sourceMarker: true
        }
    },
    readOnly: true
};

document.getElementById('storybook-root').setAttribute('style', 'position: fixed; width: 100%; height: 100%');
document.body.setAttribute('style', 'margin: 0px; padding: 0px;');

setTimeout(() => {
    const graph = document.querySelector('.pcui-graph').ui;
    graph.on('EVENT_SELECT_NODE', ({node}) => {
        if (node.id === '00') {
            graph.createNode({
                id: `4848583`,
                name: 'Branch 1, Commit 6\nAug 23, 21 zpaul',
                nodeType: 0,
                posX: node.posX,
                posY: node.posY - 100
            });
            graph.createEdge({
                to: '4848583',
                from :'00',
                edgeType: 0
            }, `00-${4848583}`);
        }
    });
}, 0);