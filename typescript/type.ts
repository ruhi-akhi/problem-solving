type InputArray = number[];
type OutputArray = number[];

function processArray(arr: InputArray): OutputArray {
  return arr.map(num => num * 2);
}

const input: InputArray = [1, 2, 3, 4, 5];
const output: OutputArray = processArray(input);

console.log(output); // [2, 4, 6, 8, 10]




type User = {
  id: number;
  name: string;
  email: string;
};  

const user: User [] = [
  { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob",  age: 25 },
    { id: 3, name: "Charlie",  age: 35 },
];
function getUserNames(users: User[]): string[] {
  return users.map(user => user.name);
}
const userNames: string[] = getUserNames(user);
console.log(userNames); // ["Alice", "Bob", "Charlie"]

function ispalindrome(str: string): boolean {
  const reversed = str.split("").reverse().join("");
    return str === reversed;
}
const result1 = ispalindrome("racecar");
const result2 = ispalindrome("hello");
console.log(result1); // true
console.log(result2); // false



