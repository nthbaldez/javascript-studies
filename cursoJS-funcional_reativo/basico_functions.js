//Function Declaration

function bomDia() {
    console.log('Bom dia!');
}

//Function Expression

const boaTarde = function () {
    console.log('Boa Tarde!');
}

//boaTarde();

// 1) Chamar uma função a partir de uma função

function executaQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn();
    }
}

executaQualquerCoisa(3);
//executaQualquerCoisa(bomDia);
//executaQualquerCoisa(boaTarde);

// 2) Retornar uma função a partir de outra função

function potencia(base) {
    return function (exp) {
        return Math.pow(base, exp);
    }
}


const potenciaDe2 = potencia(2);
//console.log(potenciaDe2(8));

// Desafio #1

function calcular(x) {
    return function (y) {
        return function (fn) {
            return fn(x, y);
        }
    }
}

function mult(a, b) {
    return a * b;
}

function subtr(a, b) {
    return a - b;
}

function somar(a, b) {
    return a + b;
}

const result = calcular(2)(6)(somar);
//console.log(result);


