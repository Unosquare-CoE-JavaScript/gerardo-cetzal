function greeting(msg) {
    return function who(name) {
        console.log(`${msg}, ${name}`)
    }
}

function counter(step = 1) {
    var count = 0;
    return function increaseCount() {
        count = count + step;
        return count;
    };
}

var hello = greeting('Hello')
hello('Peter')

// and also we can do the call in one line
greeting('Howdy')('Gerar')

var incBy1 = counter();
console.log(incBy1())
console.log(incBy1())