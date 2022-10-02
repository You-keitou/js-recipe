const fizzbuzz = function () {
  if (value.value % 15 === 0) text.innerText = "FizzBuzz"
  else if (value.value % 3 === 0) text.innerText = "Fizz"
  else if (value.value % 5 === 0) text.innerText = "Buzz"
  else text.innerText = value.value
}
const value = document.getElementById("fizz")
const text = document.getElementById("text")
value.addEventListener("change", fizzbuzz)
