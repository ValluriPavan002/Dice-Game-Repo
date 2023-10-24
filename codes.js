/*function logger() {
    console.log('My Name is Jagadeesh');
}

//invoking the function or calling the function or running the function
logger();
logger();

logger();
logger();
logger();

//A function not only reuse code but also it can receive data and can return back data

//In this function we can also pass parameters
//the parameters get defined once we call the function
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

//The actual values of the parameters are called as Arguments
const fruitJuice = fruitProcessor(4, 6);
console.log(fruitJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
//function declaration
/*function calAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

const age1 = calAge1(1998);
console.log(age1);

//function expression

//So remember an expression produces a value,
//so the value is stored in the calAge2
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calAge2(1992);
console.log(age2);
*/

// Reference code for "function expression"
/*
//So remember an expression produces a value,
const calAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calAge2(1992);
console.log(age2);
//*********************************************** */

//Arrow function
/*
const calAge3 = birthYear => 2037 - birthYear;
console.log(calAge3(1999));


//Another example of Arrow Function

yearsLeftUntilRetirement = birthYear => {
    const age = 2023 - birthYear;
    const yearsLeft = 65 - age;

    return yearsLeft;
}

console.log(`Years Left until retirement is ${yearsLeftUntilRetirement(1998)}`);

//the above code is for single parameter
//if we needed to send multiple parameters then we need to use parenthesis to the parameter.


yearsLeftUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const yearsLeft = 65 - age;

    return `${firstName} retires in ${yearsLeft} years`;
}

console.log(yearsLeftUntilRetirement(1998, 'Jagadeesh'));

console.log(yearsLeftUntilRetirement(2000, 'Tarun Raj'));

console.log(yearsLeftUntilRetirement(1980, 'Daddy'));

console.log(yearsLeftUntilRetirement(1985, 'Amma'));
*/

/*function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    //calling one function inside another function i.e., cutPieces()
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(3, 4));
*/

/*
const calculatedAge = function (birthYear) {
    return 2023 - birthYear;
}

//Without using arrow function
const yearsLeftTillRetirement = function (birthYear, firstName) {
    const age = 2023 - birthYear;
    const yearsLeft = 65 - age;
    return `${firstName} retires in ${yearsLeft} years`;
}
*/
/*
function calculateAge(birthYear) {
    return age = 2023 - birthYear;
}

//Using arrow function
const yearsLeftUntilRetirement = (birthYear, firstName) => {
    const calAge = calculateAge(birthYear);
    const retirement = 65 - calAge;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;

    } else {
        console.log(`${firstName} retires in ${retirement} years`);
        return -1;

    }
}

console.log(yearsLeftUntilRetirement(1998, 'Jagadeesh Venkat Pavan Valluri'));

console.log(yearsLeftUntilRetirement(1900, 'Tarun Raj Valluri'));



function fruitProcessor(apples, oranges) {
    //calling one function inside another function i.e., cutPieces()
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(3, 4));
*/

/*
const calcAverage = (average1, average2, average3) => {
    averageCalculated = (average1 + average2 + average3) / 3;
    return averageCalculated;
    /*
    we can write the above function as below format
    const calcAverage = (average1, average2, average3) => (average1 + average2 + average3) / 3;

}


const scoreDolphins = calcAverage(44, 44, 44);
const scoreKoalas = calcAverage(44, 44, 44);


function checkWinner(avgDolphins, avgKoalas) {

    avgDolphins > avgKoalas ? console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`) : avgKoalas > avgDolphins ? console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`) : console.log('No team wins...');
}

checkWinner(scoreDolphins, scoreKoalas);

function cutPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    //calling one function inside another function i.e., cutPieces()
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(3, 4));


let n = '1' + 1; //This will give a return value as a string format
console.log('Type of n is ' + typeof (n));

let m = '1' + 1; //11
m = m - 1; //11-1 = 10
console.log('Type of n is ' + typeof (m));

console.log(Boolean(''));

*/
/*
const friendOne = 'Michael';
const friendTwo = 'Steven';
const friendThree = 'Peter';

/**
 * Array is a data structure and it is like a big
 * container into which we can throw variables
 * and then later we can reference them
 *
 * The two important data structures in JAVSCRIPT are
 * Arrays and Objects



const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//Below is using an Array Function
const years = new Array(1991, 1998, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

//friends = ['Pavan', 'Manoj'];

const firstName = 'Pavan';
const valluri = [firstName, 'Valluri', 2037 - 2017, friends];
console.log(valluri);

//Exercise

function calculateAge(birthYear) {
    return age = 2023 - birthYear;
}

const year = [1998, 1999, 2000, 2001];
console.log('First Year Age ' + calculateAge(year[0]));

console.log('Last Year Age ' + calculateAge(year[year.length - 1]));

const ages = [calculateAge(year[0]), calculateAge(year[year.length - 1])];
console.log(ages);

*/

