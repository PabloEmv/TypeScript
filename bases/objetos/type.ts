;(() => {
  type Hero = {
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
