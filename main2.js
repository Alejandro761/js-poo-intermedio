const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'aloh?'
    }
};

const ob2 = {};

for (const propiedad in obj1) {
    ob2[propiedad] = obj1[propiedad]; //una manera para que no cambie las propiedades de obj1, pero los objetos dentro de estos objetos también copiaran el mismo apuntador asi que F
}

// console.log(ob2)
// ob2.a = 'aaaa'
// console.log(obj1)
// console.log(ob2)

// obj1.c.d = 'DDDDDD'
// console.log(obj1)
// console.log(ob2)

const obj3 = Object.assign({}, obj1); //tenemos el mismo problema que forin

obj1.c.e = 'eeeeeee';
// console.log(obj1);
// console.log(obj3);

const obj4 = JSON.stringify(obj1); //crea un string con las propiedades del objeto, con sus keys y valores, no incluyen funciones
console.log(obj4)
const obj5 = JSON.parse(obj4); //crea un objeto a partir de un string que fue convertido desde un objeto con stringify, 

obj1.a = 'aa33'
obj1.c.d = 'd de d'

console.log(obj5);

obj1.editA();
console.log(obj5);



let numeros = [1,9,4,6,1,8,6,5,3,8,2];

for (let index = 0; index < numeros.length; index++) {
    console.log(index, numeros[index]);
}

function recursiva(numerosArray) {
    if(numerosArray.length != 0){
        const firstNum = numerosArray[0];
        console.log(firstNum);
        numerosArray.shift(); //shift elimina el primer elemento
        recursiva(numerosArray);
    } 
}

// recursiva(numeros); 

function isObject(subject){
    return typeof subject === 'object';
}

function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject) {
    let copySubject;

    const subjectIsArray = isArray(subject);
    const subjectIsObject = isObject(subject);

    if(subjectIsArray) {
        copySubject = [];
    } else if(subjectIsObject){
        copySubject = {};
    } else {
        return subject;
    }

    for (key in subject) {
        const keyIsObject = isObject(subject[key]);
        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        } else {
            if(subjectIsArray) {
                copySubject.push(subject[key]);
            } else {
                copySubject[key] = subject[key];
            }
        }
    }

    return copySubject;
}

const objChido = deepCopy(obj1);
console.log(objChido);
objChido.a = 'asi';
objChido.c.d = 'simon';
console.log(objChido);
console.log(obj1);

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        facebook: undefined,
    },
};

// const juan = deepCopy(studentBase);

// Object.seal(juan); //para evitar que se eliminen sus propiedades
// Object.isSealed(juan); //da true si no se pueden borrar
// Object.isFrozen(juan); //da true si no se pueden borrar y si no se pueden editar
function requiredParam(param) {
    throw new Error(param + " es obligatorio");
}

function LeaningPath({
    name = requiredParam('name'),
    courses = [],
}){
    this.name = name;
    this.courses = courses;

    // const private = {
    //     '_name': name,
    //     '_courses': courses,
    // };

    // const public = {
    //     get name() {
    //         return private['_name'];
    //      },
         
    //     set name(newName){
    //         if(newName.length > 0){
    //             private['_name'] = newName;
    //         } else {
    //             console.warn('Tu nombre debe tener al menos 1 carácter');
    //         }
    //     },

    //     get courses() {
    //         return private['_courses'];
    //      },
    // };

    // return public;
}

function Student({
    name = requiredParam('name'), age, email = requiredParam('email'), twitter, facebook, instagram, learningPaths = [], approvedCourses = [],
} = {} /* que por defecto lo que recibimos en un objeto vacio */) {
    
    
    this.name = name;
    this.email = email;
    this.age = age;
    this.approvedCourses = approvedCourses;
    this.socialMedia = {
        twitter, facebook, instagram
    };
    
    const private = {
        '_learningPaths': [], //este es nuestro atributo privado
    };
    Object.defineProperty(Student.prototype, 'learningPaths', {
        get() {
            return private['_learningPaths'];
        },
        
        set(newLP) {
            if(newLP instanceof LeaningPath){
                private['_learningPaths'].push(newLP);
            } else {
                console.warn('No es instancia de LeaningPath, wtf??');
            }
        }
    });

    for(let learningPath of learningPaths){
        this.learningPaths = learningPath; //llamamos a su set
    }
}



const escuelaWeb = new LeaningPath({name: 'escul de desarrolo web', courses: ['html', 'css', 'js']});

const escuelaData = new LeaningPath({name: 'escul de ciencias de datos'});

const escuelaFalsa = {name: 'escul de falsedad'};

const juan = new Student({
    name: 'juanito',
    age: 18,
    email: 'eljuan@simail.com',
    twitter: 'elJuan',
    learningPaths: [escuelaData, escuelaWeb, escuelaFalsa],
});


// const juan2 = createStudent({});

// console.log(juan2); 
