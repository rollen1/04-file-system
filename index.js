import { file } from './lib/file.js';

const userMaryte = {
    name: "tevs",
    age: 87,
    isMarried: false,
}

const createStatus = await file.create('asd', 'betkas.txt', userMaryte)

const readStatus = await file.read('users', 'petras.json');
console.log(readStatus);

// console.log(file);

// const user = {
//     name: 'Petras',
//     age: 99,
//     isLoggedIn: false,
// }

// const status = file.create('users', 'petras.json', user);

// const apiStatus = await fetch('');

// if (apiStatus) 
