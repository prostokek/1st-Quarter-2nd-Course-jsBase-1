/*

function buildQuestion() { // Функция создающая основной текст вопроса
    var text = this.text + '[Цена вопроса: ' +  this.prize + '] '; // Текст, который будет видеть пользователь
    for(var i = 0; i < this.options.length; i++) { // Проходим по всем вариантам ответов
      text += '\n' + (i + 1) + ') ' + this.options[i]; // И показываем их пользователю
    }
  
    if(this.fixed) {
      text += '\n' + 'НЕСГОРАЕМАЯ сумма!'; // Уведомляем о несгораемой сумме (если она такова)
    }
  
    return text; // Выводим текст
  }
  
  var questions = [ // Создаём массив с вопросами (объектами)
    {
      text: '\'Висит груша - нельзя скушать!\' ', // Текст вопроса
      options: ['Лампочка', 'Кактус', 'Яблоко', 'Ваза'], // Варианты ответа
      correct: 0, // Номер правильного ответа
      prize: 100, // Приз
      fixed: false, // Фиксируется ли сумма
      getText: buildQuestion // Функция постановки вопроса перед пользователем (её мы будем вызывать из каждого объекта)
    },
    {
      text: '\'Висит груша - нельзя скушать!\' ',
      options: ['Лампочка', 'Кактус', 'Яблоко', 'Ваза'],
      correct: 1,
      prize: 500,
      fixed: false,
      getText: buildQuestion
    },
    {
      text: '\'Висит груша - нельзя скушать!\' ',
      options: ['Лампочка', 'Кактус', 'Яблоко', 'Ваза'],
      correct: 2,
      prize: 1000,
      fixed: false,
      getText: buildQuestion
    },
    {
      text: '\'Висит груша - нельзя скушать!\' ',
      options: ['Лампочка', 'Кактус', 'Яблоко', 'Ваза'],
      correct: 3,
      prize: 5000,
      fixed: true,
      getText: buildQuestion
    },
    {
      text: '\'Висит груша - нельзя скушать!\' ',
      options: ['Лампочка', 'Кактус', 'Яблоко', 'Ваза'],
      correct: 0,
      prize: 50000,
      fixed: false,
      getText: buildQuestion
    },
    {
      text: '\'Висит груша - нельзя скушать!\' ',
      options: ['Лампочка', 'Кактус', 'Яблоко', 'Ваза'],
      correct: 1,
      prize: 100000,
      fixed: true,
      getText: buildQuestion
    },
    {
      text: '\'Висит груша - нельзя скушать!\' ',
      options: ['Лампочка', 'Кактус', 'Яблоко', 'Ваза'],
      correct: 2,
      prize: 500000,
      fixed: false,
      getText: buildQuestion
    },
    {
      text: '\'Висит груша - нельзя скушать!\' ',
      options: ['Лампочка', 'Кактус', 'Яблоко', 'Ваза'],
      correct: 3,
      prize: 1000000,
      fixed: false,
      getText: buildQuestion
    }
  ];
  
  var prize = 0;
  for(var i = 0; i < questions.length; i++) {
    var questionText = 'Вопрос №' + (i + 1) + ' - ' + questions[i].getText(); // Готовый текст для пользователя (вызываем функцию из каждого объекта)
  
    if(+prompt(questionText) === (questions[i].correct + 1)) { // Если пользователь введёт правильный номер варианта ответа
      alert('Текущий выигрыш: ' + questions[i].prize); // то
      prize = questions[i].prize; // Приз = собственно, призу за этот вопрос
    } else { // Иначе (в случае ошибки пользователя)
      prize = 0; // Приз равен нулю (на случай если пользователь не дошёл до несгораемой суммы)
      alert('Вы проиграли'); // Сообщение о конце игры
      for(var j = i; j >= 0; j--) { // Перебор всех элементов массива [вопросов] в обратном порядке (от того, на котором остановился пользователь)
        if(questions[j].fixed) { // Если наткнётся на несгораемую сумму
          prize = questions[j].prize; // Призом будет эта самая сумма
          break; // Прервём цикл (а зачем ему дальше перебирать-то, да ещё и уменьшать приз?)
        }
      }
      break; // Дабы вопросы не задавались после ошибки (даже если пользователь не дошёл до первой несгораемой)
    }
  }
  
  alert('Ваш выигрыш составил: ' + prize); 

*/



// Первое задание

function transform(num) {
    var object = {};
    if (num > 999 || num < 0) {
        alert('Вы ввели неподходящее число');
        console.log('Вы ввели неподходящее число');
        return object;
    }

    object = {
        hundreds: Math.floor(num / 100),
        dozens: Math.floor((num % 100) / 10),
        units: (num % 10)
    }

    return object;
}

console.log(transform(821));

console.log(transform(7614));

// /Первое задание



// Второе задание

// var product = {
//     name: '',
//     price: 0,
//     quantity: 1,
//     count: countProductPrice
// }

// var pants = Object.create(product), socks = Object.create(product), t_shirt = Object.create(product);

// А это я хотел их стандартизировать в надежде, что не придётся каждому указывать количество, например, если оно = 1, однако функция отказалась брать значения из прототипа


function countCartPrice(cart) {
    var cartPrice = 0;

    for (var i = 0; i  < cart.length; i++) {
        cartPrice += cart[i].count();
    }

    return cartPrice;
}


function countProductPrice() {
    return this.price * this.quantity;
}


var pants = {
    name: 'Штаны',
    price: 40,
    quantity: 1,
    count: countProductPrice
},
socks = {
    name: 'Носки',
    price: 5,
    quantity: 5,
    count: countProductPrice
},
t_shirt = {
    name: 'Футболка',
    price: 15,
    quantity: 2,
    count: countProductPrice
}

var cart = [pants, socks, t_shirt];

alert('Стоимость всего содержимого корзины: ' + countCartPrice(cart));
console.log('Стоимость всего содержимого корзины: ' + countCartPrice(cart));

// /Второе задание



// Третье задание

var cartPrice = countCartPrice(cart);

var cartCount = 0; // Количество товаров [единиц, не наименований] в корзине
for (var i = 0; i < cart.length; i++) {
    cartCount += cart[i].quantity;
}

var catalogue_cart = {
    cartCount: cartCount,
    cartPrice: cartPrice
}; // Объектом это сделано "на будущее" и из-за темы урока //

console.log(catalogue_cart);
alert('Товаров [единиц, не наименований] в корзине: ' + catalogue_cart.cartCount + '\nСтоимость всего содержимого корзины: ' + catalogue_cart.cartPrice);

// Вряд ли корректно понял вопрос. 
// У моих объектов есть имена и цены (которые можно выводить в каталоге)
// + Создал вот объект, данные из которого также можно показывать пользователю ещё пока он находится в каталоге (не только тогда)
