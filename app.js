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
