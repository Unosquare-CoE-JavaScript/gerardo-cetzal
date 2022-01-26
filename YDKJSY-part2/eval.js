// first cheat
function badIdea() {
    // eval modifies the scope of the badIdea() function in runtime
    // this is bad for many rea- sons, including the performance hit 
    // of modifying the already compiled and optimized scope, every time badIdea() runs.
    eval("var oops = 'Ugh!';");
    console.log(oops);
}

badIdea();

// second cheat
var badIdea2 = { oops: 'Ugh!' };
with (badIdea2) {
    console.log(oops)
}

/*

The global scope was not modified here, but badIdea was turned into a scope at runtime rather than compile time, and 
its property oops becomes a variable in that scope. Again, this is a terrible idea, for performance and readability reasons.

*/