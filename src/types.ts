import type { Observer } from '@playcanvas/observer';
import type { MenuItemArgs } from '@playcanvas/pcui';

export type Id = string | number;
export type Value = unknown;
export type Attributes = Record<string, Value> & { name?: string };

export type ContextMenuItem = Omit<MenuItemArgs, 'items'> & {
    action?: string;
    edgeType?: Id;
    nodeType?: Id;
    attributes?: Attributes;
    items?: ContextMenuItem[];
    [key: string]: unknown;
};

export type PortSchema = {
    name: string;
    type: Id;
    edgeType?: Id;
    textFormatter?: (attributes: Attributes) => string;
};

export type AttributeSchema = {
    name: string;
    type: string;
    hidden?: boolean;
    defaultValue?: Value;
};

export type NodeStyle = {
    fill: string;
    fillSecondary: string;
    stroke: string;
    strokeSelected: string;
    strokeHover: string;
    textColor: string;
    textColorSecondary: string;
    includeIcon: boolean;
    icon: string;
    iconColor: string;
    baseHeight: number;
    baseWidth: number;
    textAlignMiddle: boolean;
    lineHeight: number;
    inPorts?: PortSchema[];
    outPorts?: PortSchema[];
};

export type EdgeStyle = {
    stroke: string;
    strokeSelected: string;
    strokeWidth: number;
    strokeWidthSelected: number;
    targetMarker: boolean | null;
    sourceMarker?: boolean | null;
    connectionStyle: string;
};

export type DefaultStyles = {
    initialScale: number;
    initialPosition: { x: number; y: number };
    background: { color: string; gridSize: number };
    node: NodeStyle;
    edge: EdgeStyle;
};

export type GraphConfig = {
    readOnly: boolean;
    passiveUIEvents: boolean;
    incrementNodeNames: boolean;
    restrictTranslate: boolean;
    edgeHoverEffect: boolean;
    includeFonts: boolean;
    useGlobalPCUI: boolean;
    adjustVertices: boolean;
    selfContainedMode?: boolean;
    minZoom?: number;
    maxZoom?: number;
    defaultStyles: DefaultStyles;
};

export type NodeSchema = Partial<NodeStyle> & {
    name?: string;
    attributes?: AttributeSchema[];
    contextMenuItems?: ContextMenuItem[];
    headerTextFormatter?: (attributes: Attributes, id: Id) => string;
};

export type EdgeSchema = Partial<EdgeStyle> & {
    from?: Id[];
    to?: Id[];
    smooth?: boolean;
    smoothInOut?: boolean;
    contextMenuItems?: ContextMenuItem[];
};

export type GraphSchema = {
    nodes: Record<Id, NodeSchema>;
    edges: Record<Id, EdgeSchema>;
};

export type NodeData = {
    id: Id;
    nodeType: Id;
    posX: number;
    posY: number;
    attributes?: Attributes;
    name?: string;
    marker?: Value;
    texture?: string;
    [key: string]: Value;
};

export type EdgeData = {
    from: Id;
    to: Id;
    edgeType: Id;
    inPort?: number;
    outPort?: number;
    [key: string]: Value;
};

export type GraphData = {
    nodes?: Record<string, NodeData>;
    edges?: Record<string, EdgeData>;
};

export type DeletedNode = { node: NodeData; edges: string[]; edgeData: Record<string, EdgeData> };

export type SelectedItemData = { type: string; id: Id; edgeId?: Id };

export type GraphEventMap = {
    EVENT_ADD_NODE: { node: NodeData };
    EVENT_DELETE_NODE: DeletedNode;
    EVENT_SELECT_NODE: { node: NodeData; prevItem?: SelectedItemData | null };
    EVENT_UPDATE_NODE_POSITION: { nodeId: Id; node: NodeData };
    EVENT_UPDATE_NODE_ATTRIBUTE: { node: NodeData; attribute: string; attributeKey?: string };
    EVENT_ADD_EDGE: { edge: EdgeData; edgeId: Id };
    EVENT_DELETE_EDGE: { edgeId: Id; edge?: EdgeData };
    EVENT_SELECT_EDGE: { edge: EdgeData; edgeId?: Id; prevItem?: SelectedItemData | null };
    EVENT_DESELECT_ITEM: { prevItem?: SelectedItemData | null };
    EVENT_UPDATE_TRANSLATE: { pos: { x: number; y: number } };
    EVENT_UPDATE_SCALE: { scale: number };
};

export type GraphObserver = Observer;

export type InputElement = HTMLElement & {
    ui: {
        error: boolean;
        suspendEvents: boolean;
        value: Value;
        on: (event: string, callback: (value: Value) => void) => void;
    };
};

export type Vector = { x?: number; y?: number; z?: number; w?: number };
