// 7 Tipos de dados

// todos são primitivos exceto os objetos

var nome = 'Victor'; // String
var idade = 20; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol(); // Symbol
var objeto = {}; // Object

console.log(typeof objeto);

// String

// Você pode somar uma string e assim concatenar as palavras.

var nome = 'Victor';
var sobrenome = 'Ribeiro';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Pelé fez ' + gols + ' gols';
var frase1 = `Pelé fez ${gols} gols`;

console.log(frase);

var ano = 2024;
var mes = 4;

console.log(mes + '/' + ano);

var melhor = 'melhor';
var frase2 = 'Esse é o "melhor" jogo';

console.log(frase2);
