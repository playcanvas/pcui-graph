class SelectedItem {
    constructor(graph, type, id, edgeId) {
        this._graph = graph;
        this._type = type;
        this._id = id;
        this._edgeId = edgeId;
    }

    get type() {
        return this._type;
    }

    get id() {
        return this._id;
    }

    get edgeId() {
        return this._edgeId;
    }

    selectItem() {
        switch (this._type) {
            case 'NODE':
                this._graph.view.selectNode(this._id);
                break;
            case 'EDGE':
                this._graph.view.selectEdge(this._id);
                break;
        }
    }

    deselectItem() {
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
