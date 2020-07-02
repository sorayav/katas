'use strict';

// Challenge 1:

function songDecoder(song){
  const regex = /WUB/gi;
  return song.split(regex).filter(songs => songs.length !== 0).join(' ');
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));

// Challenge 2

function makeNegative(num) {
  //Previous: return num > 0 ? parseFloat('-'.concat(num.toString())) : num
  return num > 0 ? -num : num;
}

console.log(makeNegative(0.00001));

// Challenge 3 

function persistence(num) {
  let result = 0;
  num = [...num+''];

  while (num.length > 1) {
    num = String([...num].reduce((a, b) => a * b));
    result++;
  }
  return result;
}

console.log(persistence(39));

// Challenge 4

function validatePIN (pin) {
  const regex =  /^\d+$/;
  return pin.match(regex) && (pin.length === 4 || pin.length === 6) ? true : false;
}

console.log(validatePIN('-1.234'));

// Challenge 5

// function highAndLow(numbers){
//   let sortNumbers = numbers.split(' ').sort((a,b) => b-a);
//   sortNumbers.splice(1, sortNumbers.length -2);
//   const string = sortNumbers.toString().split(',').join(' ');
//   return string.includes(' ') ? string : `${string} ${string}`;
// }

// Another easier solution for Challenge 5:

function highAndLow(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

console.log(highAndLow("42"));