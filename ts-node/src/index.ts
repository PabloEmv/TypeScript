/* import { getPokemon } from './generics/get-pokemon'

getPokemon(2)
  .then((pokemon) => console.log(pokemon.name))
  .catch((error) => console.log(error))
  .finally(() => console.log('fin de getPokemon'))
 */

import { Pokemon } from './decorators/decorators-class'

const charmander = new Pokemon('Charmander')

console.log(charmander)
