// Code your solutions in this file
function writeCards(names, event) { 
    let thankYouCards = []
    for (let i = 0; i < names.length; i++) {
        thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!` );
    }
    return thankYouCards;
}
// function countDown(number) {
//     let i = 0;
//     let myArray = []; 
//     while ( i < (number + 1)) {
//         myArray.push(i);
//         i++;
//     }
//     let o = 0;
//     while ( o < myArray.length ) {
//         console.log(`${myArray[(myArray.length - o)]}`);
//         o++;
//     }
// }
function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }