"use strict";

// number of replacements
let numberOfQuestions = 10;

// current question
let questionCounter = 0;

// input text
let inputText = `Please enter a`;
let questionArray = [
  `${inputText}n adjectiv`,
  `${inputText} noun (clothing)`,
  `${inputText} noun`,
  `${inputText} noun`,
  `${inputText} noun`,
  `${inputText} verb`,
  `${inputText} noun (food)`,
  `${inputText} noun (food)`,
  `${inputText} noun (drink)`,
  `${inputText} verb`,
  `${inputText} plural noun`,
];

for (let i = numberOfQuestions; i >= 0; i--) {
  // console.log(i);
  // console.log(questionCounter++);
  console.log(
    questionArray[questionCounter] + `(${numberOfQuestions} questions left)`
  );
  questionCounter++;
  numberOfQuestions--;
}

// array ao user inputs
let userInputs = [];

// story text
let originalStory = `<h2>A Trip to the Beach</h2><p>Summer trips to the beach are so ${userInputs[0]}! Pack your ${userInputs[1]}, a ${userInputs[2]} to dry yourself off, and ${userInputs[3]} to prevent sunburn. Be sure to bring a ${userInputs[4]} to ${userInputs[5]} with in the water, too. You can bring a beach picnic, with ${userInputs[6]}, ${userInputs[7]} and ${userInputs[8]}. It's fun to ${userInputs[9]} for hours in the water, and to see ${userInputs[10]} sail past in the distance.</p>`;

console.log(originalStory);
