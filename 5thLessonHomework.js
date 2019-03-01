// СОЗДАНИЕ ТАБЛИЦЫ (...)

var $board = document.getElementById('board');

for (var i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        var $row_odd = document.createElement('div');
        $row_odd.classList.add('row_odd');
        
        $board.appendChild($row_odd);
    }
    if (i % 2 != 0) {
        var $row_even = document.createElement('div');
        $row_even.classList.add('row_even');

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

var $nav_letters = document.createElement = ('div');
$nav_letters.classList.add('nav_letters');

