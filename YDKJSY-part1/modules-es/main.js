import { create as NewBlogPost } from './src/blogpost.js'

var forAgainstLet = NewBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014", 
    "https://davidwalsh.name/for-and-against-let"
);

forAgainstLet.print();