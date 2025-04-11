greet = () => {
    console.log("HELLO! GOOD MORNING");
}
greet();

setTimeout(() => {
    console.log("We are inside setTimeout")
}, 5000);

// let sum=(a,b)=>{
//     return a+b;
// };  
// let sum=(a,b)=>"sum is:"+(a+b);
let sum2 = (s, d) => s + d;
let half = l => l / 2;
let greRt = () => console.log("GOOD MORNING");
greRt();


let obj = {
    names: ["KHUSHI", "Mahini", "Harsh", "Abhi"],
    speak() {
        this.names.forEach((stud) => console.log("Hello: ", stud));
    }
}
obj.speak();

//if there is 'this' inside an arrow function that means "this " refers to parent function