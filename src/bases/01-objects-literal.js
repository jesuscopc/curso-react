const persona = {
  nombre: 'Jesus',
  Apellido: 'anriquez',
  Edad: 12,
  Direccion: {
    calle: 'Lopez',
    Lat: 122.12121,
    LLng: 1222.12122222
  }
}


const persona2 = {...persona};

persona2.nombre = 'Erika'
console.log(persona)
console.log(persona2)