// Define the number
let n = 7789;

// Initialize an array to store the extracted digits
let extractedDigits = [];

let count = 0;

// Loop until the number is greater than zero
while (n > 0) {
  let lastDigit = n % 10;

  n = Math.floor(n / 10);

  count = count + 1;

  extractedDigits.push(lastDigit);
}

extractedDigits.reverse();

console.log('Extracted Digits : ',extractedDigits, 'Count of Extracted Digits is', count); 
