// this is similar like classic module but in ecmascript incorporated the export keyword

// basic function waiting for parameters and print msg
function printDetails(title,author,pubDate) { 
    console.log(`
        Title: ${ title } By: ${ author } ${ pubDate }
    `);
}

// export the function create, receive parameters
export function create(title, author, pubDate) {
    // we create the object that has a function
    var publiAPI = {
        print() {
            printDetails(title, author, pubDate)
        }
    };
    // return the object, we can import in other files, this useful to separte our code in modules simples
    return publiAPI;
}