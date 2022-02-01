type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Ger',
    privileges: ['create-server'],
    startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// combine, overload function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = add('Ger', 'Cetzal') ;
result.split('');

const fetchUserData = {
    id: 'u1',
    name: 'Ger',
    job: { title: 'CEO', description: 'My own company'}
}

console.log(fetchUserData?.job?.title);

const userInput = null;
const storeData = userInput || 'DEFAULT';


// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//     console.log('Name: ' + emp.name);
//     if ('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if ('startDate' in emp) {
//         console.log('Privileges: ' + emp.startDate);
//     }   
// }

// printEmployeeInformation(e1);

// class Car {
//     drive() {
//         console.log('Driving ...');
//     }
// }

// class Truck {
//     drive() {
//         console.log('Driving a truck...');
//     }

//     loadCargo(amount: number) {
//         console.log('Loading cargo ...' + amount);
//     }
// }

// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//     vehicle.drive();
//     if ('loadCargo' in vehicle) {
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);
// useVehicle(v2);

// // discriminated unions
// interface Bird {
//     type: 'bird';
//     flyingSpeed: number;
// }

// interface Horse {
//     type: 'horse';
//     runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//     let speed;
//     switch (animal.type) {
//         case 'bird':
//             speed = animal.flyingSpeed;
//             break;
//         case 'horse':
//             speed = animal.runningSpeed;
//     }

//     console.log('Moving with speed: ' + speed);
// }

// moveAnimal({type: 'bird', flyingSpeed: 10});

// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = 'Hi there!';

// interface ErrorContainer {
//     [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//     email: 'Not a valid email',
//     username: 'Must start with a capital character!'
// }