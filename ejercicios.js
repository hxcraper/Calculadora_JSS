/*

// ejercicio 1 agregar iva a un producto

let precio = 200;

let iva = 21;

let total = precio + (precio*21/100);

console.log("El total a pagar es: " + total);

// ejercicio 2 sacar el area y perimetro de un cuadrado

let lado = 40;
let area = lado * lado;
let perimetro = lado * 4;
console.log("Lado del cuadrado: 40");
console.log("El area del cuadrado es: " + area + " y el perimetro es: " + perimetro);

// ejercicio 3: saludar y interactuar con el usuario

let nombre = prompt("Ingresa tu nombre");
let saludo = ("Buenas tardes, " + nombre);
alert(saludo);

*/

/*
// ejercicio 4 sacar la media de 3 numeros
function media (n1, n2, n3){
    let resultado = (n1 + n2 + n3)/3;
    return resultado
};

let n1 = prompt('Ingresa un numero')
let n2 = prompt('Ingresa otro numero')
let n3 = prompt('Ingresa otro numero')

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

alert("La media de los numeros ingresados es: " + media(n1,n2,n3));
*/

// ejercicio 5 kilometros recorridos y litros consumidos

/*
function consumoCombistible(km, lt){
    resultado = lt / km;
    return resultado
};

let lt = prompt("Ingrese litros consumidos");
let km = prompt("Ingrese los kilometros recorridos");

lt = parseFloat(lt);
km = parseFloat(km);

alert("El combustible consumido por el coche fue de: " + consumoCombistible(km,lt) + " litros");
*/

/*
function horasSegundos(hora){
    resultado = (hora * 60 * 60)
    return resultado
};

function minutosSegundos(minutos){
    resultado = (minutos*60)
    return resultado
};

let hora = prompt("Ingrese Hora"); let minutos = prompt("Ingrese minutos");

hora = parseInt(hora);
minutos = parseInt(minutos);

document.write("Hora ingresada: " + hora + " En segundos: " + horasSegundos(hora));
document.write("<br>")
document.write("<br>")
document.write("Minutos ingresados: " + minutos + " En segundos: " + minutosSegundos(minutos));

*/

let numero1 = prompt("Ingrese un numero: ");

function unidades(numero1){
    let op1 = numero1 % 10
    return op1
};

function decenas(numero1){
    let op1 = numero1 / 10  
    return op1
};

numero1 = parseInt(numero1);

document.write("Decenas" + decenas(numero1));
document.write("Unidades: " + unidades(numero1));










