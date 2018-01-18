"use strict";
console.log("Hello World!");
var myName = "Paul";
console.log(myName);
var myAge = 25;
console.log(myAge);
var Meals;
(function (Meals) {
    Meals[Meals["Breakfast"] = 0] = "Breakfast";
    Meals[Meals["SecondBreakfast"] = 1] = "SecondBreakfast";
    Meals[Meals["Lunch"] = 2] = "Lunch";
    Meals[Meals["Dinner"] = 3] = "Dinner";
})(Meals || (Meals = {}));
var myMeal = Meals.Breakfast;
console.log(myMeal);
var car = "MALUCH";
console.log(car);
car = {
    brand: "FIAT",
    series: 126
};
console.log(car);
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function returnMyAge() {
    return myAge;
}
console.log(returnMyAge());
// void returns nothing
function sayHello() {
    console.log("Hello!");
}
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(5, 20));
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(5, 1));
var userData = {
    name: "Paul",
    age: 25
};
console.log(userData);
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
console.log(complex);
var myRealRealAge = 27;
myRealRealAge = "15";
var finalValue = 30;
if (typeof finalValue == "number") {
    console.log("Final value is a number!");
}
// "never" never returns anything. Void returns nothing while never doesn't return anything
function neverReturns() {
    throw new Error("An error occured!");
}
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Paul",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
// REST AND SPREAD
var numbers = [1, 10, 99, -5, 101];
console.log(Math.max.apply(Math, numbers));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
// DESTRUCTURING AN ARRAY
var myHobbies = ["Cooking", "Sports"];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
// DESTRUCTURING AN OBJECT
var userDatas = { userName: "Max", age: 27 };
var userName = userDatas.userName, age = userDatas.age;
console.log(userName, age);
// TEMPLATE LITERALS
var userTitle = "Pawel";
var greeting = " this is a heading\nI'm " + userTitle + ",\nThis is cool!";
console.log(greeting);
var h1 = document.getElementById("header");
var button = document.getElementById("btn");
button.addEventListener("click", function () {
    h1.innerText = "Witaj";
});
console.log(h1.innerText);
// CLASS
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 25;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Max", "pawcio");
console.log(person);
person.printAge();
person.setType("cool");
//# sourceMappingURL=app.js.map