//use require

//const fs = require('express');
//const fs = require('./path');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTable } = require('./Multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTable(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(err => { console.log(err); })
        break;

    default:
        console.log('Comando no reconocido');
        break;
}

//let argv2 = process.argv;

//console.log(argv.base);

//console.log(argv.limite);

// let parametro = argv[2];

// let base = parametro.split('=')[1];