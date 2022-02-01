// const person: {
//     name: string,
//     age: number
// } = {
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};

const person = {
    name: 'Gerardo',
    age: 26,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin');
// person.role[1] = 10;

//  person.role = [0, 'admin'. 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('hi');
    
}