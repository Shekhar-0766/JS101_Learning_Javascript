// Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr=[10,12,15,16,18];
let sum=0;
for(let i=0; i<arr.length; i++){
  sum=sum+arr[i];
}
console.log(sum/arr.length);