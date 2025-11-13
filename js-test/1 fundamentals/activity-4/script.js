"use strict"

let valueDiscount, valueFinal;

let value = prompt("Say the value:");
let discount = prompt("Say the discount in percent:");

valueDiscount = value*(discount/100)
valueFinal = value - valueDiscount

alert(`The original value is $${value}, the discount is ${discount}% and the final value is $${valueFinal}`);
