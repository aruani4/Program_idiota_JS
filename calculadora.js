const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}
const dividir = (num1, num2) => {
    return parseInt(num1) / parseInt(num2);
}

alert('que operacion desea relalizar?');
let operacion = prompt('1: sumar, 2: restar, 3: multiplicar, 4: dividir');

if (operacion == 1) {
    let numero1 = prompt('primer numero para sumar:');
    let numero2 = prompt('segundo numero para sumar:');
    let resultado = sumar(numero1, numero2);
    alert(`El resultado es: ${resultado}`);

}
else if (operacion == 2){
    let numero1 = prompt('primer numero para restar:');
    let numero2 = prompt('segundo numero para restar:');
    let resultado = restar(numero1, numero2);
    alert(`El resultado es: ${resultado}`);
}
else if (operacion == 3){
    let numero1 = prompt('primer numero para multiplicar:');
    let numero2 = prompt('segundo numero para multiplicar:');
    let resultado = multiplicar(numero1, numero2);
    alert(`El resultado es: ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt('primer numero para dividir:');
    let numero2 = prompt('segundo numero para dividir:');
    let resultado = dividir(numero1, numero2);
    alert(`El resultado es: ${resultado}`);
}
else{
    alert('no se encontro la operacion indicada')
}