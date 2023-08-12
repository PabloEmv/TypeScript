;(() => {
  // never significa que nuestra función no debe terminar de forma exitosa
  const error: never = (message) => {
    throw new Error(message)
  }

  error('aaaaaaaaaa')

  // esta parte del código no se ejecutará
  console.log('hello world')
})()
