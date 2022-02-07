function Log(target: any, propertyName: string | Symbol) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log('Accessor decorator!')
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log('Method decorator!')
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
    console.log('Parameter decorator!')
    console.log(target);
    console.log(name);
    console.log(position);
}

class Person {
    @Log
    name = 'Ger';

    constructor() {
        console.log('Creating person object...');
    }
}

const pers = new Person();
console.log(pers);

class Product {
    @Log
    title: string;
    private _price: number;

    @Log2
    set price(@Log4 val: number) {
        if (val > 0 ) {
            this._price = val;
        } else {
            throw new Error('Invalid price - shoulb be positive')
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(tax: number) {
        return this.price * ( 1 * tax);
    }
}
