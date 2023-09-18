// JavaScript for the app
const inputTextB16 = document.querySelector('#input-text-ascii-to-base16');
const outputTextB16 = document.querySelector('#output-text-ascii-to-base16');
const convertButtonB16 = document.querySelector('#convert-button-ascii-to-base16');

convertButtonB16.addEventListener('click', () => {
    // Get the input text
    const input = inputTextB16.value;

    // Convert the input text to base16
    let output = '';
    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        const base16 = charCode.toString(16);
        output += base16;
    }

    // Update the output text
    outputTextB16.value = output;
});