/* Третье задание */

function func() {
    var a = +prompt('Пожалуйста, введите число A');
    var b = +prompt('Пожалуйста, введите число B:');

    if ( (isNaN(a)) || (isNaN(b)) ) {
        alert ('Одно или более из введённых значений не является числом');
        return 0;
    }

    if ( (a >= 0) && (b >= 0) ) {
        alert ('Разность чисел a и b: ' + (a - b));
    } else if ( (a < 0) && (b < 0) ) {
        alert ('Произведение чисел a и b: ' + (a * b));
    } else {
        alert ('Сумма a и b: ' + (a + b));
    }
    return 0;
}

func();

/* /Третье задание */

/* Четвёртое задание */

function cout() {
    var a = 8;
    var a_string = '';
    switch(a) {
        // case 8:
        // for (var i = a; i <= 15; i++) {
        //     a_string += ' ' + i + ' ';
        // }
        // alert(a_string);
        // break;
        default:
        for (var i = a; i <= 15; i++) {
            a_string += ' ' + i + ' ';
        }
        alert(a_string);
    }
}

cout();

/* /Четвёртое задание */

/* Пятое задание */

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// alert (addition(5, 11));
// alert (subtraction(5, 10));
// alert (multiplication(4, 7));
// alert (division(18, 9));

/* /Пятое задание */

/* Шестое задание */

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'addition':
        return addition(arg1, arg2);
        break;
        case 'subtraction':
        return subtraction(arg1, arg2);
        case 'multiplication':
        return multiplication(arg1, arg2);
        case 'division':
        return division(arg1, arg2);
        default:
        return mathOperation(arg1, arg2, prompt('Неправильно указано название операции, пожалуйста, попробуйте указать операцию ещё раз ещё раз')); 
    }
}

var arg1 = +prompt('Пожалуйста, введите значение первого аргумента');
var arg2 = +prompt('Пожалуйста, введите значение второго аргумента');
var operation = prompt('Пожалуйста, введите названице операции');

alert(mathOperation(arg1, arg2, operation));

/* /Шестое задание */

/* Седьмое задание */

function power(val, pow) {
    if (pow == 1) {
        return val;
    }
    return (val * power(val, (pow-1)));
}

alert (power(6, 0));

/* /Седьмое задание */