/*
Classes are a new feature in ecmascript
*/
class Publication {
    // add constructor to initialize properties
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }
    // this a basic method to print in clg using backticks 
    print() {
        console.log(`
            Title: ${this.title}
            By: ${this.author}
            ${this.pubDate}
        `);
    }
}

// in this class we inheret from Publication with the keyword extends
class Book extends Publication {
    constructor(bookDetails) {
        // The super keyword is used to access and call functions on an object's parent.
        super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        // we call method print from the class Publication
        super.print();
        console.log(`
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}
        `);
    }
}

class BlogPost extends Publication {
    // same like the class Book
    constructor(title, author, pubDate, URL) {
        super(title, author, pubDate, URL);
        this.URL = URL;
    }

    print() {
        // we call method print from the class Publication
        super.print();
        console.log(this.URL)
    }
}

// in the object pass the value in object
var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: '123456-789'
});

YDKJS.print();

// in the object Blogpost we pass the properties without object, only strings
var forAgainstLet = new BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014", 
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();
    