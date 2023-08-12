;(() => {
  let avenger: any = 123
  let exists
  let power

  avenger = 'Dr Strange'

  // no tenemos autocompletado por parte de typescript ya que avenger está definido como tipo any
  console.log(avenger.charAt(0))

  avenger = 140.23848

  console.log(avenger.toFixed(2))

  // utilizando casting podemos obtener el autocompletado
  console.log((avenger as number).toFixed(0))

  // otra forma de utilizar cast
  console.log(<number>avenger.toFixed(4))
  console.log(exists)
  console.log(power)
})()
