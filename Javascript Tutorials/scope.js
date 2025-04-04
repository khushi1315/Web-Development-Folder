var string="THIS is A string";
var string="This is a string";
console.log(string);
let a='she';
{
    let a='he';
    console.log(a);
}
console.log(a);
// const b='This cannot be changed';
// b="Because it is constant."
// console.log(b);

let age=20;

//if else statements
if(age>=18){
    console.log('you can vote');
}
else if(age==2){
    console.log('Baby is not eligible for vote');

}
else{
    console.log("invalid voter");
}

//Switch case

const marks=50;
switch (marks) {
    case 99:
        console.log("Excellent");
        // break;

        //If you don't put break, all the statements will be run after it.
    case 80:
        console.log("Very Good");
        break;
    case 50:
        console.log("Need Improvement");
        // break;

    default:
        console.log("You need to study hard!!!")
        break;
}