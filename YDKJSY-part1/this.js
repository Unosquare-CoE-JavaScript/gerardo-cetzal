/*
A copy of the assigment function reference is set as a property on the homework object,
and then it's called as homework.assigment(). That means the this for that function
call will be the homework object. Hence, this.topic resolve to "JS"

*/

function classroom(teacher) {
    return function study() {
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
assigment.call(otherHomework)