// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse (string) {
    let splitString = string.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function longestWord(str) {
    let array = str.split(" ");
    let longestWordLength = 0;
    let longestWord = null; 
	
	for(let i = 0; i < array.length; i++) {

		if(array[i].length > longestWordLength) {
        longestWordLength = array[i].length;
        longestWord = array[i];
        } 
    }
    return longestWord;
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
function nicer(str) {
  
    let strArray = str.split(" ")

    for(let i = 0; i <= words.length; i++ ) {
        let meanWords = ['heck', 'darn', 'dang', 'crappy']
        let meanWord = meanWords[i]

        for(let j = 0; j <= strArray.length; j++) {
            let strWord = strArray[j]

            if(strWord === meanWords) {
                let newArray = [];
                newArray = strArray.push("pewp")

            }
    
        }
        return newArray
    }

    
    


}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
function capitalizeAll(str) {
    let array = str.split(" ");
    let capitalizedWord = null; 
    let newSentence = [];
    

    for(let i = 0; i < array.length; i++) {
        capitalizedWord = array[i].charAt(0).toUpperCase() + array[i].slice(1); 
        newSentence.push(capitalizedWord);
    }
    return newSentence
}



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
//use find and replace


