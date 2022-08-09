// Break mane oikhanei shes and continue mane hocche oita bad e continue hbe
const temperature = [10, -1, 20, 30, 50, "error", 5, 2, 4];

function getHigherAndLowest(arr) {
  let higherNum = arr[0];
  let lowestNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") break;

    if (higherNum < arr[i]) {
      higherNum = arr[i];
    }

    if (lowestNum > arr[i]) {
      lowestNum = arr[i];
    }
  }

  console.log(higherNum - lowestNum);
}

getHigherAndLowest(temperature);
