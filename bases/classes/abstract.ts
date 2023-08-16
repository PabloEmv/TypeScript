;(() => {
  // las clases abstractas nos sirven para crear otras clases, o para asegurarnos que otras clases implementen lo que esperamos
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }
  class Xmen extends Mutante {
    salvarMundo() {
      return 'Mundo Salvado'
    }
  }
  class Villian extends Mutante {
    consquistarMundo() {
      return 'Mundo Conquistado'
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan')
  const magneto = new Villian('Magneto', 'Magnus')

  console.log(wolverine)
  console.log(wolverine.salvarMundo())

  console.log(magneto)
  console.log(magneto.consquistarMundo())

  const printName = (character: Mutante) => {
    console.log(character.realName)
  }

  printName(wolverine)
})()
