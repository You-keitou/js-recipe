const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve,ms))
const fizzbuzz = async function () {
  if (value.value % 15 === 0) text.innerText = "FizzBuzz"
  else if (value.value % 3 === 0) text.innerText = "Fizz"
  else if (value.value % 5 === 0) text.innerText = "Buzz"
  else text.innerText = value.value
  await _sleep(2000)
  text.innerText = ""
}
const value = document.getElementById("fizz")
const text = document.getElementById("text")
value.addEventListener("change", fizzbuzz)
