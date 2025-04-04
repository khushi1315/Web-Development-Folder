//for loop

// let i=0;
// for(i=0;i<5;i++){
//     console.log(i);
// }

let friends=["khushi","Mahini","varsha","PM"];
for(let ind=0;ind<friends.length;ind++){
    console.log("Hello!!" + friends[ind]);
}

//for each loop
//another way to do same thing {Modern javascript}
friends.forEach(function g(element){
    console.log("Hello!!"+element);
});

//one more way to do same thing

//for of loop
for(ele of friends){
    console.log("WELCOME TO Modern JS again, My Friend "+ ele);
}

let employee={
    NAME:"KHUSHI",
    Salary:"10LPM"

}
//Use this loop to iterate over object to js
//for in loop

for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]} `);
}

//while loop

let i=0;
while(i<5){
    console.log(`${i} this less than 5`);
    i++;
}

//do-while loop
 let j=7;
do{
    console.log(`${j} is less than equal to 5 and we are inside do-while loop it might be wrong`);
    j++;
}while(j<5);
