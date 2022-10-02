const MultipleOfThree = function (x) {
  if (x % 3 === 0) console.log(x + "!!!!!!!")
  else console.log(x)
}

for (let x = 1; x < 25; x++) {
  MultipleOfThree(x)
}
