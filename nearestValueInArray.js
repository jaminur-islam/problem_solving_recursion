const nearestValue = (values, num) => {
  let arr;
  for (let i = 0; i < values.length; i++) {
    console.log("hi");
    if (values[i] > num) {
      arr = values.splice(i, 0, num);
      console.log(arr);
    }
  }
  return arr;
};

console.log(nearestValue([2, 1], 9));
