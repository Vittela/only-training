// Exercise 1

let a = Number(prompt("Write a number:"))
let b = Number(prompt("Write another number:"))

function min(a, b){
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

alert(min(a, b))

// Exercise 2

let x = Number(prompt("Write a number: "))
let n = Number(prompt("Write another number:"))

function pow(x, n){
    if (n === 0) { return 1 }
    
    let total = x
    
    for(i = 1; n > i; i++){
        total = x * total
    }

    return total;
}

alert(pow(x, n))
