import React from 'react';
import Graph from '../../base-component';

export default {
    title: 'Basic/Styled Graph',
    component: Graph,
    argTypes: {
        // Define the args that you want to be editable in the Storybook UI
    }
};

const GRAPH_ENUM = {
    NODE: {
        RED: 0,
        GREEN: 1,
        BLUE: 2,
    },
    EDGE: {
        RED_TO_BLUE: 0,
        RED_TO_GREEN: 1,
        BLUE_TO_GREEN:2,
    }
};

const GRAPH_SCHEMA = {
    nodes: {
        [GRAPH_ENUM.NODE.RED]: {
            name: 'Red',
            fill: 'red',
            stroke: 'darkRed'
        },
        [GRAPH_ENUM.NODE.GREEN]: {
            name: 'Green',
            fill: 'green',
            stroke: 'darkGreen'
        },
        [GRAPH_ENUM.NODE.BLUE]: {
            name: 'Blue',
            fill: 'blue',
            stroke: 'darkBlue'
        }
    },
    edges: {
        [GRAPH_ENUM.EDGE.RED_TO_BLUE]: {
            from: [
                GRAPH_ENUM.NODE.RED,
            ],
            to: [
                GRAPH_ENUM.NODE.BLUE,
            ],
            stroke: 'magenta'
        },
        [GRAPH_ENUM.EDGE.RED_TO_GREEN]: {
            from: [
                GRAPH_ENUM.NODE.RED,
            ],
            to: [
                GRAPH_ENUM.NODE.GREEN,
            ],
            stroke: 'yellow'
        },
        [GRAPH_ENUM.EDGE.BLUE_TO_GREEN]: {
            from: [
                GRAPH_ENUM.NODE.BLUE,
            ],
            to: [
                GRAPH_ENUM.NODE.GREEN,
            ],
            stroke: 'cyan'
        }
    }
};

var GRAPH_DATA = {
    nodes: {
        1234: {
            id: 1234,
            nodeType: GRAPH_ENUM.NODE.RED,
            name: 'Red',
            posX: 100,
            posY: 100,
        },
        1235: {
            id: 1235,
            nodeType: GRAPH_ENUM.NODE.GREEN,
            name: 'Green',
            posX: 100,
            posY: 300
        },
        1236: {
            id: 1236,
            nodeType: GRAPH_ENUM.NODE.BLUE,
            name: 'Blue',
            posX: 300,
            posY: 200
        },
    },
    edges: {
        '1234-1236': {
            edgeType: GRAPH_ENUM.EDGE.RED_TO_BLUE,
            from: 1234,
            to: 1236
        },
        '1234-1235': {
            edgeType: GRAPH_ENUM.EDGE.RED_TO_GREEN,
            from: 1234,
            to: 1235
        },
        '1236-1235': {
            edgeType: GRAPH_ENUM.EDGE.BLUE_TO_GREEN,
            from: 1236,
            to: 1235
        }
    }
};

// Template function
const Template = (args) => <Graph schema={GRAPH_SCHEMA} options={{...args}} />;

// Default story using the template
export const StyledGraphExample = Template.bind({});

// Default args for the story
StyledGraphExample.args = {
    initialData: GRAPH_DATA,
    passiveUIEvents: false,
    includeFonts: true,
    defaultStyles: {
        background: {
            color: 'white',
            gridSize: 1
        },
        edge: {
            connectionStyle: 'default',
            targetMarker: false
        }
    }
};


document.getElementById('storybook-root').setAttribute('style', 'position: fixed; width: 100%; height: 100%');
document.body.setAttribute('style', 'margin: 0px; padding: 0px;');