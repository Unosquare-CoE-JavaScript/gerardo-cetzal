//  a basic function to print a message but with closure
// this code is perfect to understand clousers

function greeting(msg) {
    return function who(name) {
        console.log(`${msg}, ${name}`) // msg is a value from parent function but by parameter and name is the second value from children fucntion
    }
}

function counter(step = 1) {
    var count = 0; // count is local variable created by init
    return function increaseCount() { // is the inner function
        count = count + step; // increase the value from parent function
        return count;
    };
}

// we need to pass the first value and save it in a variable
var hello = greeting('Hello')
// and also we need to pass the second parameter
hello('Peter')

// and also we can do the call in one line
greeting('Howdy')('Gerar')

var incBy1 = counter();
console.log(incBy1())
console.log(incBy1())