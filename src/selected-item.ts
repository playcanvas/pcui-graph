import type Graph from './index';

class SelectedItem {
    _graph: Graph;

    _type: string;

    _id: string | number;

    _edgeId: string | number | undefined;

    constructor(graph: Graph, type: string, id: string | number, edgeId?: string | number) {
        this._graph = graph;
        this._type = type;
        this._id = id;
        this._edgeId = edgeId;
    }

    get type(): string {
        return this._type;
    }

    get id(): string | number {
        return this._id;
    }

    get edgeId(): string | number | undefined {
        return this._edgeId;
    }

    selectItem(): void {
        switch (this._type) {
            case 'NODE':
                this._graph.view.selectNode(this._id);
                break;
            case 'EDGE':
                this._graph.view.selectEdge(this._id);
                break;
        }
    }

    deselectItem(): void {
        switch (this._type) {
            case 'NODE':
                this._graph.view.deselectNode(this._id);
                break;
            case 'EDGE':
                this._graph.view.deselectEdge(this._id);
                break;
        }
    }
}

export default SelectedItem;
