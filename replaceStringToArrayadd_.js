const MaxNum = (text) => {
  const newVal = text.split("");
  if (!newVal.length) {
    return [];
  }
  const arr = [];
  for (let i = 0; i < newVal.length; i++) {
    let v1 = newVal[i];
    let v2 = newVal[++i] || "_";
    arr.push(`${v1}${v2}`);
  }

  return arr;
};

console.log(MaxNum(""));
