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


function calculateTriangleArea(base, height) {
  let area = 0.5 * base * height;
  return area;
}

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(12, 8));