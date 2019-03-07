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
        picture: 'data:image/jpeg;base64,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',
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