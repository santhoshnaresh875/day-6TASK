class Circle {
    constructor(radius,color) {
        this.radius = radius;
        this.color = color;
    }

    // +circle()
    Circle() {
        return `This is a "Circle!!"`;
    }

    // +circle(radius)
    Circle(radius) {
        return `The radius of Circle is ${this.radius}`;
    }

    // +circle(radius,color)
    Circle(radius, color) {
        return `The radius of Circle is : ${this.radius} and the color is : "${this.color}"`;

    }

    // getRadius()
    getRadius() {
        return `To get the Radius of Circle is : ${this.radius}`;
    }
    
    // setRadius(radius)
    setRadius(radius) {
        this.radius = radius;
    }

    // getColor()
    getColor() {
        return `To ge the Color of Circle is : "${this.color}"`;
    }

    // setColor(color)
    setColor(color) {
        this.color = color;
    }

    // toString()
    toString() {
        return `Circle => "[radius = ${this.radius}, color = ${this.color}]"`;
    }

    // getArea()
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    //getCircumference
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
// radius = 1.0
// color = 'red'
let myCircle = new Circle(1.0, 'red');
console.log(myCircle.Circle());
console.log(myCircle.getRadius());
console.log(myCircle.getColor());
console.log(myCircle.toString());
console.log(`The area of Circle is => ${myCircle.getArea().toFixed(2)}`);
console.log(`The circumfrence of Circle is => ${myCircle.getCircumference().toFixed(2)}`);

// set radius and color
console.log();
console.log('set radius and color : ');
myCircle.setRadius(2)
console.log("New : " + myCircle.getRadius());
myCircle.setColor('blue')
console.log("New : " + myCircle.getColor());