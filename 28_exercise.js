let removeFirstLetters = (str) => {
  str = str.split(" ");
  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].slice(1) + str[i].substring(1);
  }

  return str.join(" ");
};
console.log(removeFirstLetters("hello world"));
console.log(
  removeFirstLetters(
    "Write a function that takes a string and returns a string with the first letter of each word removed."
  )
);
