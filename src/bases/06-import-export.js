import heroes from '../data/heroes';

// console.log(owners);

export const getHeroeById = (id) => heroes.find( hero => hero.id === id );

// console.log(getHeroeById(3));

export const getHeroByOwner = (owner) => heroes.filter( (hero) => hero.owner === owner );

// console.log(getHeroByOwner('Marvel'));