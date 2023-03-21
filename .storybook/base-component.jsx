import React from 'react';
import Graph from '../src/index.js';
import '@playcanvas/pcui/styles';
import '../src/styles/index.js';

class BaseComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    attachElement = (nodeElement, containerElement) => {
        if (!nodeElement) return;
        this.element = new Graph(this.props.schema, {
            ...this.props.options,
            dom: nodeElement,
        });
        if (this.onClick) {
            this.element.on('click', this.onClick);
        }
        if (this.onChange) {
            this.element.on('change', this.onChange);
        }
        if (this.props.parent) {
            this.element.parent = this.props.parent;
        }
    }
    getPropertyDescriptor = (obj, prop) => {
        let desc;
        do {
            desc = Object.getOwnPropertyDescriptor(obj, prop);
        } while (!desc && (obj = Object.getPrototypeOf(obj)));
        return desc;
    }

    componentDidMount() {
        if (this.link) {
            this.element.link(this.link.observer, this.link.path);
        }
    }

    componentDidUpdate(prevProps) {
        Object.keys(this.props).forEach(prop => {
            var propDescriptor = this.getPropertyDescriptor(this.element, prop);
            if (propDescriptor && propDescriptor.set) {
                this.element[prop] = this.props[prop];
            }
        });
        if (prevProps.link !== this.props.link) {
            this.element.link(this.props.link.observer, this.props.link.path);
        }
    }

    render() {
        return <div ref={this.attachElement} />
    }
}

export default BaseComponent;
