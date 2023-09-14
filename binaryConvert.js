// JavaScript for the app
const binaryinputText = document.querySelector('#binary-input-text');
const binaryoutputText = document.querySelector('#binary-output-text');
const binaryconvertButton = document.querySelector('#binary-convert-button');

binaryconvertButton.addEventListener('click', () => {
  // Get the input text
  const input = binaryinputText.value;

  // Split the input text into an array of binary strings
  const inputArray = input.split(' ');

  // Convert the binary strings to ASCII
  let output = '';
  inputArray.forEach((binary) => {
    output += String.fromCharCode(parseInt(binary, 2));
  });

  // Update the output text
  binaryoutputText.value = output;
});
