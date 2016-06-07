// $(document).ready(function() {
//   $('form#blanks').submit(function(event) {
//     event.preventDefault();
//     var output = [];
//     var prime = 2;
//     var numberArray
//     var userInput = parseInt($('input#number').val());
//     for ( var index = 1; index <= userInput; index += 1 ) {
//       output.push(index);
//     }
//     output.forEach(function(number) {
//       if ( number % prime === 0 )
//       output.splice(number[index], 1);
//       prime += 1
//     });
//     alert(output);
//   });
//
// });

$(document).ready(function(){
  var sieve = function(maxnum){
  var numArr = [];
  var result = [];
  for(var i = 0; i <= maxnum; i++){
    if(i > 1){
      numArr[i] = true;
    }
  }

  for(var i = 2; i < Math.sqrt(maxnum); i++){
    if(numArr[i]){
      for(var j = i * i; j < maxnum; j += i){
        numArr[j] = false;
      }
    }
  }
  for(var i = 2; i < maxnum; i++){
    if(numArr[i]){
      result.push(i);
    }
  }
  console.log(numArr);
  return result;
}

})
