// СОЗДАНИЕ ТАБЛИЦЫ (...)

var $board = document.createElement('div');
$board.id = 'board';

for (var i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        var $row_odd = document.createElement('div');
        $row_odd.classList.add('row_odd');

        if (i == 0) {
            $row_odd.classList.add('whiteFigures');
        }
        if (i == 6) {
            $row_even.classList.add('blackFigures');
        }
        $board.appendChild($row_odd);
    }
    if (i % 2 != 0) {
        var $row_even = document.createElement('div');
        $row_even.classList.add('row_even');

        if (i == 1) {
            $row_even.classList.add('whiteFigures');
        }
        if (i == 7) {
            $row_even.classList.add('blackFigures');
        }

        $board.appendChild($row_even);
    }



    for (var z = 0; z < 8; z++) {
        if (i % 2 == 0) {
            var $rowCell_odd = document.createElement('div');
            $rowCell_odd.classList.add('cell_odd');
            $row_odd.appendChild($rowCell_odd);
            $rowCell_odd.textContent = 'auto';
        }
        if (i % 2 != 0) {
            var $rowCell_even = document.createElement('div');
            $rowCell_even.classList.add('cell_even');
            $row_even.appendChild($rowCell_even);
            $rowCell_even.textContent = 'auto';
        }
    }
}
document.getElementById('board_container').appendChild($board);

// СОЗДАНИЕ ТАБЛИЦЫ (...)



// ЗАКРАШИВАНИЕ

var $rowCells_odd = document.getElementsByClassName('cell_odd'); // Получаем коллекцию ячеек нечётных строк
var $rowCells_even = document.getElementsByClassName('cell_even'); // Получаем коллекцию ячеек чётных строк

for (var i = 0; i < $rowCells_odd.length; i++) { // Проходим по каждой ячейке нечётных строк
    if (i % 2 != 0) { // Если ячейка чётная (нумерация в коллекции же с 0 начинается, помним)
        $rowCells_odd[i].classList.add('black'); // Закрашиваем её
    }
}

for (var i = 0; i < $rowCells_even.length; i++) { // Проходим по каждой ячейке чётных строк
    if (i % 2 == 0) { // Если ячейка нечётная (нумерация в коллекции же с 0 начинается, помним)
        $rowCells_even[i].classList.add('black'); // Закрашиваем её
    }
}

// /ЗАКРАШИВАНИЕ

// НАВИГАЦИЯ 

// <nav>

$nav_digits = document.createElement('div');
$nav_digits.classList.add('nav_digits');

for (var i = 1; i <= 8; i++) {
    var $nav_digit = document.createElement('span');
    $nav_digit.textContent = i;
    $nav_digits.appendChild($nav_digit);
}

document.getElementById('board_container').appendChild($nav_digits);

document.getElementById('board_container').appendChild($nav_digits);



// cart

var pants = {
    name: 'Штаны',
    price: 40,
    quantity: 1,
    // count: countProductPrice
},
    socks = {
        name: 'Носки',
        price: 5,
        quantity: 5,
        // count: countProductPrice
    },
    t_shirt = {
        name: 'Футболка',
        price: 15,
        quantity: 2,
        // count: countProductPrice
    }

var cart = [pants, socks, t_shirt];

function cart_printTotal(cart) {
    var sum = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].quantity;
    }

    var count = 0;
    for (var i = 0; i < cart.length; i++) {
        count += cart[i].quantity;
    }

    var cart_total = [sum, count];

    var $cart_text = document.createElement('p');
    $cart_text.classList.add('cart_text'); //
    if (count == 0) {
        $cart_text.textContent = 'Корзина пуста';
    } else {
        $cart_text.textContent = 'Всего товаров в корзине: ' + cart_total[1] + '; \nСумма: ' + cart_total[0] + '.';
    }
    document.getElementById('cart').appendChild($cart_text);

    return cart_total;
}

console.log(cart_printTotal(cart));

// var $cart_text = document.createElement('p');
// $cart_text.classList.add('cart_text'); //
// if (cart_printTotal(cart) == false) {
//     $cart_text.textContent = 'Корзина пуста';
// } else {
//     $cart_text.textContent = 'Всего товаров в корзине: ' + cart_printTotal(cart)[1] + '; \nСумма: ' + cart_printTotal(cart)[0] + '.';
// }

// document.getElementById('cart').appendChild($cart_text);


// /cart

var pants = {
    name: 'Штаны',
    price: 40,
    // picture: 'source'
    // count: countProductPrice
},
    socks = {
        name: 'Носки',
        price: 5,
        // picture: 'source'
        // count: countProductPrice
    },
    t_shirt = {
        name: 'Футболка',
        price: 15,
        // picture: 'source'
        // count: countProductPrice
    }

var products = [pants, socks, t_shirt];

var $catalogue = document.getElementById('catalogue');

function buildCatalogue(products) {
    for (var i = 0; i < products.length; i++) {
    var $productWrap = document.createElement('div');
    $productWrap.classList.add('product_wrap');
    $catalogue.appendChild($productWrap);

    var $productName = document.createElement('h4');
    $productName.classList.add('product_name');
    $productName.textContent = products[i].name;
    $productWrap.appendChild($productName);

    var $productPrice = document.createElement('p');
    $productPrice.classList.add('product_price');
    $productPrice.textContent = 'Цена - ' + products[i].price + 'рублей.';
    $productWrap.appendChild($productPrice);

    var $productPic = document.createElement('img');
    $productPic.classList.add('product_pic');
    $productPic.src = products[i].picture;
    $productWrap.appendChild($productPic);

    console.log($productName);
    }
    
    // return $productWrap;
    return 0;
}

// console.log(buildCatalogue(products));
buildCatalogue(products);
=======

