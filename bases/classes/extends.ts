;(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('constructor avenger llamado')
    }
    protected getFullName() {
      return `${this.name} (${this.realName})`
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName)
    }

    getFullNameDesdeXmen() {
      console.log(super.getFullName())
    }

    get fullName() {
      return `${this.name} - (${this.realName})`
    }
    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('El nombre debe tener más de 3 letras')
      }
      this.name = name
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true)
  console.log(wolverine)
  wolverine.getFullNameDesdeXmen()
  console.log(wolverine.fullName)

  wolverine.fullName = 'Pablo'
  console.log(wolverine.fullName)
})()
