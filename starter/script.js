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
let age6 = years.map(el => 2016 - el);
console.log(age6);

age6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(age6);

age6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${2016 - el}.`

});
console.log(age6)


