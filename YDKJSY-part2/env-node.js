/*

Here we add studentName as a property on the global object, and then in the console.log(..) 
statement we’re able to access studentName as a normal global variable.
Remember, the identifier global is not defined by JS; it’s specifically defined by Node.

*/

global.studentName = 'Kyle';

function hello() {
    console.log(`Hello, ${studentName}`)
}
hello();

module.exports.hello  = hello;