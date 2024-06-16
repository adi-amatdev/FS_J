// let firstnamw= "john";
// let age = 22;
// let isMarried = false;

// if (isMarried){
//     console.log(firstnamw+" is married.")
// }else{
//     console.log(firstnamw+" is not married")
// }
// let i=0;
// while (i != 1000){
//     console.log(i);
//     i++;
// }

// even numbers in an array

// let array_of_numbers = [2,34,56,7,1,4,7,2,5,989,4543,1]

// // for (let i =0; i< array_of_numbers.length;i++) if (array_of_numbers[i]%2 ==0 ) console.log(array_of_numbers[i])

// //biggest number in array
// let big = -999;
// for (let i=0 ; i< array_of_numbers.length;i++) if (array_of_numbers[i] > big ) big = array_of_numbers[i];

// console.log(big)


// const people = [
//         {
//             firstname: "saki",
//             gender: "male",
//             metadata: {
//                 age:10,
//                 address: "11"
//             }
//         },
//         {
//             firstname: "Maesh",
//             gender: "male"
//         }
// ]
// for (let index = 0; index < people.length; index++) {
//     console.log(people[index].firstname)    
// }
// console.log(people[0].metadata.address)
//reversing numbers 
// array_of_numbers.reverse()

// console.log(array_of_numbers)

// let a =10;

// function add(a){
//     a++;
//     console.log(a)
// }
// add(a)
// console.log(a)

// let sum =0;
// for (let i=0; i<1000000000000; i++){
//     sum+= i;
// }

// console.log(sum)

// function sum(num1, num2,fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }
// sum(1,2,displayResultPassive)
// You are only allowed to call one function after this
// How will you displayResult of a sum


//substring 
//console.log("".substring(2,8))
const array = [1,2,3,4,5]
let sum =0;
function dosa(element){
    sum+=element;
}
array.forEach(dosa);
console.log(sum)

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
    }
}
let cat = new Animal("CAt");
console.log(cat.speak())