// Print the sum of all the multiples of 3 from 0 to the given limit

let sum=0;
let i=0;

let limit=30;

while(i<=limit){
  if(i%3==0){
    sum=sum+i;
  }
  i++;
}
console.log(sum);