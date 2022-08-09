function isAllUpper(text) {
  // your code here
  if (!text) {
    return false;
  }
  console.log(text === text.toUpperCase());
  return text;
}

console.log(isAllUpper(""));
