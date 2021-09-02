export var GRAPH_ACTIONS = {
    ADD_NODE: 'EVENT_ADD_NODE',
    DELETE_NODE: 'EVENT_DELETE_NODE',
    SELECT_NODE: 'EVENT_SELECT_NODE',
    UPDATE_NODE_POSITION: 'EVENT_UPDATE_NODE_POSITION',
    UPDATE_NODE_ATTRIBUTE: 'EVENT_UPDATE_NODE_ATTRIBUTE',
    ADD_EDGE: 'EVENT_ADD_EDGE',
    DELETE_EDGE: 'EVENT_DELETE_EDGE',
    SELECT_EDGE: 'EVENT_SELECT_EDGE',
    DESELECT_ITEM: 'EVENT_DESELECT_ITEM',
    UPDATE_TRANSLATE: 'EVENT_UPDATE_TRANSLATE',
    UPDATE_SCALE: 'EVENT_UPDATE_SCALE'
};

export var DEFAULT_CONFIG = {
    readOnly: false,
    passiveUIEvents: false,
    incrementNodeNames: false,
    restrictTranslate: false,
    edgeHoverEffect: true,
    includeFonts: true,
    defaultStyles: {
        background: {
            color: '#20292B',
            gridSize: 10
        },
        node: {
            fill: '#293538',
            fillSecondary: '#364346',
            stroke: '#293538',
            strokeSelected: '#F60',
            strokeHover: 'rgba(255, 102, 0, 0.32)',
            textColor: '#FFFFFF',
            textColorSecondary: '#b1b8ba',
            includeIcon: true,
            icon: '',
            iconColor: '#F60'
        },
        edge: {
            stroke: 'rgb(3, 121, 238)',
            strokeSelected: '#F60',
            strokeWidth: 2,
            strokeWidthSelected: 2,
            targetMarker: true,
            connectionStyle: 'default'
        }
    }
};
