

// Q7. Give a relevant example of Promises

// Answer: When we wanna make an asynchronous call which has to wait for something to happen and once it comes back , 
// you exit with a call back function and within it the process goes on  (A nested callback function). 
// This whole block of code will be hard to read and simplify. Thus promises come into picture.

Example:

var p1 = new Promise(function(resolve, reject){
    resolve $.ajax('a.json');
})

p1.then(function(r){
    return new Promise();
})
.then (function(result){
    return new Promise();
})