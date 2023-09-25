import { Pokemon } from './decorators/pokemon-class';



const charmander = new Pokemon('Charmander');

(Pokemon.prototype as any).customName = 'Pikachu'; //* Nope

console.log(charmander.savePokemonToDB(50));
charmander.savePokemonToDB(10);

charmander.publicApi = 'https://fernando-herrera.com'; //* Nope
console.log( charmander )



