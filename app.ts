console.log("Hello World!");

let myName: string = "Paul";
console.log(myName);

let myAge: number = 25;
console.log(myAge);

enum Meals {
    Breakfast,
    SecondBreakfast,
    Lunch,
    Dinner,
}

let myMeal: Meals = Meals.Breakfast;
console.log(myMeal);

let car: any = "MALUCH";
console.log(car);
car = {
    brand: "FIAT",
    series: 126
};
console.log(car);

function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

function returnMyAge(): number{
    return myAge;
}
console.log(returnMyAge());

function sayHello(): void{
    console.log("Hello!")
}

function multiply(value1: number, value2: number){
    return value1 * value2;
}

console.log(multiply(5, 20));

let myMultiply: (val1: number, val2: number) => number;
myMultiply = multiply;
console.log(myMultiply(5,1));