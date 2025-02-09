// JavaScript String Practice Questions
// 1. Check String Input
// ○ Write a JavaScript function to check whether an 'input' is a string or not.
function is_string(word) {
  return typeof word === "string";
}
// Test Data:
console.log(is_string("w3resource")); // true
console.log(is_string([1, 2, 4, 0])); // false
// 2. Check Blank String
// ○ Write a JavaScript function to check whether a string is blank or not.
// Test Data:
function is_Blank(word) {
  return word === null || word === undefined || word.trim() === "";
}
console.log(is_Blank("")); // true
console.log(is_Blank("abc")); // false
// 3. String to Array of Words
// ○ Write a JavaScript function to split a string and convert it into an array of words.
function string_to_array(word) {
  return word.trim().split(" ");
}
// ○ Test Data:
console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]
// 4. Extract Characters
// ○ Write a JavaScript function to extract a specified number of characters from a string.
function truncate_string(word, pos) {
  return word.slice(0, pos);
}
// ○ Test Data:
console.log(truncate_string("Robin Singh", 4)); // "Robi"
// 5. Abbreviate Name
// ○ Write a JavaScript function to convert a string into abbreviated form.
function abbrev_name(word) {
  const [firstWord, secondWord] = word.split(" ");
  const abbrevPart = secondWord.slice(0, 1);
  return `${firstWord} ${abbrevPart}.`;
}
// ○ Test Data:
console.log(abbrev_name("Robin Singh")); // "Robin S."
// 6. Hide Email Address
// ○ Write a JavaScript function that hides email addresses to prevent unauthorized
// access.
function protect_email(email) {
  const [user, domain] = email.split("@");
  const visiblePart = user.slice(0, 4); // Show first 4 characters
  return `${visiblePart}...@${domain}`;
}

// Test Data:
console.log(protect_email("robin_singh@example.com")); // Output: robi...@example.com

// 7. Parameterize String
// ○ Write a JavaScript function to parameterize a string.
function string_parameterize(word) {
  return word
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9 -]/g, "")
    .replace(/\s+/g, "-");
}
// ○ Test Data:
console.log(string_parameterize("Robin Singh from USA.")); //
// "robin-singh-from-usa"
// 8. Capitalize First Letter
// ○ Write a JavaScript function to capitalize the first letter of a string.
function capitalize(word) {
  let capitalLetter = word.slice(0, 1).toUpperCase();
  return capitalLetter + word.slice(1);
}
// ○ Test Data:
console.log(capitalize("js string exercises")); // "Js string exercises"
// 9. Capitalize Each Word
// ○ Write a JavaScript function to capitalize the first letter of each word in a string.

const capitalize_Words = (input) => {
  return input
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
// ○ Test Data:
console.log(capitalize_Words("js string exercises")); // "Js String Exercises"
// 10. Swap Case
// ○ Write a JavaScript function that converts uppercase letters to lowercase and vice
// versa.
function swapcase(str) {
  let input = str
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
  return input;
}
// ○ Test Data:
console.log(swapcase("AaBbc")); // "aAbBC"
// 11. Camelize String
// ○ Write a JavaScript function to convert a string into camel case.
function camelize(str) {
  return str
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    })
    .join("");
}
// ○ Test Data:
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"
// 12. Uncamelize String
// ○ Write a JavaScript function to uncamelize a string.
function uncamelize(str, delimiter = " ") {
  return str
    .replace(/([a-z])([A-Z])/g, `$1${delimiter}$2`) // Insert delimiter before uppercase letters
    .toLowerCase(); // Convert entire string to lowercase
}
// Test Data:
console.log(uncamelize("helloWorld")); // "hello world"
console.log(uncamelize("helloWorld", "-")); // "hello-world"
// 13. Repeat String
// ○ Write a JavaScript function to concatenate a given string n times.
function repeat(str, n) {
  return str.repeat(n);
}
// ○ Test Data:
console.log(repeat("Ha!", 3)); // "Ha!Ha!Ha!"
// 14. Insert in String
// ○ Write a JavaScript function to insert a string within another string at a given position.
function insert(str, word, index) {
  if (index < 0 || index > str.length) {
    return "Invalid index";
  }
  return str.slice(0, index) + word + str.slice(index);
}
// Test Data:
console.log(insert("We are doing some exercises.", "JavaScript ", 18));
// ○ // "We are doing some JavaScript exercises."
// 15. Humanize Format
// ○ Write a JavaScript function that formats a number with the correct suffix (1st,
// 2nd, etc.).
function humanize_format(num) {
  const j = num % 10;
  const k = num % 100;

  if (k === 11 || k === 12 || k === 13) {
    return num + "th";
  }

  switch (j) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}
// ○ Test Data:
console.log(humanize_format(301)); // "301st"
// 16. Truncate String with Ellipsis
// ○ Write a JavaScript function to truncate a string and append "...".
function text_truncate(str, length, ending = "...") {
  if (str.length <= length) {
    return str; // No truncation needed if string is shorter than or equal to the desired length
  }
  return str.slice(0, length - ending.length) + ending;
}
// Test Data:
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
// ○ // "We are doing !!"
// 17. Chop String into Chunks
// ○ Write a JavaScript function to chop a string into chunks.
function string_chop(str, n) {
  if (n <= 0) return []; // Edge case: avoid infinite loop for non-positive n
  let result = [];
  
  for (let i = 0; i < str.length; i += n) {
    result.push(str.slice(i, i + n));
  }
  
  return result;
}
// ○ Test Data:
console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]
// 18. Count Substring Occurrences
// ○ Write a JavaScript function to count occurrences of a substring in a string.
function count(str, char) {
  const arr = str.toLowerCase().split(char.toLowerCase());
  return arr.length - 1;
}
// Test Data:
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// ○ // Output: 2
// 19. Reverse Binary Representation
// ○ Write a JavaScript function that reverses the binary representation of a number and returns its decimal form.
function reverse_binary(num) {
  const binaryStr = num.toString(2);

  const reversedBinary = binaryStr.split('').reverse().join('');
  
  return parseInt(reversedBinary, 2);
}
// ○ Test Data:
console.log(reverse_binary(100)); // 19
// 20. Pad String to Length
// ○ Write a JavaScript function to pad a string to a specified length.
function formatted_string(padStr, input, direction) {
  const inputStr = input.toString();
  const padLength = padStr.length;

  if (direction === 'l') {
    // Left padding
    return (padStr + inputStr).slice(-padLength);
  } else if (direction === 'r') {
    // Right padding
    return (inputStr + padStr).slice(0, padLength);
  } else {
    return "Invalid direction! Use 'l' for left or 'r' for right.";
  }
}
// ○ Test Data:
console.log(formatted_string('0000', 123, 'l')); // "0123"
