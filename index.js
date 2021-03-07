
const cards = [];
function writeCards(names, event) {
    for (let i = 0; i < names.length; i++ ) {
    
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
}
return cards;
}

function countDown(){
    let countdown = 10;
    while (countdown >= 0) {
        console.log(countdown--);
    }
} 
countDown(10);