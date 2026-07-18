let side1 = 5;
let side2 = 5;
let side3 = 5;

if(side1===side2 && side2===side3) {
    console.log('This is an equilateral triangle');
} else if (side1===side2 || side2===side3 || side1===side3) {
    console.log('This is an isosceles triangle');
} else {
    console.log('This is a scalene triangle');
}