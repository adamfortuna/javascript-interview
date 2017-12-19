module.exports = function(arr) {
  var reversedArr = [];
  while(arr.length > 0) {
    reversedArr.push(arr.pop());
  }
  return reversedArr;
};
