;(() => {
  let isHuman: boolean = true
  let isSuperMan: boolean = false
  let isBatman: boolean = isHuman ? true : false

  isSuperMan = true && false

  console.log({ isHuman })
  console.log(isSuperMan)
  console.log(isBatman)
})()
