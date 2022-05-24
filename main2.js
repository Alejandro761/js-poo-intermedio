const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
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
console.log(obj1);
console.log(obj3);