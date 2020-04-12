

Q8. Why do we need Async/Await. Explain a little about how and why we reached here, with relevant examples

// Earlier versions of JS, we had (we still have) callback methods. And calling a callback
// from inside a callback was like getting into a callback hell. It looked something like this:


One(a, b, callbackFunctionOne(dataA){
    Two(dataA, callbackFunctionTwo(dataB){
        Three(dataB, callbackFunctionThree(){
            …..
        });
    });
})

// Now Promises came to rescue, Basically, when we wanna make an asynchronous call which has to wait for something to happen and once it comes back , 
// you exit with a call back function and within it the process goes on  (A nested callback function). 
// This whole block of code will be hard to read and simplify. Thus promises come into picture.

// But Now async/await is used which just simply executes line by line code with synchronous calls and with only one try-catch block needed.

// example: 

try{
    let resA = One(a, b, callbackFunctionOne(dataA);
    let resB = Two(dataA, callbackFunctionTwo(dataB);
    let resC = Three(dataB, callbackFunctionThree();
    // ...
    // ...
}catch(err){
    console.log('error: ', err);
}

// The async function or the asynchronous function uses an event loop and operates asynchronously and uses an implicit promise in it.