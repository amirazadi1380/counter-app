var myScore = document.getElementById("score")
var myIncrease = document.getElementById("inc")
var myReset = document.getElementById("res")
var myDecrease = document.getElementById("dec")
var number = 0;

myIncrease.addEventListener('click', () =>{
   number++;
   myScore.innerHTML = number;
})
myReset.addEventListener('click', () =>{
   number = 0;
   myScore.innerHTML = number;
})
myDecrease.addEventListener('click', () =>{
   number--;
   myScore.innerHTML = number;
})