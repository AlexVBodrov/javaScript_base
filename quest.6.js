/* 
6. Реализовать функцию с тремя параметрами: 
function mathOperation(arg1, arg2, operation), 
где arg1, arg2 – значения аргументов, operation – строка с названием операции.
В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3)
 и вернуть полученное значение (использовать switch). 
*/
var a = 2
var b = 5

// function subtraction(x, y) {
//     return x -y
// }

// function addition(x, y) {
//     return x + y
// }

// function  multiplication(x, y) {
//     return x * y
// }

// function dividing(x, y) {
//     return x / y
// }


function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case subtraction:
            return subtraction(arg1, arg2)
        case addition:
            return addition(arg1, arg2)
        case multiplication:
            return multiplication(arg1, arg2)
        case dividing:
            return dividing(arg1, arg2)

    }
    
}

console.log(mathOperation(b, a, addition))
