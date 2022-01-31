const color = require('colors');
const { crearArchivo, mostrarArchivoCreado } = require('./tabla');
const argv = require('./config/yargs');

if (argv.b) {
  crearArchivo(argv.b)
    .then((nombreArchivo) => console.log(`Se ha creado el archivo ${nombreArchivo}`))
    .catch((e) => console.log('ERROR: '.red + e));
}

if (argv.l) {
  console.log(`Mostrando la tabla de base: ${argv.b} \n`.green + mostrarArchivoCreado(argv.b).rainbow);
}
