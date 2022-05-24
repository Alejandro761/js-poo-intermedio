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

Object.defineProperty(juan, 'pruebaNASA', {
    value: 'extraterrestres', enumerable: false, writable: false,
    configurable: false
});

Object.defineProperty(juan, 'navigator', {
    value: 'Firefox', enumerable: false, writable:true,
    configurable: true
});

Object.defineProperty(juan, 'editor', {
    value: 'vs-code', enumerable: true, writable:false,
    configurable: true
});

Object.defineProperty(juan, 'terminal', {
    value: 'bash', enumerable: true, writable:true,
    configurable: false
});

console.log(Object.getOwnPropertyDescriptors(juan));

Object.seal(juan) //pone todos sus atributos con configurable false, osea que no se pueden borrar

Object.freeze(juan) //ademas de seal, también deja writable en false, por lo que los atributos del objeto no podran ser editados ni eliminados
