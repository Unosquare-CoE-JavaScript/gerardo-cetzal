
// Student is now an instance of a module
var Student = (function defineStudent() {
    var records = [
        { id: 14, name: "Kyle", grade: 86 },
        { id: 73, name: "Suzy", grade: 87 },
        { id: 112, name: "Frank", grade: 75 },
        { id: 6, name: "Sarah", grade: 91 }
    ];

    var publicAPI = {
        getName
    }

    return publicAPI

    // This method is able to access the private hidden records data.
    function getName(studentID) {
        var student = this.records.find(
            student => student.id == studentID
        );
        return student.name;
    }
})();

// Student.getName(..) invokes this ex- posed inner function, which maintains access to the inner records variable via closure.
console.log(Student.getName(73));