const { Console } = require('console');
const fs = require('fs');
const colors = require('colors');

//const { resolve } = require('path/posix');

const crearArchivo = async(base = 5, listar = false, rango = 12) => {

    try {
        
    
        let salida = '';
        let consola = '';
    
        consola += '======================\n'.bgGreen;
        consola += `===   TABLA DEL ${base}  ===\n`.green;
        consola += '======================\n'.bgGreen;
        
        for (let i = 1; i<=rango; i++) {
            salida += `${ base } x ${ i } = ${ base*i }\n`;
            consola += `${ base } ${'x'.green} ${ i } ${'x'.green} ${ base*i }\n`;        
        }

        (listar)?console.log(consola.gray):console.log(''); 
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `Tabla del ${base}.txt`;            
    
    } catch (err) {
        throw err;   
    }    
    
}

module.exports = {
    crearArchivo
};

