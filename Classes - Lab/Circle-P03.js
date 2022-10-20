class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
}

c = new Circle(8);
console.log(c.diameter);

c.diameter = 4;
console.log(c);
console.log(c.area);
c.