;(() => {
  // patron singleton
  class Apocalipsis {
    static instance: Apocalipsis

    // el constructor privado solo puede ser llamado dentro de la misma clase
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis.. el único')
      }
      return Apocalipsis.instance
    }
  }

  // no estamos creando una instancia sino llamando a la clase como tal
  // todos apuntan a la misma instancia
  const apocalipsis1 = Apocalipsis.callApocalipsis()
  const apocalipsis2 = Apocalipsis.callApocalipsis()
  const apocalipsis3 = Apocalipsis.callApocalipsis()

  console.log(apocalipsis1, apocalipsis2, apocalipsis3)
})()
