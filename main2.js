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