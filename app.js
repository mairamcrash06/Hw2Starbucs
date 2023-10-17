var Starbucks = {
    drinks: [
        {
            name: "Латте",
            description: "Эспрессо с горячим молоком и пеной",
        },
        {
            name: "Капучино",
            description: "Эспрессо с равными частями горячего молока и пены",
        },
        {
            name: "Американо",
            description: "Разбавленный эспрессо горячей водой",
        },
        {
            name: "Мокка",
            description: "Эспрессо с шоколадом и молоком, украшенный взбитыми сливками",
        },
        {
            name: "Чай зеленый",
            description: "Традиционный зеленый чай",
        },
        {
            name: "Чай черный",
            description: "Классический черный чай",
        }
    ]
}

console.log("Меню Starbucks:");

for (var i = 0; i < Starbucks.drinks.length; i++) {
    var drink = Starbucks.drinks[i];
    console.log(drink.name + ": " + drink.description);
}
//


// Дни недели
var userNumber = parseInt(prompt("Введите число от 1 до 7:"));

var dayOfWeek;

switch (userNumber) {
    case 1:
        dayOfWeek = "Понедельник";
        break;
    case 2:
        dayOfWeek = "Вторник";
        break;
    case 3:
        dayOfWeek = "Среда";
        break;
    case 4:
        dayOfWeek = "Четверг";
        break;
    case 5:
        dayOfWeek = "Пятница";
        break;
    case 6:
        dayOfWeek = "Суббота";
        break;
    case 7:
        dayOfWeek = "Воскресенье";
        break;
    default:
        dayOfWeek = "Ошибка: введите число от 1 до 7";
}

alert("День недели: " + dayOfWeek);