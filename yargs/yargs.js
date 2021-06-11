const argv = require('yargs')
    .options( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    }) 
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Valor del rango a multiplicar'
    })
    .check( (argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base debe ser un numero entero'
        }
        if(isNaN(argv.h)){
            throw 'El rango debe ser un numero entero'
        }
        return true;
    } )   
.argv;

module.exports = argv;
