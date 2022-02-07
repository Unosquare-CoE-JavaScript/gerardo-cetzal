// we can define a combinable type with the next operator "|"
type Combinable = number | string;
type ConverstionDescriptor = 'as-number' | 'as-text';

// this a simple function that only print info but we used conditionals
function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConverstionDescriptor
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result;
}


const combinedAges = combine(25, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('25', '26', 'as-number');
console.log(combinedStringAges);


const combinedNames = combine('Gerardo', ' Diana', 'as-text');
console.log(combinedNames);
