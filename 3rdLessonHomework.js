/* Первое задание */

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2) {
        return true;
    }

    var i = 2;
    while (i < num) {

        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}

for (var i = 2; i < 1000; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

// Просто нужно было делать не массивом, ха. Перебор неправильно реализовывал.


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

for (var i = 0; i < 10; alert(i++));

/* /Третье задание */

/* Четвёртое задание */

var str = '';
for (var i = 1; i <= 20; i++) {
    str += '*';
    console.log(str);
}

/* /Четвёртое задание */