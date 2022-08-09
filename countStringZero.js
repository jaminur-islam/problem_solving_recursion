const newZero = (text) => {
  let num = text.split("");
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === "0") {
      count++;
    } else {
      break;
    }
  }

  return count;
};

console.log(newZero("0000"));
