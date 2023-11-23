function isPalindroma(sentence) {
    const cleanedString = sentence.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reverseString = cleanedString.split('').reverse().join('');
    return reverseString === cleanedString
}

const inputString = "race a car";
console.log(isPalindroma(inputString))