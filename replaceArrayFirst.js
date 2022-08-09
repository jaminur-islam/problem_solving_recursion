function replaceFirst(text) {
  // your code here
  const arrFirst = text[0];
  console.log([...text, arrFirst].slice(1));
}

console.log(replaceFirst([]));
