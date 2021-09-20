// 3 * Заполнить созданную таблицу буквами, 
// отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
//  причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
function drawChess(){
    let mainBlock = document.querySelector('.main-block');
    let block;
    let flag = true;

    let figure = {
        0 : ['ЧЛ', 'ЧК', 'ЧС', 'ЧФ', 'ЧКор','ЧС', 'ЧК','ЧЛ'],
        1 : ['ЧП', 'ЧП', 'ЧП', 'ЧП', 'ЧП','ЧП', 'ЧП', 'ЧП'],
        6 : ['БП', 'БП', 'БП', 'БП', 'БП','БП', 'БП', 'БП'],
        7 : ['БЛ', 'БК', 'БС', 'БФ', 'БКор','БС', 'БК','БЛ'],
    };

    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
            if (j==0) flag = !flag;

            block = document.createElement('div');

            if (flag) block.className = 'block black';
            else block.className = 'block white';

            if (figure[i]!== undefined && figure[i][j]!==undefined){
                block.innerHTML = figure[i][j];
            }

            mainBlock.appendChild(block);
            flag = !flag;
        }
    }
}

drawChess();