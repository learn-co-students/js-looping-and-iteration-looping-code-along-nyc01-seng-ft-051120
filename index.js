// Code your solutions in this file

// 

function writeCards( namesArray, event ) {
    // functions perform the same function as Ruby's 'methods'

    let thankYouCards = []
        // create new empty array, to be returned at the end of this function

    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  
  function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }