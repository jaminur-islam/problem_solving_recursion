const maxArea = function (arr) {
  let totalWater = 0;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      let height = Math.min(arr[i], arr[j]);
      let width = j - i;

      console.log(i, j, "width =", width, "hight=", height);
      let currentWater = height * width;
      totalWater = Math.max(currentWater, totalWater);
    }
  }
  return totalWater;
};

console.log(maxArea([1, 8, 10, 2, 5, 4, 8, 3, 7]));
