

// Q9. Why do we need let and const in JS. Compare it with the problems in ES5

// In ES6 finally we can declare variables with let and constants with constkeywords.

//ES5
var x = 1;
x = 2;
console.log(x);//2

//ES6---let variable
let x = 1;
x = 2;
console.log(x); //2

//ES6---const variable
const y = 1;
y = 2; //TypeError: Assignment to constant variable.
console.log(y);

// We can't reassign values to const. rest it is same as let or it has block scope.



