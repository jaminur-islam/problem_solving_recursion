const countZero = (num) => {
  const myArr = num.toString().split("");
  let len = myArr.length - 1;
  let count = 0;
  for (i = len; i >= 0; i--) {
    if (myArr[i] === "0") {
      count++;
    } else {
      break;
    }
  }

  return count;
};

console.log(countZero(1001111000));

/* let a = 111111111111100,
  b,
  count = 0;
while (a > 0) {
  b = a % 10;
  if (b == 0) {
    count++;
  } else {
    break;
  }
  a = parseInt(a / 10);
}
console.log("count number of zero", count);  */

const checkZero = (value) => {
  let a = value,
    b;
  let count = 0;
  if (value === 0) {
    count++;
    return count;
  }

  while (a > 0) {
    b = a % 10;
    console.log(b);

    if (b === 0) {
      count++;
    } else {
      break;
    }
    a = a / 10;
  }
  return count;
};

console.log(checkZero(0));
