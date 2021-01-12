const saludar = (nombre) =>  {
  return `hola ${nombre}`;
}

console.log(saludar('Jesus'));


const getUsuarioActivo = (nombre) => ({
  uuid: 'ABC567',
  usename: nombre,
});

const usuarioActivo = getUsuarioActivo('Jesus');

console.log(usuarioActivo.usename);