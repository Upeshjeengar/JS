// Immediately Invoked Function Expressions (IIFE)
// Need: If we want a scope for short time sometimes there may be problem from global scope
// IIFE immediately executes without function call

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {  //name parameter passed to function
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh'); //hitesh is passed to iife

