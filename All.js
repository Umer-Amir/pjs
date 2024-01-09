// Task 1
function calculateSum(num1, num2) {
    // Add two numbers and return the result
    return num1 + num2;
  }
// Task 2
function findMaxNumber(arr) {
    // Initialize max to the first element of the array
    let max = arr[0];
  
    // Loop through the array to find the maximum element
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  }
// Task 3
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for accurate comparison
    const cleanStr = str.replace(/\s/g, '').toLowerCase();
    
    // Reverse the cleaned string and compare it with the original
    return cleanStr === cleanStr.split('').reverse().join('');
  }
// Task 4
function reverseString(str) {
    // Use the split, reverse, and join methods to reverse the string
    return str.split('').reverse().join('');
  }
// Task 5
function filterEvenNumbers(arr) {
    // Use the filter method to create a new array with only even numbers
    return arr.filter(num => num % 2 === 0);
  }
// Task 6
function calculateFactorial(num) {
    // Initialize result to 1
    let result = 1;
    
    // Multiply numbers from 1 to num
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    
    return result;
  }
// Task 7
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    // Check for divisibility from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
// Task 8
function findLargestInNestedArray(arr) {
    let largest = -Infinity;
    
    // Loop through the nested arrays
    for (let subArray of arr) {
      for (let num of subArray) {
        if (num > largest) {
          largest = num;
        }
      }
    }
    
    return largest;
  }
// Task 9
function generateFibonacciSequence(n) {
    const fibonacci = [0, 1];
    
    while (fibonacci.length < n) {
      const next = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
      fibonacci.push(next);
    }
    
    return fibonacci;
  }
// Task 10
function toTitleCase(str) {
    // Split the string by space and capitalize the first letter of each word
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
  }
// Task 11
function debounce(func, delay) {
    let timeout;
    
    return function() {
      const context = this;
      const args = arguments;
      
      clearTimeout(timeout);
      
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }
// Task 12
function sortByKeyAscending(arr, key) {
    return arr.slice().sort((a, b) => a[key] - b[key]);
  }
// Task 13
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
// Task 14
function calculateFactorialRecursive(num) {
    if (num <= 1) {
      return 1;
    }
    return num * calculateFactorialRecursive(num - 1);
  }
// Task 15
function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
    
    return mergedArray.concat(arr1.slice(i), arr2.slice(j));
  }
// Task 16
function isAlphanumeric(char) {
    return /^[0-9a-zA-Z]$/.test(char);
  }
  
  function isPalindromeIgnoringCase(str) {
    const cleanedStr = str.toLowerCase().split('').filter(isAlphanumeric).join('');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }
// Task 17
class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertAtBeginning(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    insertAtEnd(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    insertAtPosition(data, position) {
      const newNode = new Node(data);
      if (position === 0) {
        newNode.next = this.head;
        this.head = newNode;
        return;
      }
      let current = this.head;
      let index = 0;
      while (current && index < position - 1) {
        current = current.next;
        index++;
      }
      if (!current) {
        console.error('Position out of range.');
        return;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  
    deleteAtPosition(position) {
      if (!this.head) {
        console.error('List is empty.');
        return;
      }
      if (position === 0) {
        this.head = this.head.next;
        return;
      }
      let current = this.head;
      let index = 0;
      while (current && index < position - 1) {
        current = current.next;
        index++;
      }
      if (!current || !current.next) {
        console.error('Position out of range.');
        return;
      }
      current.next = current.next.next;
    }
  }
// Task 18
function flattenArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
  }
// Task 19
function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
  }
// Task 20
function generateFibonacciWithMemoization(n, memo = {}) {
    if (n in memo) {
      return memo[n];
    }
  
    if (n <= 1) {
      return n;
    }
  
    memo[n] = generateFibonacciWithMemoization(n - 1, memo) + generateFibonacciWithMemoization(n - 2, memo);
    return memo[n];
  }
// Task 1
function isPalindrome(str) {
    // Remove spaces and convert to lowercase for accurate comparison
    const cleanedStr = str.replace(/\s/g, '').toLowerCase();
    
    // Reverse the cleaned string and compare it with the original
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
// Task 2
function reverseString(str) {
    let reversed = '';
    
    // Iterate backward and append characters to reversed
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    
    return reversed;
  }
// Task 3
function findMinMax(arr) {
    if (arr.length === 0) {
      return { smallest: undefined, largest: undefined };
    }
    
    let smallest = arr[0];
    let largest = arr[0];
    
    for (let num of arr) {
      if (num < smallest) {
        smallest = num;
      }
      if (num > largest) {
        largest = num;
      }
    }
    
    return { smallest, largest };
  }
// Task 4
function getUniqueElements(arr) {
    return [...new Set(arr)];
  }
// Task 5
function calculateFactorial(num) {
    if (num <= 1) {
      return 1;
    }
    
    let factorial = 1;
    
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    
    return factorial;
  }
// Task 6
function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
// Task 7
function calculateSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
// Task 8
function countCharacterOccurrences(str) {
    const charCount = {};
    
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    
    return charCount;
  }
// Task 9
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
// Task 10
function sortArrayAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
// Task 11
function reverseWordsInSentence(sentence) {
    return sentence.split(' ').reverse().join(' ');
  }
// Task 12
function isPalindromeIgnoreWhitespaceAndPunctuation(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
// Task 13
function findLargestDifference(arr) {
    if (arr.length < 2) {
      return null;
    }
    
    let min = arr[0];
    let maxDifference = arr[1] - arr[0];
    
    for (let i = 1; i < arr.length; i++) {
      maxDifference = Math.max(maxDifference, arr[i] - min);
      min = Math.min(min, arr[i]);
    }
    
    return maxDifference;
  }
// Task 14
function removeDuplicatesKeepUnique(arr) {
    return [...new Set(arr)];
  }
// Task 15
function calculateFactorial(num) {
    if (num <= 1) {
      return 1;
    }
    return num * calculateFactorial(num - 1);
  }
// Task 16
function flattenNestedArray(arr) {
    return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenNestedArray(toFlatten) : toFlatten), []);
  }
// Task 17
function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();
    
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
  }
