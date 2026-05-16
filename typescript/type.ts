// type InputArray = number[];
// type OutputArray = number[];

// function processArray(arr: InputArray): OutputArray {
//   return arr.map(num => num * 2);
// }

// const input: InputArray = [1, 2, 3, 4, 5];
// const output: OutputArray = processArray(input);

// console.log(output); // [2, 4, 6, 8, 10]




// type User = {
//   id: number;
//   name: string;
//   email: string;
// };  

// const users: User [] = [
//   { id: 1, name: "Alice", age: 30 },
//     { id: 2, name: "Bob",  age: 25 },
//     { id: 3, name: "Charlie",  age: 35 },
// ];
// function getUserNames(users: User[]): string[] {
//   return users.map(user => user.name);
// }
// const userNames: string[] = getUserNames(users );
// console.log(userNames); // ["Alice", "Bob", "Charlie"]

// function ispalindrome(str: string): boolean {
//   const reversed = str.split("").reverse().join("");
//     return str === reversed;
// }
// const result1 = ispalindrome("racecar");
// const result2 = ispalindrome("hello");
// console.log(result1); // true
// console.log(result2); // false

//loop
// for (let i = 0; i < 5; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }}

// const numbers: number[] = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
// }
// console.log("Total sum: " ,sum); // 150

// //Async Await Problem
// function fetchData(): Promise<string> {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("User Data Loaded");
//         }, 2000);
//     });
// }
//     async function getData() {
//         console.log("Loading...");
//         const data = await fetchData();
//         console.log(data);
//     }
//     getData();  

    //Node.js Backend Problem

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});



//variable 
var weight = 38;
var price = 100;
var year = 2024;
var age;
console.log( price);






