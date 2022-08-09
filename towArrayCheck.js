/* // javascript ** mean it is power operator

function meetArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (i = 0; i < arr1.length; i++) {
    const currentIndex = arr2.indexOf(arr1[i] ** 2);

    if (currentIndex === -1) {
      return false;
    }
    arr2.splice(currentIndex, 1);
  }
  return true;
}

console.log(meetArray([2, 4, 2], [4, 16, 36])); */

/* function compareFun(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let sequenceCounter1 = {};
  let sequenceCounter2 = {};

  for (let val of arr1) {
    //n
    sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1;
  }
  for (let val of arr2) {
    //n
    sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1;
  }

  // console.log(sequenceCounter1, sequenceCounter2);

  for (let key in sequenceCounter1) {
    if (!(key ** 2) in sequenceCounter2) {
      return false;
    }
    console.log(sequenceCounter2[key ** 2], sequenceCounter1[key]);
    if (sequenceCounter2[key ** 2] !== sequenceCounter1[key]) {
      return false;
    }
  }
}
// compareFun([2, 3, 4], [4, 9, 16]);
console.log(compareFun([2, 3, 4], [4, 9, 16]));
 */

function compareFun(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};

  for (let val of arr1) {
    obj1[val] = obj1[val] + 1 || 1;
  }
  for (let val of arr2) {
    obj2[val] = obj2[val] + 1 || 1;
  }

  for (let key in obj1) {
    if (!(key ** 2) in obj2) {
      return false;
    }

    if (obj2[key ** 2] !== obj1[key]) return false;
  }

  return true;
}
console.log(compareFun([2, 3, 4], [9, 4, 16]));
