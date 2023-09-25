import { Hero } from './classes/Hero';
// import { Hero as SuperHero, Hero2 } from './classes/Hero';
// import * as HeroClasses from './classes/Hero';

// const ironman = new SuperHero('Ironman', 1, 55); //* type Hero, not SuperHero (its just an alias)
const ironman = new Hero('Ironman', 1, 55);

console.log( ironman );
console.log( ironman.power );