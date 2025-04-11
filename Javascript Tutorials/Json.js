let obj={
    name:"Khushi",
    Channel:"KWK",
    friend:"Mahini",
    Food:"Jackfruit"
}
console.log(obj);
let jsonObStr=JSON.stringify(obj);
console.log(jsonObStr);

jsonObStr=jsonObStr.replace('Khushi','SHew');
console.log(jsonObStr);


//convert string to object now
jsonObj=JSON.parse(jsonObStr);
console.log(jsonObj);