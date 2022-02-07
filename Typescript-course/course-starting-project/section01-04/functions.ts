function add(n1: number, n2: number) {
    return n1 + n2;
}
// we would either have to give the identity function a specific type, in this we dont return a value, so is ok put void
function printResult(num: number): void {
    console.log('Result: ', num);
}
// same here, we receive a callback and we defined that callback doesn't return a value
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 2));

//let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = add;
console.log(combineValues(8,8));

addAndHandle(10, 20, (result) => { console.log(result) })