var keeps = [];

for (var i = 0; i < 3; i++) {
    // new `j` created each iteration, which gets 
    // a copy of the value of `i` at this moment
    let j = i;
    // the `i` here isn't being closed over, so 
    // it's fine to immediately use its current 
    // value in each loop iteration
    keeps[i] = function keepEachJ(){
        // close over `j`, not `i`!
        return j; 
    };
}

// Each function is now closed over a separate (new) variable from each iteration, 
// even though all of them are named j. And each j gets a copy of the value of i at that point in the loop iteration; 
// that j never gets re-assigned. 
console.log(keeps[0]());
console.log(keeps[1]());
console.log(keeps[2]());


// if we use let, three i’s are created, one for each loop, so each of the three closures just work as expected.