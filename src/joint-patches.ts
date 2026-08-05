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
import { V, type Vectorizer } from '@joint/core';

type VectorizerElement = Omit<Vectorizer, 'transform'> & {
    transform: (
        matrix?: SVGMatrix | Vectorizer.Matrix,
        opt?: Vectorizer.TransformOptions
    ) => SVGMatrix | Vectorizer | null;
};

(V as unknown as { prototype: VectorizerElement }).prototype.transform = function (
    matrix?: SVGMatrix | Vectorizer.Matrix,
    opt?: Vectorizer.TransformOptions
) {
    const node = this.node as SVGGraphicsElement;

    if (V.isUndefined(matrix)) {
        return node.parentNode ? this.getTransformToElement(node.parentNode as SVGElement) : node.getScreenCTM();
    }

    if (opt && opt.absolute) {
        return this.attr('transform', V.matrixToTransformString(matrix)) as unknown as Vectorizer;
    }

    const svgTransform = V.createSVGTransform(matrix);
    node.transform.baseVal.appendItem(svgTransform);
    return this as unknown as Vectorizer;
};
