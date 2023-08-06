let funkyCaps = (str) => {
  var res = "";
  for (let i = 0; i < str.length; i++) {
    res += i % 2 == 1 ? str.charAt(i).toUpperCase() : str.charAt(i);
  }

  return res;
};
console.log(funkyCaps("hello word "));
console.log(funkyCaps(" Write a function that takes a string and returns the same string but with every second letter capitalized."));

