;(() => {
  // interfaces y tipos son casi iguales, con la diferencia que con las clases se puede extender de ellas y en los tipos no
  interface Hero {
    name: string
    age?: number
    powers: string[]
    getName?: () => string
  }
  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['super velocidad', 'viajar en el tiempo'],
  }

  let superman: Hero = {
    name: 'Clark Ken',
    age: 60,
    powers: ['super fuerza'],
    getName() {
      return this.name
    },
  }
})()
