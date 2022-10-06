let operandoA
let operandoB
let operacion

const init =() =>{
    let result = document.getElementById("result")
    let reset = document.getElementById('reset')
    let suma = document.getElementById("suma")
    let resta = document.getElementById("resta")
    let multiplicacion= document.getElementById("multiplicacion")
    let division= document.getElementById("division")
    let one= document.getElementById('one')
    let two= document.getElementById("two")
    let three= document.getElementById("three")
    let four= document.getElementById("four")
    let five= document.getElementById("five")
    let six= document.getElementById("six")
    let seven= document.getElementById("seven")
    let eight= document.getElementById("eight")
    let nine= document.getElementById("nine")
    let zero= document.getElementById("zero")


one.onclik = function(){
    result.textContent = result.textContent + "1"
}
two.onclik = function(){
    result.textContent = result.textContent + "2"
}
three.onclik = function(){
    result.textContent = result.textContent + "3"
}
four.onclik = function(){
    result.textContent = result.textContent + "4"
}
five.onclik = function(){
    result.textContent = result.textContent + "5"
}
six.onclik = function(){
    result.textContent = result.textContent + "6"
}
seven.onclik = function(){
    result.textContent = result.textContent + "7"
}
eight.onclik = function(){
    result.textContent = result.textContent + "8"
}
nine.onclik = function(){
    result.textContent = result.textContent + "9"
}
zero.onclik = function(){
    result.textContent = result.textContent + '0'
}

reset.onclik = function(){
    resetear()
}
suma.onclik = function(){
    operandoA = result.textContent
    operacion = "+"
    limpiar()
}
resta.onclik = function(){
    operandoA = result.textContent
    operacion = "-"
    limpiar()
}
multiplicacion.onclik = function(){
    operandoA = result.textContent
    operacion = "*"
    limpiar()
}
division.onclik = function(e){
    operandoA = result.textContent
    operacion = "/"
    limpiar()
}

igual.onclik = function(e){
    operandoB = result.textContent
    operacion = "="
    resolver()
}

function limpiar(){
    result.textContent = ""
}
function resetear(){
    result.textContent = ""
    operandoA = 0
    operandoB = 0
    operacion = ""
}

function resolver(){
    let res = 0
    switch(operacion){
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB)
            break;
        case "-":
            res = parseFloat(operandoA) - parseFloat(operandoB)
            break;
            case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB)
            break;
        case "*":
            res = parseFloat(operandoA) * parseFloat(operandoB)
            break;
        case "/":
            res = parseFloat(operandoA) / parseFloat(operandoB)
            break;
    }
    resetear()
        result.textContent = res
}

}