// Code your solutions in this file
function writeCards(array,message) {
  let response = [];
  for (let i = 0;  i <array.length ; i++ ){
    response.push(`Thank you, ${array[i]}, for the wonderful ${message} gift!`);
  }
  return response
}

console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));

function countDown(num){
  while (num >= 0){
    console.log(num--);
  }
}

countDown(10);