;(() => {
  type Avengers = {
    nick: string
    ironman: string
    vision: string
    activo: boolean
    poder: number
  }
  const avengers: Avengers = {
    nick: 'Samuel L Jackson',
    ironman: 'Robert Downey Jr',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.3464567,
  }

  const { poder, vision } = avengers
  console.log(poder.toFixed(2), vision)

  const printAvenger = ({ ironman, ...resto }: Avengers) => {
    console.log(ironman, resto)
  }
  printAvenger(avengers)

  const avengersArr: [string, boolean, number] = [
    'Cap América',
    true,
    120.34235,
  ]

  const [, isAvenger, power] = avengersArr
  console.log({ isAvenger, power })
})()
