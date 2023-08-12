;(() => {
  const batman: string = 'Batman'
  const linternaVerde: string = 'Linterna Verde'
  const volcanNegro: string = `Héroe: Volcán Negro`

  // typescript nos permite el autocompletado de los métodos
  console.log(`I'm ${batman}`)
  console.log(batman.toUpperCase())

  // en este caso nos da un error ya que batman tiene menos de 10 caracteres
  // agregando el símbolo ? nos arregla el error, ya que si no existe lo que se está pidiendo devuelve undefined
  console.log(batman[10]?.toUpperCase() || 'No está presente')
})()