// Task 18
function findSecondSmallest(arr) {
    if (arr.length < 2) {
      return null;
    }
    
    let smallest = Infinity;
    let secondSmallest = Infinity;
    
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
    
    return secondSmallest;
  }
// Task 19
function generateRandomAlphanumericString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    
    return result;
  }
// Task 20
function intToRoman(num) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = '';
    
    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += romans[i];
        num -= values[i];
      }
    }
    
    return result;
  }
    // Task 21
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
// Task 22
function findMaxNumber(arr) {
    return Math.max(...arr);
  }
// Task 23
function getUniqueElements(arr) {
    return [...new Set(arr)];
  }
// Task 24
function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
  }
// Task 25
function sortStringsAlphabetically(arr) {
    return arr.slice().sort();
  }
// Task 26
function findIndex(arr, target) {
    const index = arr.indexOf(target);
    return index === -1 ? -1 : index;
  }
// Task 27
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
  }
// Task 28
function mergeArraysAlternating(arr1, arr2) {
    const merged = [];
    const maxLength = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) {
        merged.push(arr1[i]);
      }
      if (i < arr2.length) {
        merged.push(arr2[i]);
      }
    }
    
    return merged;
  }
// Task 29
function findSecondLargest(arr) {
    if (arr.length < 2) {
      return null;
    }
    
    let largest = -Infinity;
    let secondLargest = -Infinity;
    
    for (let num of arr) {
      if (num > largest) {
        secondLargest = largest;
        largest = num;
      } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
      }
    }
    
    return secondLargest !== -Infinity ? secondLargest : null;
  }
// Task 30
function groupElementsByCondition(arr, conditionFn) {
    const groups = {};
    
    for (let element of arr) {
      const key = conditionFn(element);
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(element);
    }
    
    return groups;
  }

  


//Basic JavaScript Coding Questions:

// Write a JavaScript function to calculate the sum of two numbers.
// Write a JavaScript program to find the maximum number in an array.
// Write a JavaScript function to check if a given string is a palindrome.
// Write a JavaScript program to reverse a given string.
// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// Write a JavaScript program to calculate the factorial of a given number.
// Write a JavaScript function to check if a given number is prime.
// Write a JavaScript program to find the largest element in a nested array.
// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

// Advanced JavaScript Coding Questions:

// Implement a debounce function in JavaScript that limits the frequency of a function's execution when it's called repeatedly within a specified time frame.
// Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.
// Implement a deep clone function in JavaScript that creates a copy of a nested object or array without any reference to the original.
// Write a recursive function to calculate the factorial of a given number.
// Implement a function that takes two sorted arrays and merges them into a single sorted array without using any built-in sorting functions.
// Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case.
// Create a JavaScript class for a linked list with methods to insert a node at the beginning, end, or at a specific position, and to delete a node from a given position.
// Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.
// Write a function that determines if two strings are anagrams of each other.
// Create a JavaScript function that returns the Fibonacci sequence up to a given number, utilizing memoization for optimized performance.

// Common JavaScript Coding Questions:

// Write a function to check if a given string is a palindrome.
// Implement a function to reverse a string without using the built-in reverse() method.
// Given an array of numbers, write a function to find the largest and smallest numbers in the array.
// Write a function that takes an array of integers as input and returns a new array with only the unique elements.
// Implement a function to find the factorial of a given number.
// Write a function that determines if a given number is prime or not.
// Implement a function to find the sum of all the numbers in an array.
// Given a string, write a function to count the occurrences of each character in the string.
// Implement a function to remove duplicates from an array.
// Write a function that sorts an array of numbers in ascending order.

// Tricky JavaScript Coding Questions:

// Write a function that reverses the order of words in a sentence without using the built-in reverse() method.
// Implement a function that checks if a given string is a palindrome, ignoring whitespace and punctuation.
// Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.
// Implement a function that removes duplicates from an array, keeping only the unique elements.
// Write a function that accepts a number and returns its factorial.
// Implement a function that flattens a nested array into a single-dimensional array.
// Write a function that checks if a given string is an anagram of another string.
// Implement a function that finds the second smallest element in an array of integers.
// Write a function that generates a random alphanumeric string of a given length.
// Implement a function that converts a number to its Roman numeral representation.

// JavaScript Array Coding Questions:

// Write a function that returns the sum of all numbers in an array.
// Implement a function that finds the maximum number in an array.
// Write a function that returns a new array containing only the unique elements from an input array.
// Implement a function that returns the average value of numbers in an array.
// Write a function that sorts an array of strings in alphabetical order.
// Implement a function that finds the index of a specific element in an array, returning -1 if not found.
// Write a function that removes all falsy values from an array.
// Implement a function that merges two arrays into a single array, alternating elements from each array.
// Write a function that finds the second largest number in an array.
// Implement a function that groups elements in an array based on a given condition.