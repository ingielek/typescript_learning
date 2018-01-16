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
