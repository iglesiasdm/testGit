import { hash } from './makeHash.js';

let usuarios = [
    { id: 1, nombre: 'Luis', edad: 43, sexo: 'M' },
    { id: 2, nombre: 'Roberto', edad: 37, sexo: 'M' },
    { id: 3, nombre: 'Carla', edad: 21, sexo: 'F' },
    { id: 4, nombre: 'María', edad: 48, sexo: 'F' },
    { id: 5, nombre: 'Ernestina', edad: 23, sexo: 'F' }
];

hash(usuarios, 'sexo')
    .then(x => console.log(x) );
