;(() => {
  interface Client {
    name: string
    age?: number
    adress: Adress
    getFullAdress(id: string): string
  }
  interface Adress {
    id: number
    zip: string
    city: string
  }
  const client: Client = {
    name: 'Pablo',
    age: 24,
    adress: {
      id: 123,
      zip: 'KY2 SUD',
      city: 'santiago',
    },
    getFullAdress(id: string) {
      return this.adress.city
    },
  }

  const client2: Client = {
    name: 'Melissa',
    age: 30,
    adress: {
      id: 1232,
      zip: 'KY2 SUD',
      city: 'santiago',
    },
    getFullAdress(id: string) {
      return this.adress.city
    },
  }
})()
