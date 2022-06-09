import { file } from './lib/file.js';

// IIFE - ifis
(async () => {

    const readStatus1 = await file.read('users', 'maryte.json');
    console.log('Read:', readStatus1);

    const user = {
        name: 'maryte',
        age: 87,
        isMarried: false,
    }
    const createStatus = await file.create('users', 'maryte.json', user);
    console.log('Create:', createStatus);

    const readStatus2 = await file.read('users', 'maryte.json');
    console.log('Read:', readStatus2);

    user.isMarried = true;
    const updateStatus = await file.update('users', 'maryte.json', user);
    console.log('Update:', updateStatus);

    const readStatus3 = await file.read('users', 'maryte.json');
    console.log('Read:', readStatus3);

    const deleteStatus = await file.delete('users', 'maryte.json');
    console.log('Delete:', deleteStatus);

    const readStatus4 = await file.read('users', 'maryte.json');
    console.log('Read:', readStatus4);

})();