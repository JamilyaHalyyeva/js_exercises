let squareRoots = (sqr) => {
  var result = [];
  for (let i = 0; i < sqr.length; i++) {
    result.push(Math.sqrt(sqr[i]));
  }
  return result;
};
console.log(squareRoots([1, 4, 9]));
console.log(squareRoots([16,25, 36]));
console.log(squareRoots([49, 64, 81]));
