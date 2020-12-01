import React from 'react';
import Element from './index';
import { Element as ElementComponent } from '@playcanvas/pcui/dist/pcui-react';

class GraphComponent extends ElementComponent {
    constructor(props) {
        super(props);
        this.elementClass = Element;
    }
}

GraphComponent.propTypes = {};

GraphComponent.defaultProps = {
};

export default GraphComponent;
