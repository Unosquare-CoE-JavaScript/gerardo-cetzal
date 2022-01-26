// Shadowing parameter
function whatsTheDealHere(id, defaultID = () => id) {
    var id;
    console.log(`local variable 'id' ${id}`);
    console.log(`parameter 'id' (closure): ${defaultID()}`);
    console.log('reassigning id to 5');

    id = 5;
    console.log(`local variable 'id' ${id}`);
    console.log(`parameter 'id' (closure): ${defaultID()}`);
}

// Advice
// Never shadow parameters with local variables
// Avoid using a default parameter function that closes over any of the parameters
whatsTheDealHere(3);