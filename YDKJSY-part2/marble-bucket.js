// outer/global scope: RED
// encompasses the global scope, which holds three identifiers/variables
var students = [
    { id: 14, name: "Kyle" }, 
    { id: 73, name: "Suzy" }, 
    { id: 112, name: "Frank" }, 
    { id: 6, name: "Sarah" }
];

function getStudentName(studentID) {
    // function scope: Blue
    // encompasses the scope of the function getStudentName
    for (let student of students) {
        // loop scope: Green
        // encompasses the scope of the for- loop
        if (student.id == studentID) {
            return student.name;
        }
    }
}

var nextStudent = getStudentName(73); 
console.log(nextStudent);