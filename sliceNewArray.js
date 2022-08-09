const newArr = (text, b) => {
  const len = text.length - 1;
  let n = [];
  if (!text.length || text[0] === b) {
    return text;
  }
  for (let i = len; i > 0; i--) {
    if (!text.join("").includes(b)) {
      n = text;
    }
    if (text[i] === b) {
      n = text.slice(i);
    }
  }
  return n;
};

console.log(newArr([7, 7, 7, 7, 7, 7, 7, 7, 7], 7));
