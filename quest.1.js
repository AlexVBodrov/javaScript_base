/************************************************
1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект:
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
Если число превышает 999, необходимо выдать соответствующее сообщение
с помощью console.log и вернуть пустой объект.
 ************************************************/

function transformNumber(num){
    let unitsNum = num%10
    let dozensNum = Math.floor(num/10)%10
    let hundredsNum = Math.floor(num/100)%10
    var objectNumbers = {
        'единицы': unitsNum,
        'десятки': dozensNum,
        'сотни': hundredsNum
    }
    return objectNumbers
}


const userNumber = +prompt("Введите число от 0 до 999")


if (userNumber > 999){
    console.log("число превышает 999, Введите число от 0 до 999")
} else if (userNumber < 0){
    console.log("число меньше 0, Введите число от 0 до 999")
}
else {
    console.log(userNumber)
    console.log(transformNumber(userNumber))
}
