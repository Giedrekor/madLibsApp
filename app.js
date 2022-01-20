"use strict";

// the number of unique replacements = number of questions
let numberOfQuestions = 11;

// current question
let currentQuestion = 0;

// input text
let inputText = `Please enter a`;
let inputArray = [
  `&{inputText}n adjectiv`,
  `&{inputText} noun (clothing)`,
  `&{inputText} noun`,
  `&{inputText} noun`,
  `&{inputText} noun`,
  `&{inputText} verb`,
  `&{inputText} noun (food)`,
  `&{inputText} noun (food)`,
  `&{inputText} noun (drink)`,
  `&{inputText} verb`,
  `&{inputText} plural noun`,
];

// user Inputs
let userInputs = [];

// story
let originalStory = `<h2>A Trip to the Beach</h2>
<p>Summer trips to the beach are so ${userInputs[0]}! Pack your ${userInputs[1]}, a ${userInputs[2]} to dry yourself off, and ${userInputs[3]} to prevent sunburn. Be sure to bring a ${userInputs[4]} to ${userInputs[5]} with in the water, too. You can bring a beach picnic, with ${userInputs[6]}, ${userInputs[7]} and ${userInputs[8]}. It's fun to ${userInputs[9]} for hours in the water, and to see ${userInputs[10]} sail past in the distance.</p>`;

console.log(userInputs);
console.log(originalStory);


/* let originalStory = `A Trip to the Beach
Summer trips to the beach are so xxx! Pack your xxx, a xxx to dry yourself off, and xxx to prevent sunburn. Be sure to bring a xxx to xxx with in the water, too. You can bring a beach picnic, with xxx, xxx and xxx. It's fun to xxx for hours in the water, and to see xxx sail past in the distance.`; */
