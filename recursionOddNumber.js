/* function getOddNumber(arr) {
  const oddNumber = [];
  for (let key of arr) {
    if (key % 2 === 0 || key % 1 !== 0) continue;
    oddNumber.push(key);
  }
  return oddNumber;
}

console.log(
  getOddNumber([2, 1.4, 3, 4, 54, 34, 43, 23, 22, 33, 44, 45, 66, 77])
); */

/* function findOddNumber(arr) {
  const oddArray = [];

  function helper(input) {
    if (input.length === 0) return;
    if (input[0] % 2 !== 0) {
      oddArray.push(input[0]);
    }
    helper(input.slice(1));
  }

  helper(arr);
  return oddArray;
}
 */

function findOddNumber(arr) {
  const oddArray = [];
  function helperFun(input) {
    if (input.length === 0) return;
    if (input[input.length - 1] % 2 !== 0) {
      oddArray.push(input[input.length - 1]);
    }
    input.pop();
    helperFun(input);
  }
  helperFun(arr);
  return oddArray;
}

console.log(findOddNumber([2, 3, 4, 12, 33, 33, 44, 55, 656, 6, 66, 6]));

const arr = [10, 20, 5];
console.log(arr.pop());
