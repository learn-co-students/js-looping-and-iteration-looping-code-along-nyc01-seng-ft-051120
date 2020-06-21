// Code your solutions in this file
function writeCards(name){
   let msg=[];
   let i=0;
while(i<name.length){

msg.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
i++;
}
return msg;
}

function countDown(number){

    for(let i=number; i>=0; i--){
        console.log(i);
    }
}