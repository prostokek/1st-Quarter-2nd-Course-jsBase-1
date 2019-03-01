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
            $rowCell_odd.textContent =  'auto';
        }
        if (i % 2 != 0) {
            var $rowCell_even = document.createElement('div');
            $rowCell_even.classList.add('cell_even');
            $row_even.appendChild($rowCell_even);
            $rowCell_even.textContent =  'auto';
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

// Я не понял, как буквы при помощи кодировки вставлять именно при помощи того, что мы проходили на этом уроке (соответственно, вопрошаю, есть ли такая возможность)

$nav_digits = document.createElement('div');
$nav_digits.classList.add('nav_digits');

for (var i = 1; i <= 8; i++) {
    var $nav_digit = document.createElement('span');
    $nav_digit.textContent = i;
    $nav_digits.appendChild($nav_digit);
}

document.getElementById('board_container').appendChild($nav_digits);

