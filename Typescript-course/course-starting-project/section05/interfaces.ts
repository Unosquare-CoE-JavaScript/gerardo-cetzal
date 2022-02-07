// type AddFn = ( a:number, b: number ) => number;
/**
 * 
 * Interface is a structure that defines the contract in your application. 
 * It defines the syntax for classes to follow
 */
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
}

interface Named {
    readonly name?: string;
    outputName?: string; // optional
}

// and also we can extend interfaces
interface Greetable extends Named {
    greet(phrase: string): void;
}

// in this case, implements allow us use the interface
// implements will be more for polymorphism
// ... polymorphism is the provision of a single interface to entities of different types...
class Person implements Greetable {
    name?: string;
    age = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string): void {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi');
        }
    }
}

let user1: Greetable;
user1 = new Person();


user1.greet('Hi there, I am')