// const names: Array<string> = ['Max', 'Manuel'];

// const promise: Promise<any> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!')
//     }, 2000)
// });

// promise.then(data => {
//     data.split(' ');
// })


/**
 * 
 * Generics are basically a kind of tool that enables you to create reusable 
 * code components that work with a number of types instead of a single type
 * The main reason to use generics in TypeScript is to enable types, classes or interfaces to act as parameters
 * 
 * Benefits of generic
 * 
 * 1---------
 * Defining a relationship between input and output parameters types. 
 * For example, function test <T>(input: T[]): T { … } allows you to make sure input and output use the same type, though input as an array.
 * 2---------
 * Stronger type checks at compile time will be available. In the case of above example, 
 * compiler lets you know array methods are available for input and not any other methods.
 * 3---------
 * You can remove some unnecessary type casts. For example, when you have const list: Array<Item> = [],
 * going over array elements, you will have access to all the Item members.
    
 
 */

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: 'Ger', hobbies: ['Sports']}, {age: 26});
console.log(mergeObj);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got not value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.'
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText]
}
console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Ger'}, 'name');

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Karen');
textStorage.addItem('Diana');
textStorage.removeItem('Diana');
console.log(textStorage.getItems());

// const objectStorage = new DataStorage<object>();
// const karenObj = {name: 'karen'}
// objectStorage.addItem(karenObj)
// objectStorage.addItem({name: 'diana'})
// objectStorage.removeItem(karenObj)

// console.log(objectStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date) {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string>[] = ['Ger', 'Karen'];
// names.push('Tanjiro')
// names.pop()