/*
const friends = ['Sujinadh', 'Durga Prasad', 'Rajesth'];
//add elements
const newLength = friends.push('Tarun Valluri');
console.log(friends);

console.log('NewLength : ' + newLength);

friends.unshift('John');
console.log(friends);

const unshiMe = friends.unshift('John');
console.log('unshiMe : ' + unshiMe);

//remove elements
const popedElement = friends.pop();
console.log(friends);

console.log('Poped element : ' + popedElement);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Durga Prasad'));

console.log(friends.includes('John'));

*/
/*
function calcTip(tip) {
    const calculatedTip = tip > 50 && tip < 300 ? tip * 0.15 : tip * 0.20;
    return calculatedTip;
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//Create an array totals containing the total values, so the bill + tip.
const totals = [((bills[0]) + calcTip(bills[0])), ((bills[1]) + calcTip(bills[1])), ((bills[2]) + calcTip(bills[2]))];
console.log(totals);
*/
/*
const friend1 = 'Stephen';
const friend2 = 'Raju';
const friend3 = 'Steven';

const friends = ['Stephen', 'Raju', 'Steven'];
*/

//INTRODUCTION TO OBJECTS

/*
const jonasArray = [
    'pavan',
    'Valluri',
    2023 - 1998,
    'SFDC DEVELOPER',
    ['Sujnadh', 'DP', 'Rajesh']
];

const jonas = {
    firstName: 'Jagadeesh',
    lastName: 'Valluri',
    age: 2023 - 1998,
    job: 'Salesforce DEVELOPER',
    friends: ['Sujinadh', 'Rajesh', 'DurgaPrasad']
};

console.log(jonas);

console.log('Last name of Jonas Using dot operator : - ' + jonas.lastName);

console.log('First name of jonas Using brackets : - ' + jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

console.log(Boolean(undefined));

const interestedIn = prompt('What do you want to know about Jonas? choose between firstname, lastname , age, job and friends');
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request!!! Choose between firstname, lastname, job, friends and age');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jagadeeshValluri002';
console.log(jonas);


//Jonas has 3 friends and his best friend is called Sujinadh
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

*/
/*
const jonas = {
    firstName: 'Jagadeesh',
    lastName: 'Valluri',
    brithYear: 1998,
    job: 'Salesforce DEVELOPER',
    friends: ['Sujinadh', 'Rajesh', 'DurgaPrasad'],
    hasDriversLicense: false,

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear;
    // }
    //calcAge: function () {
    //   console.log(this);
    //   return 2037 - this.brithYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.brithYear;
        return this.age;
    },

    getSummary: function () {

        return `${jonas.firstName} ${jonas.lastName} is a ${this.calcAge()} year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());

//Challenge
//"Jonas is a 46 year old teacher, and he has a driver's license" 16.25
*/
/*
const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        const BMI = this.mass / (this.height * this.height);
        return BMI;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        const BMI = this.mass / (this.height * this.height);
        return BMI;
    }
}

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s BMI (${john.calcBMI()})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})!`);
}

*/
/***
 * Log to the console who has the higher BMI, together with the full name and the respective BMI.
 * Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".
 * */
/*

for (let rep = 1; rep <= 20; rep++) {
    console.log(`Lifting weights repetition for ${rep} person`);
}*/

// let, var, const
/**
 * 1- We can redeclare a variable
 * 2 - Let keyword have block level scope and that means we can acces the variable with in the block and we cannot access outside the block
 */
/*
let x = 40;
if (true) {
    let x = 20;
    console.log(x);
    x = 30;
    console.log(x);
}
console.log(x);
*/


/***
 * 1 - We cannot redeclare the variable as let keyword
 * 2 - have block level scope as the let keyword except we cannot redeclare a variable
 */
/*
const x = 100;
if (true) {
    const blockScopeVar = 50;
    console.log(blockScopeVar);
} else {
    console.log('False condition is printed');
}

console.log(x);
*/

//Var keyword
/**
 * 1 - We can redeclare the variable
 * 2 - This keyword contians a function scope and not block scope
 */
