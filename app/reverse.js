module.exports = function(arr) {
  var i, res;
 if (arr.length < 2) {
   return arr;
 } else {
   res = [];
   for (i = arr.length - 1; i >= 0; i--) {
     res.push(arr[i]);
   }
   return res;
 }
};
