// JavaScript for the app
const inputTextB2A = document.querySelector('#input-text-base16-to-ascii');
const outputTextB2A = document.querySelector('#output-text-base16-to-ascii');
const convertButtonB2A = document.querySelector('#convert-button-base16-to-ascii');

convertButtonB2A.addEventListener('click', () => {
    // Get the input text
    const input = inputTextB2A.value;

    // Convert the input text to ASCII
    let output = '';
    for (let i = 0; i < input.length; i += 2) {
        const base16 = input.substring(i, i + 2);
        const charCode = parseInt(base16, 16);
        const ascii = String.fromCharCode(charCode);
        output += ascii;
    }

    // Update the output text
    outputTextB2A.value = output;
});