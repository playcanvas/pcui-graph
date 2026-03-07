/**
 * Type augmentations for @joint/core APIs that are used at runtime but not
 * present (or not writable) in the official type definitions.
 */
import type { g, dia, connectors as _connectors } from '@joint/core';

declare module '@joint/core' {

    namespace connectors {
        function smoothInOut(
            sourcePoint: g.Point,
            targetPoint: g.Point,
            vertices: dia.Point[],
            args: Record<string, unknown>
        ): g.Path;
    }

    namespace shapes {
        namespace html {
            class Element extends dia.Element { }
            class ElementView extends dia.ElementView {
                updateBox(): void;
            }
        }
    }
}
