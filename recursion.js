/* function countDown(n) {
 for( i = n ; i> 0; i--){
  console.log(i)
 }
}
countDown(10); */

/* function countDown(n) {
  console.log(n);
  --n;
  if (n > 0) {
    countDown(n);
  }
}
countDown(10); */

// return (n * (n + 1)) / 2;

/* function countDown(n) {
  total = 0;
  for (i = 0; i <= n; i++) {
    total = total + i;
  }
  return total;
}
console.log(countDown(51)); */
/* 
function recursionSum(n) {
  if (n < 0) return 0;

  return n + recursionSum(--n);
}

console.log(recursionSum(10));
 */

//================================== Array recursion ===========================================//
const input = new Array(9000).fill(2);

function sumOfArraySlow(arr) {
  if (arr.length === 0) return 0;
  const rest = arr.slice(1);
  return arr[0] + sumOfArraySlow(rest);
}
// time complexity = big O(n^2)
// space complexity = big O(n)

function sumOfArrayFirst(arr, index) {
  if (arr.length === index) return 0;
  return arr[index] + sumOfArrayFirst(arr, ++index);
}
// time complexity = Big-O(n)
// space complexity = Big-O(n)

const start = Date.now();
console.log(sumOfArrayFirst(input, 0));
const end = Date.now();
console.log("my first time", end - start);

const start2 = Date.now();
console.log(sumOfArraySlow(input, 0));
const end2 = Date.now();
console.log("my slow time", end2 - start2);
