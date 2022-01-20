// 'This' has different values depending on where it is used:

/*
    In a method, this refers to the owner object.
    Alone, this refers to the global object.
    In a function, this refers to the global object.
    In a function, in strict mode, this is undefined.
    In an event, this refers to the element that received the event.
    Methods like call(), and apply() can refer this to any object
*/



function classroom(teacher) {
    // we have a clouser, teacher is the name
    return function study() {
        // this.topic
        console.log(`
            ${teacher} says to study ${this.topic}
        `);
    };
}

var assigment = classroom('Kyle');

var homework = {
    topic: 'JS',
    assigment: assigment
};

// other way to invoke a function
var otherHomework = {
    topic: 'Math'
}

homework.assigment();
/*
A copy of the assigment function reference is set as a property on the homework object,
and then it's called as homework.assigment(). That means the this for that function
call will be the homework object. Hence, this.topic resolve to "JS"

*/
assigment.call(otherHomework)