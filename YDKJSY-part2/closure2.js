// takes a list of student records
function manageStudentGrades(studentRecords) {
    var grades = studentRecords.map(getGrade);
    // unset `studentRecords` to prevent unwanted 
    // memory retention in the closure
    studentRecords = null;

    //  and returns an addGrade(..) function reference
    return addGrade;

    function getGrade(record) {
        return record.grade;
    }

    function sortAndTrimGradesList() {
        // sort grades, descending
        grades.sort(function desc(g1, g2) {
            return g2 -g1;
        });

        // only keep the top 10 grades
        grades = grades.slice(0, 10);
    }
    // grades variable is preserved inside addGrade(..) via clo- sure; 
    // that’s how the running list of top grades is maintained. 
    // Remember, it’s a closure over the variable grades itself, not the array it holds.
    function addGrade(newGrade) {
        grades.push(newGrade);
        sortAndTrimGradesList();
        return grades;
    }
}

var addNextGrade = manageStudentGrades([ 
    { id: 14, name: "Kyle", grade: 86 }, 
    { id: 73, name: "Suzy", grade: 87 }, 
    { id: 112, name: "Frank", grade: 75 }, 
    // ..many more records..
    { id: 6, name: "Sarah", grade: 91 }
]);
// with a new grade, we get back a current list of the top 10 grades, sorted numerically descending
console.log(addNextGrade(81));
console.log(addNextGrade(68));