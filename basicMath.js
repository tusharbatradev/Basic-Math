// Define the number
let n = 7789;

// Initialize an array to store the extracted digits
let extractedDigits = [];
let count = 0;
let reverseNum = 0; 
let dup = n;

// Loop until the number is greater than zero
while (n > 0) {
  let lastDigit = n % 10;
  n = Math.floor(n / 10);
  count++;
  extractedDigits.push(lastDigit);
  reverseNum = reverseNum * 10 + lastDigit; 
}

if(dup === reverseNum){
  console.log(true)
} else{
  console.log(false)
}
extractedDigits.reverse();

console.log(
  'Extracted Digits : ',extractedDigits,
  'Count of Extracted Digits is',count,
  'Reverse Number is',reverseNum
);

