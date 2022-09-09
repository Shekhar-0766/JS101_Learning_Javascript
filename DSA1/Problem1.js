let current_num = 0;
let sum = 0;
let previous_sum = 0;

let n = 5;
for (current_num; current_num <= n; current_num++) {
  previous_sum = sum;
  sum = current_num + previous_sum;
  current_num = current_num + 1;
}
console.log(sum);