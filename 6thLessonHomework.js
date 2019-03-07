// ПЕРВОЕ ЗАДАНИЕ

var cart = [];

// ИНФОРМАЦИЯ О НАПОЛНЕННОСТИ КОРЗИНЫ

function cart_printTotal(cart) { // Функция, которая выводит информацию о наполненности корзины в HTML
    document.getElementById('cart').innerHTML = '';
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
        document.getElementById('cart').appendChild($cart_text);

        return 'Корзина пуста';

    } else {
        $cart_text.textContent = 'Всего товаров в корзине: ' + cart_total[1] + '; \nСумма: ' + cart_total[0] + '.';
        document.getElementById('cart').appendChild($cart_text);

        return 'Всего товаров в корзине: ' + cart_total[1] + '; \nСумма: ' + cart_total[0] + '.';
    }

    // return cart_total;
}

console.log(cart_printTotal(cart));

// /ИНФОРМАЦИЯ О НАПОЛНЕННОСТИ КОРЗИНЫ


// СОЗДАНИЕ КАТАЛОГА ИЗ МАССИВА С ТОВАРАМИ

var pants = {
    name: 'Штаны',
    price: 40,
    quantity: 1,
    picture: 'https://oldskull.com.ua/image/cache/catalog/data/tur/cargo/Apache/apach-black2-800x800.jpg',
    id: 0
},
    socks = {
        name: 'Носки',
        price: 5,
        picture: 'https://mega.ru/online/upload/admitad/597/59738b00e93f9e29cbb832eb91270bb4.jpg',
        quantity: 1,
        id: 1
    },
    t_shirt = {
        name: 'Футболка',
        price: 15,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTdkKjLSelgkmJJMKJ2-rB9Wfnclp-27n-7lqNlnYj94iuR9L',
        quantity: 1,
        id: 2
    }

var products = [pants, socks, t_shirt];

var $catalogue = document.getElementById('catalogue');

function buildCatalogue(products) { // Функция, выводящая информацию о продуктах в HTML
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

        var $productAddButton = document.createElement('button');
        $productAddButton.classList.add('product_addButton');
        $productAddButton.id = products[i].id; // даём кнопкам id, чтобы в последствии понимать, какой продукт добавить в корзину
        $productAddButton.textContent = 'Добавить в корзину'; 
        $productWrap.appendChild($productAddButton);
    }

    return 0;
}

buildCatalogue(products);

// /СОЗДАНИЕ КАТАЛОГА ИЗ МАССИВА С ТОВАРАМИ

var $cart = document.getElementById('cart');

$catalogue.addEventListener('click', handleAddToCart_button);

function handleAddToCart_button() { // Искомая функция ()
    if (event.target.tagName === 'BUTTON') { // если нажали на кнопку

        var currentProduct_id = event.target.id; //id текущего продукта - id кнопки, на которую нажимаем

        var currentProduct = products[currentProduct_id]; // текущий продукт - продукт с текущим id
        cart.push(currentProduct); // добавляем этот самый продукт в корзину

        cart_printTotal(cart); // выводим информацию на страницу
    }
}

// function buildCartList(products) {
//     // $cart.innerHTML = '';

//             var i;
//             for (var = i; i < products.length; i++) {
//                 if (i == )
//             }
//             cart.push(products[i]);
            // for (var i = 0; i < cart.length; i++) {
            //     if (cart[i] == 'undefined') {
            //         cart.splice(i, 1);
            //     }
            // }
            // console.log(cart);

            // console.log(cart_printTotal(cart));

    // $cart.innerHTML = cart_printTotal(cart);
// }
// function buildCartList_cleaner(cart) {
//     for (var i = 0; i < cart.length; i++) {
//         if (cart[i] == 'undefined') {
//             delete cart[i];
//         }
//     }
//     return(cart);
// }
// buildCartList_cleaner(cart);
// buildCartList(cart);

// console.log(cart_printTotal(cart));

// console.log(cart_printTotal(cart));


// /ПЕРВОЕ ЗАДАНИЕ