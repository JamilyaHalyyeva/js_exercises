let titleCase = (str) => {
    str = str.split(" ");
    for (let i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
  
    return str.join(" ");
  };
  console.log(titleCase("hello world"));
  console.log(
    titleCase(
      "Write a function that takes a string and returns a string with the first letter of each word removed."
    )
  );