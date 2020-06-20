// Code your solutions in this file
function writeCards(names, event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        name = names[i];
        newArray.push(`Thank you, ${name}, for the wonderful ${event} gift!`); 
    }
    return newArray;
}

function countDown(num){
    let i = 0;
    while (i <= num) {
        console.log(i);
        i++;
    }
}