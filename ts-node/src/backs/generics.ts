import { Hero as SuperHero } from '../classes/Hero'
import powers from '../data/powers'
import {
  genericFunction,
  genericFunctionArrow,
  printObject,
} from '../generics/generics'
import { Hero, Villain } from '../interfaces'

const ironman = new SuperHero('Ironman', 1, 55)

// console.log(ironman)
// console.log(powers)

printObject(123)
printObject(new Date())
printObject({ a: 1, b: 2, c: 3 })
printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
printObject('Hello world')

console.log(genericFunction(3.141618).toFixed(2))
console.log(genericFunction('hola mundo').toUpperCase())

console.log(genericFunctionArrow(3.141618).toFixed(2))
console.log(genericFunctionArrow('hola mundo').toUpperCase())

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
}

// console.log(genericFunctionArrow<Hero>(deadpool).realName)

// console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel)
