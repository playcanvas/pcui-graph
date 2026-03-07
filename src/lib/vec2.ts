/**
 * A 2-dimensional vector.
 *
 * @ignore
 */
class Vec2 {
    x: number;

    y: number;

    constructor(x: number | number[] = 0, y: number = 0) {
        if (Array.isArray(x)) {
            this.x = x[0];
            this.y = x[1];
        } else {
            this.x = x;
            this.y = y;
        }
    }

    add(rhs: Vec2): Vec2 {
        this.x += rhs.x;
        this.y += rhs.y;
        return this;
    }

    add2(lhs: Vec2, rhs: Vec2): Vec2 {
        this.x = lhs.x + rhs.x;
        this.y = lhs.y + rhs.y;
        return this;
    }

    addScalar(scalar: number): Vec2 {
        this.x += scalar;
        this.y += scalar;
        return this;
    }

    clone(): Vec2 {
        return new Vec2(this.x, this.y);
    }

    copy(rhs: Vec2): Vec2 {
        this.x = rhs.x;
        this.y = rhs.y;
        return this;
    }

    cross(rhs: Vec2): number {
        return this.x * rhs.y - this.y * rhs.x;
    }

    distance(rhs: Vec2): number {
        const x = this.x - rhs.x;
        const y = this.y - rhs.y;
        return Math.sqrt(x * x + y * y);
    }

    div(rhs: Vec2): Vec2 {
        this.x /= rhs.x;
        this.y /= rhs.y;
        return this;
    }

    div2(lhs: Vec2, rhs: Vec2): Vec2 {
        this.x = lhs.x / rhs.x;
        this.y = lhs.y / rhs.y;
        return this;
    }

    divScalar(scalar: number): Vec2 {
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }

    dot(rhs: Vec2): number {
        return this.x * rhs.x + this.y * rhs.y;
    }

    equals(rhs: Vec2): boolean {
        return this.x === rhs.x && this.y === rhs.y;
    }

    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    lengthSq(): number {
        return this.x * this.x + this.y * this.y;
    }

    lerp(lhs: Vec2, rhs: Vec2, alpha: number): Vec2 {
        this.x = lhs.x + alpha * (rhs.x - lhs.x);
        this.y = lhs.y + alpha * (rhs.y - lhs.y);
        return this;
    }

    mul(rhs: Vec2): Vec2 {
        this.x *= rhs.x;
        this.y *= rhs.y;
        return this;
    }

    mul2(lhs: Vec2, rhs: Vec2): Vec2 {
        this.x = lhs.x * rhs.x;
        this.y = lhs.y * rhs.y;
        return this;
    }

    mulScalar(scalar: number): Vec2 {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    normalize(): Vec2 {
        const lengthSq = this.x * this.x + this.y * this.y;
        if (lengthSq > 0) {
            const invLength = 1 / Math.sqrt(lengthSq);
            this.x *= invLength;
            this.y *= invLength;
        }
        return this;
    }

    floor(): Vec2 {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }

    ceil(): Vec2 {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }

    round(): Vec2 {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }

    min(rhs: Vec2): Vec2 {
        if (rhs.x < this.x) this.x = rhs.x;
        if (rhs.y < this.y) this.y = rhs.y;
        return this;
    }

    max(rhs: Vec2): Vec2 {
        if (rhs.x > this.x) this.x = rhs.x;
        if (rhs.y > this.y) this.y = rhs.y;
        return this;
    }

    set(x: number, y: number): Vec2 {
        this.x = x;
        this.y = y;
        return this;
    }

    sub(rhs: Vec2): Vec2 {
        this.x -= rhs.x;
        this.y -= rhs.y;
        return this;
    }

    sub2(lhs: Vec2, rhs: Vec2): Vec2 {
        this.x = lhs.x - rhs.x;
        this.y = lhs.y - rhs.y;
        return this;
    }

    subScalar(scalar: number): Vec2 {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }

    toString(): string {
        return `[${this.x}, ${this.y}]`;
    }

    static angleRad(lhs: Vec2, rhs: Vec2): number {
        return Math.atan2(lhs.x * rhs.y - lhs.y * rhs.x, lhs.x * rhs.x + lhs.y * rhs.y);
    }

    static ZERO = Object.freeze(new Vec2(0, 0));

    static ONE = Object.freeze(new Vec2(1, 1));

    static UP = Object.freeze(new Vec2(0, 1));

    static DOWN = Object.freeze(new Vec2(0, -1));

    static RIGHT = Object.freeze(new Vec2(1, 0));

    static LEFT = Object.freeze(new Vec2(-1, 0));
}

export { Vec2 };
