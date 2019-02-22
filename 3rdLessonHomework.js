/* Первое задание */

// var i = 1;
// var primeNumbers_array = [];
// // for (var z = 0; z <= 100; z++) {
// //     primeNumbers_array.push(z);
// // }
// // alert(primeNumbers_array);

// while (i < 100) {
//     i++;
//     for (var l = 3; l < 100; l++) {
//         if ( (i % l == 0) && (i != l) ) { // && (i % 2 != 0)
//             primeNumbers_array.push(i);
//             break;
//         }
//     }
// }
// alert(primeNumbers_array + 'hi');
// console.log(primeNumbers_array);

// var i = 1;
// var primeNumbers_array = [];

// for (var z = 0; z <= 100; z++) {
//     primeNumbers_array.push(z);
// }

// var saveArray = [];

// while (i < 100) {
//     i++;
//     for (var l = 3; l < 100; l++) {
//         if ( (i % l == 0) && (i != 1) ) {
//             saveArray.push(primeNumbers_array[i]);
//             delete primeNumbers_array[primeNumbers_array.indexOf(i)];
//             if ( (i % l != 0) && (i != 1) ) {
//                 primeNumbers_array.push(saveArray.indexOf(i));
//             }
//             // break;
//         }
//     }
// }
// alert(primeNumbers_array);


// delete primeNumbers_array[primeNumbers_array.indexOf(15)];





// var buffer = [];
// for(var z = 0; z < primeNumbers_array.length; z++) {
//     if(primeNumbers_array[z] !== undefined) {
//         buffer.push(primeNumbers_array[z]);
//     }
// }
// alert(buffer);

/* Я не в состоянии сейчас выделять на это задание неизвестное количество часов, жду разбор на лекции */

/* /Первое задание */


/* Второе задание */

function countCartPrice(cart) {
    var price = 0;
    var sums = []; // суммы по отдельным наименованиям (5 пар носков по 5 единиц будут стоить 25 единиц, именно такие значения будут храниться в данном массиве)

    for (var i = 0; i < cart.length; i++) {
        sums[i] = cart[i][1] * cart[i][2];
    }

    for (var i = 0; i < sums.length; i++) {
        price += sums[i];
    }

    return price;
}

var cart = [['Штаны', 40, 1], ['Носки', 5, 5], ['Футболка', 15, 2]];

alert(countCartPrice(cart));

/* /Второе задание */

/* Третье задание */

for(var i = 0; i < 10; alert(i++));

/* /Третье задание */

/* Четвёртое задание */

var str = '';
for(var i = 1; i <= 20; i++) {
	str += '*';
	console.log(str);
}

/* /Четвёртое задание */