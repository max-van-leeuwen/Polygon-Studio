export abstract class Dynamics {
    protected static readonly EPSILON: number = 0.00001

    protected static readonly VECTOR_3_ZERO: vec3 = vec3.zero()

    protected xp: vec3
    protected y: vec3
    protected yd: vec3
    protected y2d: vec3

    protected constructor(x0: vec3) {
        this.xp = x0
        this.y = this.xp
        this.yd = Dynamics.VECTOR_3_ZERO
        this.y2d = Dynamics.VECTOR_3_ZERO
    }

    abstract update(t: number, x: vec3, xd: vec3): vec3
    abstract predict(t: number): vec3

    public reset(x0: vec3) {
        this.xp = x0
        this.y = this.xp
        this.yd = Dynamics.VECTOR_3_ZERO
        this.y2d = Dynamics.VECTOR_3_ZERO
    }

    public getSpeed(): vec3 {
        return this.yd
    }

    public getAcceleration(): vec3 {
        return this.y2d
    }
}

export class SimpleDynamics extends Dynamics {
    constructor(x0: vec3) {
        super(x0)
    }

    public update(t: number, x: vec3, xd: vec3 = null): vec3 {
        if (t < Dynamics.EPSILON) {
            return x
        }

        xd = x.sub(this.xp).uniformScale(1.0 / t)
        this.xp = x

        this.y2d = xd.sub(this.yd).uniformScale(1.0 / t)
        this.yd = xd
        // noinspection JSSuspiciousNameCombination
        this.y = x

        return this.y
    }

    public predict(t: number): vec3 {
        const y2d = Dynamics.VECTOR_3_ZERO.sub(this.yd).uniformScale(1.0 / t / 3.0)
        const yd = this.yd.add(y2d.uniformScale(t))
        return this.y.add(yd.uniformScale(t))
    }
}

export class SecondOrderDynamics extends Dynamics {
    private readonly k1: number
    private readonly k2: number
    private readonly k3: number
    private readonly w: number
    private readonly d: number

    constructor(
        private readonly f: number,
        private readonly z: number,
        private readonly r: number,
        x0: vec3) {

        super(x0)

        this.w = 2.0 * Math.PI * f
        this.d = this.w * Math.sqrt(Math.abs(z * z - 1.0))

        this.k1 = z / (Math.PI * f)
        this.k2 = 1.0 / ((2.0 * Math.PI * f) * (2.0 * Math.PI * f))
        this.k3 = r * z / (2.0 * Math.PI * f)
    }

    public update(t: number, x: vec3, xd: vec3 = null): vec3 {
        if (t < Dynamics.EPSILON) {
            return x
        }

        if (!xd) {
            xd = x.sub(this.xp).uniformScale(1.0 / t)
            this.xp = x
        }

        const k2Stable: number = this.calculateK2Stable(t)

        this.y2d = x.add(xd.uniformScale(this.k3))
            .sub(this.y)
            .sub(this.yd.uniformScale(this.k1))
            .uniformScale(1.0 / k2Stable)

        this.yd = this.yd.add(this.y2d.uniformScale(t))

        this.y = this.y.add(this.yd.uniformScale(t))

        return this.y
    }

    public predict(t: number): vec3 {
        const x = this.xp
        const xd = Dynamics.VECTOR_3_ZERO

        const k2Stable: number = this.calculateK2Stable(t)

        const y2d = x.add(xd.uniformScale(this.k3))
            .sub(this.y)
            .sub(this.yd.uniformScale(this.k1))
            .uniformScale(1.0 / k2Stable)

        const yd = this.yd.add(y2d.uniformScale(t))

        return this.y.add(yd.uniformScale(t))
    }

    private calculateK2Stable(t: number) {
        let k2Stable: number

        if (this.w * t < this.z) {
            k2Stable = Math.max(this.k2, t * t / 2.0 + t * this.k1 / 2.0, t * this.k1)
        }
        else {
            let t1 = Math.exp(-this.z * this.w * t)
            let alpha = 2.0 * t1 * (this.z <= 1.0 ? Math.cos(t * this.d) : cosh(t * this.d))
            let beta = t1 * t1
            let t2 = t / (1.0 + beta - alpha)
            k2Stable = t * t2
        }

        return k2Stable
    }
}

function cosh(x: number): number {
    return (Math.exp(x) + Math.exp(-x)) / 2.0
}
