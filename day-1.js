let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");
let part3 = document.getElementById("part3");
let part4 = document.getElementById("part4");
let messageParagraph = document.getElementById("messageParagraph");

function day1Part1() {
  let playerOne;
  playerOne = {};
  playerOne.name = prompt("What is your name?");
  playerOne.hiScore = prompt("What is your all time hi-score?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  playerOne.bestTime = prompt("What is you best best play time?");

  // Try it!
  // TODO: add the answer to the new question here.
  messageParagraph.innerHTML = `Hi, ${playerOne.name}! Can you beat your hi score of ${playerOne.hiScore}? Can you beat you best play time of ${playerOne.bestTime}?`;

}

part1.onclick = day1Part1;


function day1Part2() {
  let customer = {};
  customer.name = prompt("What is your name?");
  customer.address = prompt("What is your address?");
  // Try it!
  // TODO: add a new question for the player. Assign the answer to the playerOne Object.
  customer.phoneNumber = prompt("What is your phone number?");

  // Try it!
  // TODO: add the answer to the new question to the innerHTML statment below.
  messageParagraph.innerHTML = `Hi, ${customer.name}! Your current address is ${customer.address}. Your phone number is ${customer.phoneNumber}.`;
}
part2.onclick = day1Part2;


function day1Part3() {
  let pet;
  pet = {};

  // Try it!
  // TODO: create a prompt to ask about a pet
  pet.type = prompt("What kind of pet do you have?");
  pet.name = prompt("What is your pets name?");
  // Try it!
  // TODO: make a message based on the answers to the prompt.
  messageParagraph.innerHTML = `You have a ${pet.type} named ${pet.name}.`;
}
part3.onclick = day1Part3;


// Try it!
// TODO: add your own idea for a prompt. Use an object to store the user's response.
function day1Part4() {
  alert("hello!");
  let hobbies;
  hobbies = {};

  hobbies.type = prompt("What are your hobbies?");
  
  messageParagraph.innerHTML = `In your free time you enjoy ${hobbies.type}.`
}

part4.onclick = day1Part4;