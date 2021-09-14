// С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. Нужно реализовать
// функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function getNumber(min, max){
    let number = parseInt(Math.random()*(max - min) + min);
    if (number === -0) number = 0;
    return number;
}


let basket = [
    {
        product: "pen",
        price: getNumber(50, 100)
    },
    {
        product: "pencil",
        price: getNumber(50, 100)
    },
    {
        product: "file",
        price: getNumber(50, 100)
    },
    {
        product: "paper",
        price: getNumber(50, 100)
    }
];

console.log("Содержимое корзины: ")
console.log(basket)

// let basketPrice = 0;
// for (let prod of basket){
//     basketPrice += prod.price;
//     console.log("Товар " + prod.product + " стоит: " + prod.price);
// }



function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket){
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");


