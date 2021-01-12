import { getHeroeById } from './bases/06-import-export';

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if(heroe) {
        resolve(heroe)
      }
      reject('The Hero dont exist');
    }, 2000);
  });
}

getHeroByIdAsync(1)
  .then( console.log )
  .catch( console.warn );