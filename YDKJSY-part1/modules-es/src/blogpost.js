// import the function create but adding an alias
import { create as createPub } from './publication.js';

// this parte is simple, we need the object Publication and a String
function printDetails(pub, URL) {
    // pub is the object from parent function Publication
    // we access the object and we call the function print from Publication
    pub.print();
    console.log(URL);
}

export function create(title, author, pubDate, URL) {
    // create the object Publication here, we pass the neccesary parameters
    var pub = createPub(title, author, pubDate);
    // create the object
    var publicAPI = {
        print() {
            printDetails(pub, URL);    
        }
    };
    // return the object
    return publicAPI;
}