// this the main file
// import create object from Blogpost

import { create as NewBlogPost } from './src/blogpost.js'

// create the object using NewBlogPost
var forAgainstLet = NewBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014", 
    "https://davidwalsh.name/for-and-against-let"
);
// and finally call the function print, all print is interconnected in our logic
forAgainstLet.print();

// Note: I created the package.json to run this script, indicating "type":"module"