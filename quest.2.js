//2 (*) У товара может быть несколько изображений. Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне;
// b. Реализовать функционал перехода между картинками внутри модального окна.

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block"}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal){
		modal.style.display = "none";
	}
}


function init (){
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++){
		images[i].onclick = changeBigPicture;
	}
}
function changeBigPicture(event){
	var appDiv = document.getElementById("slider"),
		big = document.getElementById("big_picture"),
		left = document.createElement("img"),
		right = document.createElement("img"),
		eventElement = event.target,
		imageDomElement = document.createElement("img");
		
	switch(eventElement.id){
		case "left":
			big.src = "img/" + (parseInt(big.src.substr(-5, 1)) - 1) + ".jpg";
			appDiv.innerHTML = "";
			left.id = "left";
			left.src = "img/arrow.png";
			right.id = "right";
			right.src = "img/arrow.png";
			appDiv.appendChild(left);
			appDiv.appendChild(big);
			
			big.onerror = function() {
				alert("Ошибка: Такого файла не существует");
				big.src = "img/" + (parseInt(big.src.substr(-5, 1)) + 1) + ".jpg";
				appDiv.innerHTML = "";
				appDiv.appendChild(left);
				appDiv.appendChild(big);
				appDiv.appendChild(right);
			}
			
			appDiv.appendChild(right);
			
			right.onload = init;
			break;
			
		case "right":
			big.src = "img/" + (parseInt(big.src.substr(-5, 1)) + 1) + ".jpg";
			appDiv.innerHTML = "";
			left.id = "left";
			left.src = "img/arrow.png";
			right.id = "right";
			right.src = "img/arrow.png";
			appDiv.appendChild(left);
			appDiv.appendChild(big);
			
			big.onerror = function() {
				alert("Ошибка: Такого файла не существует");
				big.src = "img/" + (parseInt(big.src.substr(-5, 1)) - 1) + ".jpg";
				appDiv.innerHTML = "";
				appDiv.appendChild(left);
				appDiv.appendChild(big);
				appDiv.appendChild(right);
			}
			
			appDiv.appendChild(right);
			
			right.onload = init;
			break;
			
		default:
			appDiv.innerHTML = "";
			left.id = "left";
			left.src = "img/arrow.png";
			right.id = "right";
			right.src = "img/arrow.png";
			
			imageDomElement.src = eventElement.src;
			imageDomElement.id = "big_picture";
			
			appDiv.appendChild(left);
			appDiv.appendChild(imageDomElement);
			appDiv.appendChild(right);
			
			right.onload = init;
			
	}
}
window.onload = init;
