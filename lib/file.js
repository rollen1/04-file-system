// async/await
// dokumentacija
// try/catch

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

file.fullPath = (dir, fileName) => {
    const __filename = import.meta.url;
    console.log(__filename);

    const __dirname = path.dirname(__filename);

    return path.join(__dirname, '../data', dir, fileName);
}

// dir - folderis, kur bus failas
// fileName - pavadinimas.jpg

/**
 * Dvieju skaiciu sumavimas
 * @param {number} a 1 skaicius
 * @param {number} b 2 skaicius
 * @returns {string} Skaiciu suma
 */

// function sum(a, b) {
//     if (typeof a === 'string') {
//         a = parseFloat(a);
//     }
//     if (typeof b === 'string') {
//         b = parseFloat(b);
//     }

//     return '' + (a + b);
// }

// sum()

/**
 * Sukuriamas failas, jei tokio dar nera nurodytojoje direktorijoje
 * @param {string} dir Reliatyvus kelias iki direktorijos kur laikomi norimi failai, pvz.: /data/users/
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @param {*} content Objektas (pvz.: {...}), kuri norime irasyti i kuriama faila
 * @returns {boolean|string} Sekmes atveju - `true`; Klaidos atveju - klaidos pranesimas
 */

file.create = async (dir, fileName, content) => {
    let fileDescriptor = null;
    try {
        const filePath = file.fullPath(dir, fileName);
        const fileDescriptor = await fs.open(filePath, 'wx');
        await fs.writeFile(fileDescriptor, JSON.stringify(content));
        // 1. sukurti faila + atidaryti
        // 2. i faila irasyti turini + issaugoti + uzdaryti
        return true;
    } catch (error) {
        return false;
    }
    console.log('kuriamas failas...');
}

file.read = async (dir, fileName) => {
    try {
        const filePath = 'data/' + dir + '/' + fileName;
        const fileContent = fs.readFile(filePath, 'utf-8');  
        return fileContent;
    }  catch (error) {
        console.log();
        return false;
    }
    // if (content) {
    //     return content;
    // } else {
    //     return 'Error';
    // }
    console.log('skaitomas failas...');
}

file.update = () => {
    console.log('atnaujinamas failas...');
}

file.delete = () => {
    console.log('trinamas failas...');
    try {
        const filePath = file.fullPath(dir, fileName);
        await fs.unlink(filePath);
        return true;
    } catch (error) {
        return false;
    }
}

export { file };