
// (*) Для задачи со звездочкой из шестого урока реализовать функционал переключения между картинками по стрелкам на клавиатуре.

// Решение:
// document.onkeydown = function (event) {
//     if (event.key == 'ArrowRight'){
//         листать вправо
//     }
//     if (event.key == 'ArrowLeft'){
//         листать влево
//     }
// }


let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', showNextSlide);

document.querySelector('.slider-prev').addEventListener('click', showPrevSlide);




function showNextSlide(){
    offset = offset + 300;
    if (offset > 900) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}

function showPrevSlide() {
    offset = offset - 300;
    if (offset < 0) {
        offset = 900;
    }
    sliderLine.style.left = -offset + 'px';
}

document.onkeydown = function (event) {
	console.log(event);
    if (event.key == 'ArrowRight'){
        showNextSlide();
    }
    if (event.key == 'ArrowLeft'){
        showPrevSlide();
    }
}
