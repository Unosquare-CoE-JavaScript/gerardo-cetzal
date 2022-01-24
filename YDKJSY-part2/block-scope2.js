function sortNamesByLength(names) {
    var buckets = [];

    for (let firstName of names) {
        if(buckets[firstName.length] == null) {
            buckets[firstName.length] = [];
        }
        buckets[firstName.length].push(firstName);
    }

    // a block to narrow the scope
    {
        let sortedNames = [];
        for (let bucket of buckets) {
            if (bucket) {
                // sort each bucket alphanumerically
                bucket.sort();
                // append the sorted names to our
                // running list
                sortedNames = [ ...sortedNames, ...bucket ];
            }
        }
        return sortedNames;
    }
}

console.log(sortNamesByLength([
    "Sally",
    "Suzy",
    "Frank",
    "John",
    "Jennifer",
    "Scott"
]));