function greet(name,greetText ="Good Morning from Miss khushi"){
    //this is default value when u pass nothing in greetText only then greetText will take default value
    console.log(greetText + ", "+ name);
    console.log(name+ " is a good Developer");
}
let greetText="GOOD MORNING DEAR"
greet("khushi",greetText);
greet("mahini",greetText);
greet("mahak",greetText);
greet("mehak");

//The function below returns a value 
function sum(a,b,c){
    let sum=a+b+c;
    return sum;
}
let returnval= sum(1,2,3);
console.log(returnval);