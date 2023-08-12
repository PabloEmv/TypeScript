;(() => {
  let avengers = 10
  console.log(avengers)

  let villians: number = 20

  if (avengers < villians) {
    console.log('de picnic')
  } else {
    console.log('salva3')
  }

  avengers = Number('123')
  let avengers2 = Number('123A')

  console.log({ avengers })
  console.log({ avengers2 })
})()
