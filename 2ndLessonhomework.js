// /* Третье задание */

// function func() {
//     var a = +prompt('Пожалуйста, введите число A');
//     var b = +prompt('Пожалуйста, введите число B:');

//     if ((isNaN(a)) || (isNaN(b))) {
//         alert('Одно или более из введённых значений не является числом');
//         return 0;
//     }

//     if ((a >= 0) && (b >= 0)) {
//         alert('Разность чисел a и b: ' + (a - b));
//     } else if ((a < 0) && (b < 0)) {
//         alert('Произведение чисел a и b: ' + (a * b));
//     } else {
//         alert('Сумма a и b: ' + (a + b));
//     }
//     return 0;
// }

// func();

// /* /Третье задание */

// /* Четвёртое задание */

// function cout() {
//     var a = 8;
//     var a_string = '';
//     switch (a) {
//         // case 8:
//         // for (var i = a; i <= 15; i++) {
//         //     a_string += ' ' + i + ' ';
//         // }
//         // alert(a_string);
//         // break;
//         default:
//             for (var i = a; i <= 15; i++) {
//                 a_string += ' ' + i + ' ';
//             }
//             alert(a_string);
//     }
// }

// cout();

// /* /Четвёртое задание */

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

function error_arguments_in() {
    alert('Одно или более из введённых значений не является числом. Пожалуйста, попробуйте ещё раз');
    var arg1 = +prompt('Пожалуйста, введите значение первого аргумента');
    var arg2 = +prompt('Пожалуйста, введите значение второго аргумента');
    var operation = prompt('Пожалуйста, введите название операции');
    var arguments_array = [arg1, arg2, operation];
    return arguments_array;
    // return arg1, arg2, operation;
}

function mathOperation(arg1, arg2, operation) {
    if ((isNaN(arg1)) || isNaN(arg2)) {
        
        var arguments_array = error_arguments_in();
        var arg1 = arguments_array[0];
        var arg2 = arguments_array[1];
        var operation = arguments_array[2];

        return mathOperation(arg1, arg2, operation);
    } else {
        switch (operation) {
            case 'addition':
                return addition(arg1, arg2);
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
}

var arg1 = +prompt('Пожалуйста, введите значение первого аргумента');
var arg2 = +prompt('Пожалуйста, введите значение второго аргумента');
var operation = prompt('Пожалуйста, введите название операции');

alert(mathOperation(arg1, arg2, operation));

/* /Шестое задание */

// /* Седьмое задание */

// function power(val, pow) {
//     if (pow == 0) {
//         if (val === 0) {
//             return 0;
//         } else {
//             return 1;
//         }
//     } else if (pow == 1) {
//         return val;
//     } else if (pow > 1) {
//         return (val * power(val, (pow - 1)));
//     } else if (pow == - 1) {
//         return 1 / val;
//     } else if (pow < 1) {
//         return ((1 / val) * power(val, (pow + 1)));
//     }
// }

// var val = +prompt('Пожалуйста, введите основание');
// var pow = +prompt('Пожалуйста, введите показатель [степени]');

// alert(pow + '-я степень числа ' + val + ' :' + power(val, pow));

// /* /Седьмое задание */