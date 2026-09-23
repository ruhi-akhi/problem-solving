// "use strict";
// input: [1, 2, 3, 4, 5];
// function processArray(input) {
//     return input.map(x => x * 2);
// }
// const input = [1, 2, 3, 4, 5];
// const output = processArray(input);
// console.log(output); // Output: [2, 4, 6, 8, 10]    


// for(const fruit of [1, 2, 3, 4, 5]){
//     console.log(fruit);
//     console.log('i want to eat ' + fruit);
// }


// Printing PI value
console.log(Math.PI);

// Function to calculate circle area
// function calculateCircleArea(radius) {
//   let area = Math.PI * radius * radius;
//   return area;
// }

// console.log(calculateCircleArea(5));
// console.log(calculateCircleArea(10));


// function calculateRectangleArea(length, width) {
//   let area = length * width;
//   return area;
// }

// console.log(calculateRectangleArea(5, 10));
// console.log(calculateRectangleArea(8, 12));


// function calculateTriangleArea(base, height) {
//   let area = 0.5 * base * height;
//   return area;
// }

// console.log(calculateTriangleArea(10, 5));
// console.log(calculateTriangleArea(12, 8));


// function convertCelsiusToFahrenheit(celsius) {
//   let fahrenheit = (celsius * 9 / 5) + 32;
//   return fahrenheit;
// }

// console.log(convertCelsiusToFahrenheit(0));
// console.log(convertCelsiusToFahrenheit(25));
// console.log(convertCelsiusToFahrenheit(100));


// function calculateSimpleInterest(principal, rate, time) {
//   let interest = (principal * rate * time) / 100;
//   return interest;
// }

// console.log(calculateSimpleInterest(1000, 5, 2));
// console.log(calculateSimpleInterest(5000, 8, 3));






// function calculateDiscount(price: number, discount: number): number {
//   let amount = (price * discount) / 100;
//   return amount;
// }

// console.log(calculateDiscount(1000, 10));
// console.log(calculateDiscount(2500, 20));


interface User {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}

function showUser(user: User): void {
  console.log(`Name: ${user.name}`);
  console.log(`Age: ${user.age}`);
  console.log(`Email: ${user.email}`);
  console.log(`Active: ${user.isActive}`);
}

const user: User = {
  name: "Akhi",
  age: 22,
  email: "akhi@example.com",
  isActive: true
};

showUser(user);