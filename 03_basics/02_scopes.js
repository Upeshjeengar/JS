//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c=30
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c); //in JS var is defined globally(var defined in above if block can be acessed here)



function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) //Even if function is defined later this will not give error

function addone(num){
    return num + 1
}



addTwo(5) //But this will give error - Hoisting
const addTwo = function(num){
    return num + 2
}
