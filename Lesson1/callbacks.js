//Callback functions

function myDisplayer(message) {
  document.getElementById("message").innerHTML = message;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

//Sequence of execution is last called function.
myFirst();
mySecond();
myFirst();


//Example 2

function myCalculator(num1, num2){
 let sum = num1 * num2;
 return sum; // or you can call myDisplayer directly w/ sum as an arguement.
}

let result = myCalculator(5, 5);
myDisplayer(result)