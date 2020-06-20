// Code your solutions in this file



function writeCards(namesArray, event) {
    let message = []
    for (let i = 0; i < namesArray.length; i++ ) {
        message.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)

    }
    return message
}

function countDown(number) {
    while (number >= 0 ) {
        console.log( number );
        number -= 1;
    }
}

