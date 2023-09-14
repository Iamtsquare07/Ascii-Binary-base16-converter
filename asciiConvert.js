// JavaScript for the app
const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');
const convertButton = document.querySelector('#convert-button');

convertButton.addEventListener('click', () => {
  // Get the input text
  const input = inputText.value;

  // Convert the input text to binary
  let output = '';
  for (let i = 0; i < input.length; i++) {
    output += input[i].charCodeAt(0).toString(2) + ' ';
  }

  // Update the output text
  outputText.value = output;
});
