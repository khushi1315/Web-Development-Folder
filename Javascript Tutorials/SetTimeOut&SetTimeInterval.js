function greet(name){
            console.log('Hello!! How are you?',name);
    }
    // setTimeout(greet,5000,"KHUSHI");
//argument will be after time only ( DO call function without parenthesis)

// setTimeout-->Allows us to run the function once after the interval of time
//clearTimeout-->allows us to run the function repeatedly after the interval of time

// timeout=setTimeout(greet,5000,"KHUSHI");
// console.log(timeout);
// clearTimeout(timeout);

// 1000=1second
// IntervalID=setInterval(greet,3000,"Khushi");
// clearInterval(IntervalID);


function displayTime(){
    time=new Date();
    console.log(time);
    document.getElementById('time').innerHTML=time;

}
setInterval(displayTime,2000);