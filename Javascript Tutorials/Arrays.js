let employee={
    age:26,
    salary:20,
    channel1:"Khushi",
}
// in console employee['channel1'] will return khushi;
// employee.channel1;, will return same but if your key is string like "channel 1" then it is necessary to use above method instead of second one.
console.log(employee);

let arr=[1,2,34,5];
console.log(arr);
let arr1=new Array(21,4,5,7,"String"); //Creating array as object
// console.log(arr1);
arr1=arr1.sort((a,b) => a-b);//parameter is necessary to pass for sorting

// console.log(arr.length);
arr1.push("PUSHED");
console.log(arr1);



