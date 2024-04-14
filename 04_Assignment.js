class Shape {
    draw() {
        console.log("Drawing a generic shape.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    draw() {
        console.log(`Drawing a circle with radius ${this.radius}.`);
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    draw() {
        console.log(`Drawing a rectangle with width ${this.width} and height ${this.height}.`);
    }
}

// Demonstration of polymorphism
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

const shapes = [circle, rectangle];

shapes.forEach(shape => {
    shape.draw();
});
