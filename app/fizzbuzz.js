module.exports = function(print) {
  for(var i=1; i<=10; i++) {
    if((i%3 === 0) && (i%5 === 0)) {
      print("FizzBuzz");
    } else if(i%5 === 0) {
      print("Buzz");
    } else if(i%3 === 0) {
      print("Fizz");
    } else {
      print(i);
    }
  }
}
