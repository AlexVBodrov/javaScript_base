// 4 * Сделать так, чтобы товары в каталоге выводились при помощи JS:
// Создать массив товаров (сущность Product);
// При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

var Products = {
	"shirt28292" : {
		"name" : "shirt",
		"cost" : 30,
		"quantity" : 2,
		"img" : "https://cdn3.iconfinder.com/data/icons/fashion-beauty-vol-1/512/t-shirt_shirt_tee_fashion-128.png",
	
	},
	"shorts23729" : {
		"name" : "shorts",
		"cost" : 40,
		"quantity" : 3,

		"img" : "https://cdn3.iconfinder.com/data/icons/fitness-24/512/8-128.png",
		
	},
	"dress11223" : {
		"name" : "dress",
		"cost" : 60,
		"quantity" : 5,
		"img" : "https://cdn0.iconfinder.com/data/icons/hipster-19/64/dress-fashion-clothing-women-128.png",
	
	}
};

console.log(Products);

var out = '';
for (var key in Products) {
	out+='Название: '+Products[key].name + '<br>';
	out+='Цена: '+Products[key].cost + '<br>';
	out+='Наличие: '+Products[key].quantity + '<br>';
	// <img src="">
	out+='<img src="'+Products[key].img+'">';
	out+='<hr>';
}
document.getElementById('catalog').innerHTML = out;




