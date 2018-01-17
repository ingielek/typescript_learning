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

// void returns nothing
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

let userData: { name: string, age: number } = {
    name: "Paul",
    age: 25
};
console.log(userData);

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};

console.log(complex);

let myRealRealAge: number | string = 27;
myRealRealAge = "15";

let finalValue = 30;
if(typeof finalValue == "number") {
    console.log("Final value is a number!");
}

// "never" never returns anything. Void returns nothing while never doesn't return anything
function neverReturns(): never {
    throw new Error("An error occured!");
}

let canBeNull : number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny = null;

type myBankAccount = { money: number, deposit: (val1: number) => void;};

let bankAccount: myBankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
};

let myself: {name: string, bankAccount: myBankAccount, hobbies: string[]} = {
    name: "Paul",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);

// REST AND SPREAD

const numbers = [1, 10, 99, -5, 101];
console.log(Math.max(...numbers));

function makeArray (...args: number []) {
    return args;
};
console.log(makeArray(1, 2, 6));

const myHobbies: string[] = ["Cooking", "Sports"];