const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //print all variables in current scope
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); //outside so empty

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

//arrow function
const chai =  () => { 
    let username = "hitesh"
    console.log(this); //in Arrow function "this" is not supported
}
const obj = {
    username: "objects",
    regularFunction: function () {
        console.log(this.username);  // Output: objects
    },
    arrowFunction: () => {
        console.log(this.username);  // Output: undefined
    }
};

obj.regularFunction();  // Output: object
obj.arrowFunction();


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2 

// const addTwo = (num1, num2) => ( num1 + num2 ) //if Parentheses used no need to write return keyword

const addTwo = (num1, num2) => ({username: "hitesh"}) //if u want to return object this is the syntax


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()