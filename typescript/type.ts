input: [1, 2, 3, 4, 5]

type InputArray = number[];

type OutputArray = number[];    
function processArray(input: InputArray): OutputArray {
    return input.map(x => x * 2);
}
const input: InputArray = [1, 2, 3, 4, 5];
const output: OutputArray = processArray(input);
console.log(output); // Output: [2, 4, 6, 8, 10]    
    