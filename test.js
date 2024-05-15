console.log("Hello Upesh!")

let c='a';
console.log('using let',c);
{
    let c='g';
    console.log(c);
}
console.log(c);

var a='a';
console.log('\nusing var',a);
{
    var a='g';
    console.log(a);
}
console.log(a);

random=1;  //this declaration also have same properties as var
{
    random=2;
    console.log(random);
}
console.log(random);

/*let should be used instead of var as let is Let is block-scoped. Var can be declared and accessed globally.
Let can be declared globally, but its access is limited to the block in which it is declared. Variables declared
using var can be re-declared and updated within the same scope.*/
