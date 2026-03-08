/**
 * JointJS compatibility patches.
 *
 * The V.prototype.transform() method is overridden so that, when called with no
 * arguments, it returns the parent-relative transform (via getTransformToElement)
 * instead of the local node matrix that JointJS 4.x returns by default. This
 * preserves the behaviour that the graph rendering code was written against;
 * removing it may break element positioning.
 *
 * NOTE: V.matrixToTransformString is NOT patched here because JointJS 4.x
 * already ships an identical implementation.
 */
import { V } from '@joint/core';

(V as any).prototype.transform = function (matrix: any, opt: any) {
    const node = this.node;

    if ((V as any).isUndefined(matrix)) {
        return (node.parentNode) ?
            this.getTransformToElement(node.parentNode) :
            node.getScreenCTM();
    }

    if (opt && opt.absolute) {
        return this.attr('transform', (V as any).matrixToTransformString(matrix));
    }

    const svgTransform = (V as any).createSVGTransform(matrix);
    node.transform.baseVal.appendItem(svgTransform);
    return this;
};
