let x = Number(prompt("Write a number and I will show you the factorial from this number :D"))

function factorial(x) {
  let total = 1

  for (i = x; i > 0; i--) {
    total *= i
    console.log(i)
  }

  return total
}

alert(factorial(x))
