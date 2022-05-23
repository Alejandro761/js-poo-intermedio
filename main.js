const juan = {
    name: "Juanito",
    age: 18,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse) {
        console.log("This ", this);
        console.log("This.approvedCourses ", this.approvedCourses);
        this.approvedCourses.push(newCourse);
    }
};

// console.log(Object.keys(juan));
// console.log(Object.getOwnPropertyNames(juan));
// console.log(Object.entries(juan));
// console.log(Object.entries(juan)[3]);
// console.log(Object.entries(juan)[3][0]);
// console.log(Object.entries(juan)[3][1]);
// console.log(Object.entries(juan)[3][1]('Curso 2'));
console.log(Object.getOwnPropertyDescriptors(juan));   

