/* function getString(str) {
  let charList = {};
  // console.log("no space ", str.replace(/ /g, ""));
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if ((char === " ") | (char === "!")) continue;
    if (charList[char] > 0) {
      charList[char]++;
    } else {
      charList[char] = 1;
    }
  }
  return charList;
}

console.log(getString("abcdeffgg!! what"));
 */

function getString(str) {
  const charList = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === " " || char === "!") continue;
    if (charList[char] > 0) {
      charList[char] = charList[char] + 1;
    } else {
      charList[char] = 1;
    }
  }
  return charList;
}

console.log(
  getString("aabbccdd dslfjdkjfkd jfkd! bkdsjfk ! kdjfkldsjfklsdjfkljsdaf ")
);
