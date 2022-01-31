const fs = require('fs');
const color = require('colors');

const crearArchivo = async (base) => new Promise((resolve, reject) => {
  if (!Number(base)) {
    reject(new Error('La base debe ser un numero'));
    return;
  }

  let data = '';

  for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${i * base}\n`;
  }

  fs.writeFile(`tabla_${base}.txt`, data, (err) => {
    if (err) {
      reject(err);
    } else resolve(`tabla_${base}.txt`.green);
  });
});

const mostrarArchivoCreado = (base) => {
  let data = '';

  for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${i * base}\n`;
  }

  return data;
};

// Exportando funciones del modulo
module.exports = {
  crearArchivo,
  mostrarArchivoCreado,
};
