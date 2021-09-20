// 2 Сделать генерацию корзины динамической: 
// верстка корзины не должна находиться в HTML-структуре.
//  Там должен быть только div, в который будет вставляться корзина,
//  сгенерированная на базе JS:
// Пустая корзина должна выводить строку «Корзина пуста»;
// Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

function addProductBasket(arr, name, price, quantity) {
    arr.push({
        product: name,
        price: price,
        quantity: quantity,
        total: totalSum
    });
}

function totalSum() {
    return this.price*this.quantity;
}

// var basket = [{product: '',
//     price: 0,
//     quantity: 0,
//     total: totalSum},]
// Пустая корзина
var basket = [
    {product: 'shirt',
    price: 200,
    quantity: 2,
    total: totalSum},
    {product: 'shorts',
    price: 700,
    quantity: 1,
    total: totalSum},
    {product: 'dress',
    price: 1100,
    quantity: 3,
    total: totalSum},
    {product: 'socks',
    price: 150,
    quantity: 5,
    total: totalSum},
]

function countBasketPrice(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].total();
    }
    return sum;
}

function descBasketPrice(arr) {
    var str = '';
    for (var i = 0; i < arr.length; i++) {
        str += (i + 1) + '. ' + arr[i].product + ' - ' + arr[i].price + ' * ' + arr[i].quantity + ' = ' + (arr[i].total()) + '\n';
    }
    return str;
}


var cartText = descBasketPrice(basket) + '<br><br>Общая стоимость составляет: ' + countBasketPrice(basket);


let cart = document.getElementById('cart')
let cartEmpty = document.createElement('div');
cartEmpty.innerHTML = "<h1>Корзина пуста</h1><p>Добавьте товары в корзину</p>" ;
let cartNotEmpty = document.createElement('div');
cartNotEmpty.innerHTML = "<h1>Корзина</h1><p>В корзину добавлены следующие товары:</p> " + cartText;

console.log(countBasketPrice(basket));

if (countBasketPrice(basket) === 0){
    cart.appendChild(cartEmpty);}
else {
    cart.appendChild(cartNotEmpty);
}