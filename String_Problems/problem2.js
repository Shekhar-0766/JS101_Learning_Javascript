//Problem 2 : Given an array of string count the overall total number of characters

let arr=["Ram", "Shyam", "Mohan", "Albart", "Shivam"];
let count=0;

for(let i=0; i<arr.length; i++){
  for(let j=0; j<arr[i].length; j++){
    count++;
  }
}
console.log(count);