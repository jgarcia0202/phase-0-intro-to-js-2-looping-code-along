// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(string, event) {
    let letters = []
    for (let count = 0; count < string.length; count++) {
        letters.push(`Thank you, ${string[count]}, for the wonderful ${event} gift!`)
    }
    return letters;
}
function countDown(numNum) {
    let count = numNum;
    while (0 <= numNum) {
        console.log(numNum --);
    }
}
countDown(numNum);