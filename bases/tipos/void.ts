;(() => {
  // void significa vacío, es decir, no retorna nada
  function callBatman(): void {
    return
  }

  const callSuperman = (): void => {
    return false
  }

  const a = callBatman()
  console.log(a)
})()
