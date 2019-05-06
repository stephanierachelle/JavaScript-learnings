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

////////////////////////////////// https://www.linkedin.com/in/steph-greene/
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

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));


