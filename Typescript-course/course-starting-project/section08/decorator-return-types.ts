// Decorators
function Logger(logString: string) {
    console.log('LOGGER FACOTRY');
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

function WithTemplate(template: string, hookId: string) {
    console.log('TEMPLATE FACTORY')
    return function<T extends {new(...args: any[]): {name: string} }>(originalConstructor: T) {
        return class extends originalConstructor {
            constructor (..._: any[]) {
                super();
                console.log('Rendering template');
                const hookEle = document.getElementById(hookId);
                const p = new originalConstructor();
                if (hookEle) {
                    hookEle.innerHTML = template;
                    hookEle.querySelector('h1')!.textContent = this.name;
                }
            }
        }
    }
}

//@Logger('LOGGING - PERSON') // special identifier this is a decorator
@Logger('LOADING')
@WithTemplate('<h1>My Person object</h1>', 'app')
class Person {
    name = 'Ger';

    constructor() {
        console.log('Creating object person');
    }
}

const pers = new Person();
console.log(pers);