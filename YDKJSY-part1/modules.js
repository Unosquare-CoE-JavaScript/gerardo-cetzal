// classic modules

function Publication(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`
            Title: ${title}
            By: ${author}
            ${pubDate}
        `);
        }
    }

    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn
    );

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${this.publisher}
                ISBN: ${this.ISBN}
            `);
        }
    }

    return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
    var pub = Publication(title, author, pubDate);
    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    }

    return publicAPI;
}

var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: '123456-789'
});

YDKJS.print();

var forAgainstLet = BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014", 
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();