var special = 42;

function lookingFor(special) {
    // The identifier `special` (parameter) in this 
    // scope is shadowed inside keepLooking(), and 
    // is thus inaccessible from that scope.
    function keepLooking() {
        var special = 3.141592;
        console.log(special);
        // this is special for browser
        console.log(window.special)
    }
    keepLooking();
}

lookingFor(1232123123);


// Node programs is never actually the global scope, the way it is when loading a non- module file in the browser.