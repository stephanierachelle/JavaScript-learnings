// Lecture: let and const
/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

*/
/*
// ES5
function driversLicence5(passedTest)  {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' +yearOfBirth + ', is offically now allowed to drive a car.')
    
}


driversLicence5(true);

// ES6
function driversLicence6(passedTest)  {
    //console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;;

    if (passedTest) {
        firstName = 'John';
       
        
    }

    console.log(firstName + ', born in ' +yearOfBirth + ', is offically now allowed to drive a car.')
}

driversLicence6(true);


var i = 23;

for(var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i);
//block scope which enables data privacy at convience

//////////////////////////////////
//// Lecture: Blocks and IIFEs

//Temporal-dead zone 
//variables can be hosited but we still cannot access them before they are declared
//IFIES dont need to be complex now

//ES6
{
    const a = 1;
    let b = 2; 
    var c = 3; 
    
}
//console.log(a + b);
console.log(c);


// ES5
(function() {
    var c = 3;
})();
//console.log(c);

//////////////////////////////////
//// Lecture: Strings

//New feature Template Literals ``

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

//ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
n.startsWith('J');
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));
// adds a space between repeat
// case senstive

//////////////////////////////////
//// Lecture: Arrow functions

const years = [1990, 1965, 1982, 1937];

// ES5 - use the map method.
var ages5 = years.map(function(el) {
return 2016 - el;
});

console.log(ages5);

// ES6 -use of the arrow (argument el > arrow operator > return statement)
// don't need the fucntion keyword or return.
// one agruement + 1 line of code
let age6 = years.map(el => 2016 - el);
console.log(age6);

//use ((,)) 

age6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(age6);


// use more then one line of code

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`

});
console.log(age6)

//////////////////////////////////
//// Lecture: Arrow functions part 2

//share the surranding .this keyword. they don;t get there own .this keyword.
// They have a lexical .this keyword

//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this; // hack made .this a varible in the global scope.
        document.querySelector('.green').addEventListener('click', function() {
                var str = 'This is box number ' + self.position + ' and it is ' + self.color;
                alert(str);
        });
    }

}
//box5.clickMe();

//ES6
// By usiing the arrow function we have access to use the .this keyword of this method. 
// Shares the lexical .this keyword of it's surranding.
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
       
        document.querySelector('.green').addEventListener('click', () =>  {
                var str = 'This is box number ' + this.position + ' and it is ' + this.color;
                alert(str);
        });
    }

}
box6.clickMe();
/*
//ES6
// By usiing the arrow function we have access to use the .this keyword of this method. 
// Shares the lexical .this keyword of it's surranding.
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
       
        document.querySelector('.green').addEventListener('click', () =>  {
                var str = 'This is box number ' + this.position + ' and it is ' + this.color;
                alert(str);
        });
    }

}
box66.clickMe();


function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {

        var arr = friends.map(function(el) {
            return this.name + ' is friends with ' + el;
        }.bind(this));

        console.log(arr);
}

var friends = ['bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends5 = function(friends) {

        var arr = friends.map(el => `${this.name} is friends with ${el}`);

        console.log(arr);
};
new Person('Mike').myFriends5(friends);
*/
/*
////////////////////////////////// 
//// Lecture: Decontructing

// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1]

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

//objects

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
    const age = new
    Date().getFullYear() - year;
    return [age, 65 - age];

}
const [age3, retirement] =
calcAgeRetirement(1990);
console.log(age3)
console.log(retirement);

//////////////////////////////////
//// Lecture: Arrays

const boxes = document.querySelectorAll('.box');


//ES5
var boxesArr5 = 
Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor =
    'dodgerblue';
});


//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//change text
//ES5
/*
for(var i =0; i < boxesArr5.length; i++) {
    if(boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/
/*

//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//find elements in an array
//ES5
var ages = [12, 17, 8, 21, 14, 11];
//boolan array

var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6 - call back function
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

/***********************************
 * CODING CHALLENGE 2
 */

 /*
 John and his family went on a holiday and went to 3 different resturants. 
 The bills were $124, $48 and $268

 To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

 In the end, John would like to have 2 arrays:
 1) Containing all three tips (one for each bill)

 2) Containing all three final paid amounts (bill + tip).

 (NOTE: To calculate 20% of a value, simply multiply if with 20/100 = 0.2)
 
 

// 1) Containing all three tips (one for each bill)

 
function tipCalculator (billAmount) {
    var percentage;

    if (billAmount < 50) { 
        percentage = .2;
        

    } else if (billAmount >= 50 && billAmount < 200) { 
        percentage = .15;


    } else { 
        percentage = .1;
    }
    return percentage * billAmount;
}

var billAmounts = [124, 48, 268];
var tipAmount = [tipCalculator(billAmounts[0]),
                tipCalculator(billAmounts[1]),
                tipCalculator(billAmounts[2])
                ]

var finalValues = [billAmounts[0] + tipAmount[0],
                    billAmounts[1] + tipAmount[1],
                    billAmounts[2] + tipAmount[2]];
console.log(tipAmount, finalValues);

*/
//coding challange 5
/* Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $ 180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values.

*/

