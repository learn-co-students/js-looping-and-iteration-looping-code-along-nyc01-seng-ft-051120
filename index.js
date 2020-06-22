let thankYouMessages = []

function writeCards(names, event) {
   for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
   }
   return thankYouMessages
}

function countDown(number) {
   let i = number;
   while (i > -1) {
      console.log(i--);
   }
}
