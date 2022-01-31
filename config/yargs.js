const { argv } = require('yargs')
  .options('b', {
    alias: 'base',
    description: 'Es la base de la tabla de multiplicar',
    demandOption: true,
    type: 'number',
  })
  .option('l', {
    alias: 'listar',
    description: 'Muestra la taba en consola',
    demandOption: false,
    type: 'boolean',
    default: false,
  })
  .check((argv, options) => {
    const base = argv.b;
    if (isNaN(base)) {
      throw new Error('La base debe ser un numero');
    }
    if (base < 1 || base > 20) {
      throw new Error('Debes colocar un valor de base entre 1 y 20');
    } else return true;
  });

module.exports = argv;
