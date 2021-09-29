// Создаем массив товаров
// var arrayName = {
// 	"article" : {
// 		"nameOfGood" : "shirt",
// 		"costofGood" : 30,
//      "description": "Краткое описание товара"
// 		"quantity" : 2,
// 		"img" : "http",},}

var Products = {
	"shirt28292" : {
		"name" : "shirt",
		"cost" : 30,
        "description": "Краткое описание товара shirt28292 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit alias praesentium deleniti, voluptatibus blanditiis.",
		"quantity" : 2,
		"image" : "https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/t-shirt_shirt_tee_fashion-128.png"
	
	},
	"shorts23729" : {
		"name" : "shorts",
		"cost" : 40,
        "description": "Краткое описание товара shorts23729 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit alias praesentium deleniti, voluptatibus blanditiis.",
		"quantity" : 3,
 		"image" : "https://cdn3.iconfinder.com/data/icons/fitness-24/512/8-128.png"
		
	},
	"dress11223" : {
		"name" : "dress",
		"cost" : 60,
        "description": "Краткое описание товара dress11223 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fugit alias praesentium deleniti, voluptatibus blanditiis.",
		"quantity" : 5,
		"image" : "https://cdn0.iconfinder.com/data/icons/hipster-19/64/dress-fashion-clothing-women-128.png"
	
	}
}

// загружаем товары на страницу в каталог
function loadGoods(data){
    // console.log(Products);
    var out = "";
    for (var key in data){
        out+= '<div class="item">';
        out+=  '<img src="' + data[key].image + '" alt="Изображение товара ' + data[key].name +'"></img>';
        out+= '<p class="item_name">' + data[key].name + '</p>';
        out+= '<button>В корзину</button>';
        out+= '<p class="price">' + data[key].cost + 'руб.</p>';
        out+= '<p>Описание:' + data[key].description + '</p>'+ '<br>' ;
        out+= '</div>'
        // console.log(key)
    }
    document.getElementById('goods').innerHTML = out;
}

loadGoods(Products);


// Создаем корзину
var cartContent = [];
function getButtons (){		
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++){
        buttons[i].onclick = act;
    }
}

function getCart(){
    var cart = document.getElementById("cart");
    var list = document.createElement("div");
    var smallImage = document.createElement("img");
    var nameOfChosen = document.createElement("p");
    var ammount = document.createElement("p");
    var minus = document.createElement("button");
    var count = document.createElement("p");
    var plus = document.createElement("button");
    var sum = document.createElement("p");
    var totalItem = document.createElement("p");
    var totalCart = 0;
    var outputResult = document.createElement("p");
        
    
    cart.innerHTML = "";
    
    for(var i = 0; i < cartContent.length; i+=4){
        if (cartContent[i+2] == 0){
            cartContent.splice(i, 4)
            i -= 4;
            continue;
        }
        else {
            list.innerHTML = "";
            smallImage.src = cartContent[i];
            nameOfChosen.innerHTML = cartContent[i+1];
            ammount.innerHTML = "Количество: ";
            minus.innerHTML = "-";
            minus.className = "minus";
            count.innerHTML = cartContent[i+2];
            plus.innerHTML = "+";
            plus.className = "plus";
            sum.innerHTML = "Цена за шт: " + cartContent[i+3] + " руб.";
            totalItem.innerHTML = "Общая стоимость: " + (cartContent[i+2]*cartContent[i+3]) + " руб.";
            totalCart += (cartContent[i+2]*cartContent[i+3]);
            
            list.appendChild(smallImage);
            list.appendChild(nameOfChosen);
            list.appendChild(ammount);
            list.appendChild(minus);
            list.appendChild(count);
            list.appendChild(plus);
            list.appendChild(sum);
            list.appendChild(totalItem);
            
            cart.innerHTML += list.outerHTML;
        }
    }
    if (cart.innerHTML == ""){
        outputResult.innerHTML = "Ваша корзина пуста! <br> С каталогом товаров вы можете ознакомиться ниже"
    }
    else{
        outputResult.innerHTML = "Общая стоимость вашего заказа: "+totalCart+" рублей."
    }
    cart.appendChild(outputResult);
    getButtons();
}

function act(event){
    switch (event.target.className){
        case "minus":
            cartContent[cartContent.indexOf(event.target.parentElement.children[1].innerHTML)+1] -= 1;
            break;
        case "plus":
            cartContent[cartContent.indexOf(event.target.parentElement.children[1].innerHTML)+1] += 1;
            break;
        default:
            if(cartContent.indexOf(event.target.parentElement.children[1].innerHTML)==-1){
                cartContent.push(event.target.parentElement.children[0].src);
                cartContent.push(event.target.parentElement.children[1].innerHTML);
                cartContent.push(1);
                cartContent.push(+(event.target.parentElement.children[3].innerHTML.substr(0, (event.target.parentElement.children[3].innerHTML.length - 4))));
            }
            else {
                cartContent[cartContent.indexOf(event.target.parentElement.children[1].innerHTML)+1] += 1;
            }
    }
    getCart();
}

window.onload = getCart;
