const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p3] = personajes;

console.log(p3)

const useState = ( valor ) => {
    return [ valor, () => { console.log('hola mundo')}];
}

const [ nombre, setNombre ] = useState('Jesus');

console.log(nombre);
setNombre();