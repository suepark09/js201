// Write a function "longLongVowels" which is given a string, and returns a
// version of that string extending any long vowels to 5 characters.
//
// Examples:
// > longLongVowels('Good')
// 'Goooood'
// > longLongVowels('Cheese')
// 'Cheeeeese'
// > longLongVowels('Man')
// 'Man'

function longvowels(str) {

	if(str.includes("ee") === true ) {
	return str.replace("ee", "eeeee")
	} else if (str.includes("oo") === true) {
	return str.replace("oo", "ooooo")
	} else if (str.includes("uu") === true) {
	return str.replace("uu", "uuuuu")
	} else {
        return str
    }

}