const persona = {
  nombre: 'Jesus',
  edad: 29,
  clave:'ironman anime'
};

const retornaPersona = ({clave, edad, ...data}) => {
  return {
    nombreClave: clave,
    edadClave: edad,
    latLng : {
      lat: 12.343434,
      lng: 34.232333
    }
  }
}

const { nombreClave, edadClave, latLng: { lat, lng} } = retornaPersona(persona);

console.log(nombreClave);
console.log(edadClave);
console.log(lat, lng)