/*
var count = 5;
count = 10;
console.log(count);

var globalVar = 'Iam Global';
if (true) {
    console.log(globalVar);
}
*/
/*
const firstName = 'Pavan';
const job = 'Salesforce Developer at TCS';
const birthYear = 1998;
const year = 2023


const age = year - birthYear;
const data = "I'm " + firstName + ', a ' + age + ' old ' + job;
console.log(data);

const templateLiteralData = `I'm ${firstName} , a ${age} old ${job}`;
console.log('Template Literal Code - ' + templateLiteralData);
*/

//For loop using Arrays

/*
const jonas = [
    'Jagadeesh',
    'Valluri',
    2023 - 1998,
    'Salesforce DEVELOPER',
    ['Sujinadh', 'Rajesh', 'DurgaPrasad'],
    true
];

const arrayJonasType = [];

for (let i = 0; i < jonas.length; i++) {
    //Reading from jonas array
    console.log(jonas[i], typeof (jonas[i]));

    //this is one way of filling an array
    //arrayJonasType[i] = typeof (jonas[i]);
    arrayJonasType.push(typeof (jonas[i]));
}
console.log(arrayJonasType);

const years = [1991, 2000, 1998, 1987, 2009];

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(`ages array - ${ages}`);


//Continue and Break

//Continue is to exit the current iteration of the loop and continue to the next one.
//On the other hand Break is used to completely terminate the whole loop


// USING CONTINUE
console.log('-------ONLY STRINGS-----------')
for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof (jonas[i]));

}


// USING BREAK
console.log('-------USING BREAK STATEMENT-----------')
for (let i = 0; i < jonas.length; i++) {

    if (typeof jonas[i] === 'number') break;

    console.log(jonas[i], typeof (jonas[i]));

}
*/


/*
const jonas = [
    'Jagadeesh',
    'Valluri',
    2023 - 1998,
    'Salesforce DEVELOPER',
    ['Sujinadh', 'Rajesh', 'DurgaPrasad'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    //1st loop - here the loop starts at 4th index and then it checks the condition means 4 is greater than 0 and is true so
    //the decrement operator value will be 3
    //2nd loop - here the loop starts at 4th index and then it checks the condition means 4 is greater than 0 and is true so
    //the decrement operator value will be 2..............and so on when the condition is less than 0 that means -1 then the loops stops
    //running
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 5; exercise++) {
    console.log(`-----Starting Exercise ${exercise}--------`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}
*/
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(` Lifting weight repetition ${rep}`);
}


let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE LOOP :- Lifting weight repetition ${rep}`);

    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a dice ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to End......');
}
*/

/*
const calcAverage = function (arr) {
    //Average = Sum of observations/number of observations
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum / arr.length;
}

console.log(calcAverage([12, 98, 67, 234, 657, 999, 24356]));

*/

//We are gonna use strict mode in all our scripts
//"use strict";

/*
const x = 23;
if (x === 23) console.log('Yes the value of x is 23');

const calcAge = (BirthYear) => 2037 - BirthYear;

console.log(calcAge(1998));
*/
/*
const temperatures = [3, -2, -3, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


const temp = [3, -2, -1, 'error', 9, 89, 29, 99, 34758, 95687];

const calcTemAmplitude = function (temps, temp) {

    const array1 = temps;
    const array2 = temp;
    const array3 = array1.concat(array2);

    let max = array3[0];
    let min = array3[0];

    for (let i = 0; i < array3.length; i++) {

        const currentTemp = array3[i];

        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) {
            max = currentTemp;
        }

        if (currentTemp < min) {
            min = currentTemp;
        }
    }

    return max - min;
}


const amplitude = calcTemAmplitude(temperatures, temp);
console.log('Amplitude ' + amplitude);
*/
/*
const measureKelvin = function () {
    const measurement = {
        type: 'temperature',
        unit: 'celsius',

        // C) FIX - convert string to a number
        value: Number(prompt('Degress celsius:'))
    }

    //console.log(measurement);
    //B) FIND BUG
    console.table(measurement);

    //console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;

    return kelvin;
}
//A) IDENTIFY THE BUG
console.log(measureKelvin());

*/
//When we input the arrays as below then the output will be
//Shown as ...17°C in 1 days...21°C in 2 days...23°C
//in 3 days

//Sub problems - First join the array as a string
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
    let str = '';
    for (i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}°C in ${i + 1} days...`;
    }

    console.log('...' + str);
}

printForecast(data1);
printForecast(data2);
//23°C
/*
const calcAverage = function (arr) {
    //Average = Sum of observations/number of observations
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage([12, 98, 67, 234, 657, 999, 24356]));
*/