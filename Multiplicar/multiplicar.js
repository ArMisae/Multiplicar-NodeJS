const fs = require('fs');
const colors = require('colors');


let data = '';

let table = '';

let listarTable = (base, limite = 10) => {

    console.log('==================='.green);
    console.log(`  La tabla del ${ base }`.green);
    console.log('==================='.green);

    for (let i = 0; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i }`);

    }

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${ base } * ${ i } =  ${ base * i }\n`;
        }

        fs.writeFile(`Tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.bold);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTable
}