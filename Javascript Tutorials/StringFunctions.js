document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("content").innerHTML="<h2>This is content</h2>"
});

var str="This is a string";
console.log(str);
var position=str.indexOf('is');
console.log(position);
position=str.lastIndexOf('is');

//used to find the last occurrence of a specified value in a string or array

console.log(position); 

var substr1 =str.substr(1,3);
console.log(substr1);
var slicing= str.slice(1,3);
console.log(slicing);
// var replaced= str.replace('string', 'Bat');
// console.log(str,replaced);

console.log(str.replace('string','Bat'));
console.log(str);
console.log(str.toUpperCase());
console.log(str)
console.log(str.toLowerCase());
var srt="   THIS     HAS WHITE  SPACES";
console.log(srt.trim());
 
console.log(str.charAt(3), str.charCodeAt(3));
console.log(str[3]);