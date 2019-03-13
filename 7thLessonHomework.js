var pants = {
    name: 'Штаны',
    price: 40,
    quantity: 0,
    picture: 'https://oldskull.com.ua/image/cache/catalog/data/tur/cargo/Apache/apach-black2-800x800.jpg',
    id: 0
},
    socks = {
        name: 'Носки',
        price: 5,
        quantity: 0,
        picture: 'https://mega.ru/online/upload/admitad/597/59738b00e93f9e29cbb832eb91270bb4.jpg',
        id: 1
    },
    t_shirt = {
        name: 'Футболка',
        price: 15,
        quantity: 0,
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJTdkKjLSelgkmJJMKJ2-rB9Wfnclp-27n-7lqNlnYj94iuR9L',
        id: 2
    }

var cart = [pants, socks, t_shirt];

var $cart = document.getElementById('cart');

var $cart_content = $cart.appendChild(document.createElement('details'));
$cart_content.classList.add('cart_content');
$cart_content.appendChild(document.createElement('summary'));
$cart_content.querySelector('summary').textContent = 'Состав корзины';
var $cartInner_summary = $cart_content.appendChild(document.createElement('h4'));
var $cartInner_products = $cart_content.appendChild(document.createElement('div'));
var $cart_content_buttonNext = $cart_content.appendChild(document.createElement('button'));
$cart_content_buttonNext.textContent = 'Далее';

var $cart_shippingAddress = $cart.appendChild(document.createElement('details'));
$cart_shippingAddress.classList.add('cart_shippingAddress');
$cart_shippingAddress.appendChild(document.createElement('summary'));
$cart_shippingAddress.querySelector('summary').textContent = 'Адрес доставки';
var $cart_shippingAddress_buttonNext = $cart_shippingAddress.appendChild(document.createElement('button'));
$cart_shippingAddress_buttonNext.textContent = 'Далее';

var $cart_commentary = $cart.appendChild(document.createElement('details'));
$cart_commentary.classList.add('cart_commentary');
$cart_commentary.appendChild(document.createElement('summary'));
$cart_commentary.querySelector('summary').textContent = 'Комментарий к заказу [покупателя]';
var $cart_commentary_buttonNext = $cart_commentary.appendChild(document.createElement('button'));
$cart_commentary_buttonNext.textContent = 'Далее';

// ИНФОРМАЦИЯ О НАПОЛНЕННОСТИ КОРЗИНЫ

function cart_printTotal(cart) { // Функция, которая выводит информацию о наполненности корзины в HTML
    $cartInner_summary.innerHTML = '';

    var sum = 0; 
    var count = 0;
    for (var i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].quantity;
        count += cart[i].quantity;
    }

    if (count == 0) {
        $cartInner_summary.textContent = 'Корзина пуста';
    } else {
        $cartInner_summary.textContent = 'Всего товаров в корзине: ' + count + '; \nСумма: ' + sum + '.';
    }

    $cartInner_products.innerHTML = '';

    for (var i = 0; i < cart.length; i++) {
        if (cart[i].quantity > 0) {
            var $cartInner_products_name = $cartInner_products.appendChild(document.createElement('h5'));
            $cartInner_products_name.textContent = 'Название товара: ' + cart[i].name;

            var $cartInner_products_price = $cartInner_products.appendChild(document.createElement('p'));
            $cartInner_products_price.textContent = 'Цена одной единицы товара: ' + cart[i].price + '; Количество: ' + cart[i].quantity;

            var $cartInner_products_sum = $cartInner_products.appendChild(document.createElement('p'));
            $cartInner_products_sum.textContent = 'Общая стоимость товаров [этого типа]: ' + (cart[i].price * cart[i].quantity)  + '\nНиже должна быть уменьшенная копия фото товара';

            var $cartInner_products_pic = $cartInner_products.appendChild(document.createElement('img'));
            $cartInner_products_pic.src = cart[i].picture;
            $cartInner_products_pic.alt = 'Здесь должна быть уменьшенная копия' + '\n' + cart[i].name;
        }
    }
    
    
}

cart_printTotal(cart);

// /ИНФОРМАЦИЯ О НАПОЛНЕННОСТИ КОРЗИНЫ


// СОЗДАНИЕ КАТАЛОГА ИЗ МАССИВА С ТОВАРАМИ

var products = [pants, socks, t_shirt];

var $catalogue = document.getElementById('catalogue');

function buildCatalogue(products) { // Функция, выводящая информацию о продуктах в HTML
    for (var i = 0; i < products.length; i++) {
        var $productWrap = document.createElement('div');
        $productWrap.classList.add('product_wrap');
        $productWrap.id = products[i].id;
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
        $productAddButton.classList.add('product_addToCartButton');
        $productAddButton.textContent = 'Добавить в корзину'; 
        $productWrap.appendChild($productAddButton);

        var $productRemoveButton = document.createElement('button');
        $productRemoveButton.classList.add('product_removeToCartButton');
        $productRemoveButton.textContent = 'Удалить из корзины'; 
        $productWrap.appendChild($productRemoveButton);
    }
}

buildCatalogue(products);

// /СОЗДАНИЕ КАТАЛОГА ИЗ МАССИВА С ТОВАРАМИ

$catalogue.addEventListener('click', handleAddToCart_button);

function handleAddToCart_button() { // Искомая функция ()
    if (event.target.tagName === 'BUTTON') { // если нажали на кнопку

        var currentProduct_id = +event.target.parentNode.id; //id текущего продукта - id кнопки, на которую нажимаем

        if (event.target.classList.contains('product_addToCartButton')) {
            for (var i = 0; i < cart.length; i++) {
                if (products[currentProduct_id].name == cart[i].name) {
                    cart[i].quantity += 1; // увеличиваем количество выбранного товара на 1
                }
            }
        } else if (event.target.classList.contains('product_removeToCartButton') && (products[currentProduct_id].quantity > 0)) {
            for (var i = 0; i < cart.length; i++) {
                if (products[currentProduct_id].name == cart[i].name) {
                    cart[i].quantity -= 1; // уменьшаем количество выбранного товара на 1
                }
            }
        }

        

        cart_printTotal(cart); // выводим информацию на страницу
    }
}

$catalogue.addEventListener('click', modalShow);

var $modalContainer = document.getElementById('modal');

var $modalContent = $modalContainer.appendChild(document.createElement('div'));
$modalContent.classList.add('modalContent');

function modalShow() {
    var currentProduct_id = event.target.parentNode.id; //id текущего продукта

    var currentProductPic = products[currentProduct_id].picture;
    var currentProductName = products[currentProduct_id].name;

    if (event.target.tagName === 'IMG') {
        $modalContainer.classList.add('modal_fixed');
        $modalContent.innerHTML = '<img src=' + '\"' +  currentProductPic  + '\"' + 'alt=\"' + currentProductName + '\">';
    }
}

document.body.addEventListener('click', modalHide);
function modalHide() {
    if (event.target == $modalContainer) {
        $modalContainer.classList.remove('modal_fixed');
    }
}


////////////


// ПЕРВОЕ ЗАДАНИЕ 

$cart.addEventListener('click', showNextSection);

function showNextSection() {
    if (event.target.tagName === 'BUTTON') {
        for (var i = 0; i < $cart.children.length - 1; i++) {
            if (event.target == $cart.children[i].querySelector('button')) {
                event.target.parentNode.removeAttribute('open');
                $cart.children[i + 1].setAttribute('open', 'open');
            }
        }
    }
}