/*
var bill = [124, 48, 268, 180, 42];

// 2. Add a method to calculate the tip


//////////////////////////
 ES6 Arrays
 ////////////////////////
/*

Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);



//taken out function (=> now use the arrow instead of writing function/ don't need the retunr either)

//all you need is the arguement the => then what we want to place in our return statement.

const tips = [124, 48, 130];
const workers = tips.map(el => el - 30)
console.log(workers);

// more then one (el)
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new 
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`

});

console.log(ages6);

//Lecture Arrow functions 2
var box5 = {
    color: 'green',
    position: 1,
    clickme: function() {
        var self = this
        document.querySelector('.green').addEventListener('click',
        function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color; alert(str);
        })
    }
}
box5.clickme();

//clickme is a function attached to an object - so the method has access to the color and position using the this keyword.
// get around this by creating a 'this' variable.

// using arrow functions

var box6 = {
    color: 'green',
    position: 1,
    clickme: function() {
        var self = this
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color; alert(str);
        })
    }
}
box6.clickme();

//function contructor in order to create a person object

function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {
    
}

*/
//////////////////////////////
//// Lecture: Rest parameters
//////////////////////////////
/*
//ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = 
    Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 1986, 2018);

//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965);
*/

/*
//ES5
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = 
    Array.prototype.slice.call(arguments, 1);
    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= limit);
    })
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 1986, 2018);

//ES6
function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965);
*/

////////////////////////////
////// Lecture: Default parameters
/*
// ES5  
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}
*/
/*
//ES6
function SmithPerson(firstName, yearOfBirth, lastName='smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


//////////////////////
////MAPS
///////////////////

const question = new Map();
question.set('question', 'What is the offical name of the lastest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Corect answer :D');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    console.log('Answer 4 is here')
}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);

    }
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));
*/

/*
/////////////////////////
// CLASSES
///////////////////////

//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person5.prototype.calculateAge = 
function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = newDate().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    static greeting() {
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();
*/

//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth
    this.job = job
}

Person5.prototype.calculateAge = 
function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olymicGames = olymicGames;
    this.medals = medals;
}


Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
//ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

/*
//Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At the end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town 
(forumla: number of trees/park area)

2. Average age of each town's park 
(formula: sum of all ages/number of parks)

3. The name of the park that has more than 1000 trees.

4. Total and average length of the town's streets
(.length)

5. Size classification of all streets:
tiny/small/normal/big/huge. If the size is unknown, the default is normal.

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructing.

*/


//Create a super class


class Report {
    constructor (name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;  
    }
}

class Park extends Report {
    constructor(name, buildYear, totalTrees, area) {
        super(name, buildYear);
        this.totalTrees = totalTrees;
        this.area = area; //km2
    }


    treeDensity() {
        const density = (this.totalTrees / this.area);
        console.log(`The tree density at ${this.name} is ${density} trees per square km.`);
    }
}
    
class Street extends Report {
    constructor(name, buildYear, length, streets = 3) {
        super(name, buildYear);
        this.length = length;
        this.streets = streets; // 3 for now...
    }
    sizeClassification() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.streets)} street.`);

    }  
}

const totalParks = [
    new Park('Barkly Gardens', 1910, 500, 2),
    new Park('Herring Island Sculpture Park', 1994, 800, 6), 
    new Park('Queen Victoria Gardens', 1970, 1200, 12) ];



const totalStreets = [
        new Street('Red street', 1940, 5, 1),
        new Street('Blue street', 2015, 7), 
        new Street('Green street', 1980, 1, 2),
        new Street('Orange', 1982, 2.5, 5) ];

function calc(arr) {
        const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

        return [ sum, sum / arr.length]; //sum of all the elements in the array
        
    }


function reportParks(p) {

    console.log('*******The Parks report *******')
    // 1. Tree density of each park in the town (forumla: number of trees/park area)
    p.forEach(el => el.treeDensity());

    // 2. Average age (forumla: sum of all ages/number of parks)
    const ages = p.map(el => new Date().getFullYear() - el.buildYear)
    const [avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`)

    // 3. The name of the park that has more than 1000 trees - loop through to find 1000
    const i = p.map(el => el.totalTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`)  
} 

function reportStreets(s) {
    console.log('*******The Streets report *******')

    // 4. Total and average length of the town's streets
    length = s.map(el => el.length);
    const [totalLength, avgLength] = calc(length)
console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`)
     // 5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
     s.forEach(el => el.sizeClassification());
}

reportParks(totalParks);
reportStreets(totalStreets);