// Números

var idade = 20;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
// precisão para até 15 digitos

console.log(idade, gols, pi, exp);

// Operadores Aritméticos

var soma = 100 + 50; // 150
var subtração = 100 - 50; // 50
var multiplicacao = 100 * 50; // 5000
var divisao = 100 / 2; // 50
var exponente = 2 ** 4; // 16
var modulo = 14 % 5; // 4
var total = 15 + (3 * 4) / 2;
// lembrando que some "+" em Strings é para concatenar

console.log(soma, subtração, multiplicacao, divisao, exponente, modulo, total);

// Operadores Aritméticos (Strings)

var soma1 = '100' + 50; // 10050
var subtração1 = '100' - 50; // 50
var multiplicacao1 = '100' * '2'; // 200
var divisao1 = 'comprei 10' / 2; // NAN (Not A Number)

console.log(isNaN(divisao1));

// NAN = NOT A NUMBER

var numero = 80;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

console.log(numero, unidade, peso, pesoPorDois);

// A ORDEM IMPORTA
// Começa por multiplicação e divisão, depois por soma e subtração.

var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = (20 / 2) * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
// Parênteses é usado para priorizar uma expressão

console.log(total1, total2, total3, total4);

var soma2 = 47 + 51 + (78 * 3) / 8 + 4;
console.log(soma2);

// OPERADORES ARITMÉTICOS UNÁRIOS

var i = 5;
console.log(i++); // 5
console.log(i); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
// mesma coisa para o decremento --x

// OPERADORES ARITMÉTICOS UNÁRIOS
// O + e - tenta transformar o valor seguinte em número

var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '20';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// O - antes de um número torna ele negativo
