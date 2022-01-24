// data structure, not module

// Student does have the data-and-functionality aspect of en- capsulation, but not the visibility-control aspect. 
// It’s best to label this an instance of a data structure.
var Student = {
    // records is publicly accessible data, not hidden behind a public API
    records: [
        { id: 14, name: "Kyle", grade: 86 },
        { id: 73, name: "Suzy", grade: 87 },
        { id: 112, name: "Frank", grade: 75 },
        { id: 6, name: "Sarah", grade: 91 }
    ],
    getName(studentID) {
        var student = this.records.find(
            student => student.id == studentID
        );
        return student.name;
    }
};

console.log(Student.getName(73));