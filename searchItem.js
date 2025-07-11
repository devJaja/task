const num = [1, 2, 3, 4, 5, 6];
//using buildIn method includes

function searchUsingBuiltIn(arr, target) {
  return arr.includes(target);
}

console.log(searchUsingBuiltIn(num, 5));

//using custom method

function searchUsingCustomMethod(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log(searchUsingCustomMethod(num, 3));