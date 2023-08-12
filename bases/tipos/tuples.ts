;(() => {
  // con esto especificamos que el primer valor siempre va a ser un string y el segundo un número
  const hero: [string, number, boolean] = ['Dr Strange', 100, false]

  // typescript nos da error ya que en la tupla ya especificamos que el primer valor es un string
  hero[0] = 10

  // de la misma forma el segundo valor es de tipo numero
  hero[1] = 'hola'

  console.log(hero)

  // esto si es aceptado por typescript, cabe destacar que lo anterior igualmente lo ejecutaría javascript, typescript solo nos sirve para identificar estos errores
  hero[0] = 'Spiderman'
  hero[1] = 200
  console.log(hero)
})()
