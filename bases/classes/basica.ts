;(() => {
  /*
  class Avenger {
      private name: string
      private team: string
      public realName?: string
      static avgAge: number = 35

      constructor(name: string, team: string, realName?: string) {
        this.name = name
        this.realName = realName
        this.team = team
      }
    }

    const antman: Avenger = new Avenger('AntMan', 'capitan')
    console.log(antman)
    console.log(Avenger.avgAge)
  */

  // forma corta de asignar propiedades
  class Avenger {
    // que una propieades sea estática significa que podemos acceder a ella sin necesidad de crear una instancia de la clase
    static avgAge: number = 35

    constructor(
      private name: string,
      private team: string,
      public realName?: string
    ) {
      this.name = name
      this.realName = realName
      this.team = team
    }

    // si no ponemos nada el método es público por defecto
    public bio() {
      return `${this.name} (${this.team})`
    }
  }

  const spiderman: Avenger = new Avenger('SpiderMan', 'IronMan', 'Peter')
  console.log(spiderman)
  console.log(spiderman.bio())
  console.log(Avenger.avgAge)
})()
