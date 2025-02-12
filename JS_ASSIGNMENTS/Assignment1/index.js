// 1. Check if a String is a Palindrome
function isPalindrome(str) {
  // replacing non-alphanumeric
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();

  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] === str[str.length - i - 1]) {
      return true;
    }
    return false;
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal, panama"));
console.log(isPalindrome("Hello World"));

// 2. Reverse a String
function reversingStr(str) {
  return str.split("").reverse().join("");
}
console.log(reversingStr("I am a boy"));

//  3. Find the Longest Palindromic Substring
function longestPalindromeSubstring(str) {
  let longest = "";
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let subStr = str.slice(i, j);
      if (isPalindrome(subStr) && subStr.length > longest.length) {
        longest = subStr;
      }
    }
  }
  return longest;
}
console.log(longestPalindromeSubstring("babad"));

// 4. Check if Two Strings are Anagrams
function areAnagrams(str1, str2) {
  str1 = str1.replace(/[^0-9a-z]/gi, "").toLowerCase();
  str2 = str2.replace(/[^0-9a-z]/gi, "").toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(areAnagrams("Listen", "silent"));
console.log(areAnagrams("Hello", "World"));

// 5. Remove Duplicates from a String
function removeDuplicate(str) {
  let result = "";
  for (let char of str) {
    if (!result.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log(removeDuplicate("programming"));

// 6. Count Palindromes in a String

function countPalindrome(str) {
  let Count = 0;
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
        let subStr = str.slice(i, j);
      if (isPalindrome(subStr)){
        Count++;
      }
    }
  }
  return Count;
}
console.log(countPalindrome("abab"))

// 7. Longest Common Prefix
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];  // Start with the first string as the prefix

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);  // Shorten the prefix by one character
            if (prefix === "") return "";  // No common prefix found
        }
    }

    return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));     // Output: ""
console.log(longestCommonPrefix(["interview", "internet", "internal"]));  // Output: "inter"

// 8. Case Insensitive Palindrome

function isCaseInsensitivePalindrome(str) {
  // replacing non-alphanumeric
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();

  for (let i = 0; i <= str.length / 2; i++) {
    if (str[i] === str[str.length - i - 1]) {
      return true;
    }
    return false;
  }
  return true;
}

console.log(isCaseInsensitivePalindrome("Aba"))
console.log(isCaseInsensitivePalindrome("Hello"))