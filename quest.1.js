/************************************************
1 Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
 Доска должна быть верно разлинована на черные и белые ячейки.
 Строки должны нумероваться числами от 1 до 8,
  столбцы — латинскими буквами A, B, C, D, E, F, G, H.
 ************************************************/
let container = document.getElementById('containerChessBoard')
let chessBoard = document.createElement('div');


container.appendChild(chessBoard);

function drawChessBoard(){
    for(let y=0;y < 10;y++)
    {
        for(let x=0;x < 10;x++)
        {
            let css = x ? {} : {clear:'left'};
            let content = '';
            if(y==0 || y==9)
                content = x > 0 && x < 9 ? 'ABCDEFGH'.charAt(x-1) : null;
            else if(x == 0 || x == 9)
                content = 9-y;
            else css.background = (x+y)%2 ? '#111' : '#fff';
            
            let node = document.createElement('div');
            css.width = '50px';
            css.height = css.width;
            css.textAlign = 'center';
            css.float = 'left';
            css.border = '1px solid #111';

            
            for(let i in css)node.style[i] = css[i];
            if(content)
                node.innerHTML = content;
            chessBoard.appendChild(node);
        }
    }
}


drawChessBoard();
