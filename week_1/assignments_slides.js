//counter for js

// function fnToCall(){
//     let date =new Date();
//     let hours= date.getHours().toString().padStart(2,'0');
//     let minutes = date.getMinutes().toString().padStart(2,'0'); 
//     let seconds = date.getSeconds().toString().padStart(2,'0');

//     console.log(hours+":"+minutes+":"+seconds);
// }

// setInterval(fnToCall, 1*1000);

//count down from 30

// let count = 30;

// function countdown(){
//     console.log(count);
//     count --;

//     if(count < 0){
//         clearInterval(timer);
//         console.log("Countdown over!");

//     }

// }
// const timer = setInterval(countdown,1000);

//setTimeout calls

// let start_time =0, end_time =0;

// function fnToCall(){
//     end_time = performance.now()
//     elapsed_time = (end_time - start_time)/1000;
//     console.log("Functioncalled; time taken: "+elapsed_time.toFixed(5));
// }
// start_time = performance.now();
// setTimeout(fnToCall,0);

//read from file

// const fs = require("fs");

// fs.readFile("FS_J/week_1/a.txt","utf-8",function(err, data){
//    if(err != null) {console.log(err);}
//    console.log(data);
// });

// console.log("Hello world");

//promises

function promisefunc(){
    return new Promise(function(cb){
        cb("this is a message");
    })
}

function callbackname(msf){
    console.log(msf);
}

async function main(){
    var a = await promisefunc();
    console.log(a);
}