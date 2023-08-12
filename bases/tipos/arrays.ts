;(() => {
  const numbers: (string | number | boolean)[] = [1, 2, 3, 4, '5', 6, 7, 8]

  numbers.push(true)
  console.log(numbers)

  const villians = ['Omega Rojo', 'Dormammu', 'Duende Verde']

  villians.forEach((villian) => console.log(villian.toUpperCase()))
})()
