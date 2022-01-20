// classic modules
// function Publication will be or parent function

function Publication(title, author, pubDate) {
    // this is the parent function
    // we create the object that has a function
    var publicAPI = {
        print() {
            console.log(`
            Title: ${title}
            By: ${author}
            ${pubDate}
        `);
        }
    }
    // we return the object
    return publicAPI;
}

// Book is a children function
function Book(bookDetails) {
    // like a classes, pub = Publication will be a kind of constructor
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn
    );
    // we create the object like the parent function
    var publicAPI = {
        print() {
            // this is the interesting, we call the print function from the parent function
            pub.print();
            console.log(`
                Publisher: ${this.publisher}
                ISBN: ${this.ISBN}
            `);
        }
    }
    // we return the object
    return publicAPI;
}

// BlogPost is a children function
function BlogPost(title, author, pubDate, URL) {
    // the logic is the same like Book, only receive parameters and will return an object
    var pub = Publication(title, author, pubDate);
    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    }

    return publicAPI;
}
// we pass an object as parameter
var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: '123456-789'
});

YDKJS.print();

// we pass string as parameters
var forAgainstLet = BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014", 
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();