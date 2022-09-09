let current_num = 0;
let sum = 0;
let previous_sum = 0;

let arr=[4,7,9]
for(let i=0; i<arr.length; i++){
  n=arr[i]
for (current_num; current_num <= n; current_num++) {
  previous_sum = sum;
  sum = current_num + previous_sum;
}

console.log(sum);
}