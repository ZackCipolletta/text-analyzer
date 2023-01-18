Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0
  actual output: 1 

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

## Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I Like red, green and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

## Describe: checkWordAgainstOffensiveWords()

Test: "It should check if two strings are matched and return a result based on that"
Code: 
const replaceableWord = "wow"
const checkingWord = "notWow"
Expected Output: "Not match"

Test: "It should check if two strings are matched and return a result based on that"
Code: 
const replaceableWord = "WOW"
const checkingWord = "wow"
Expected Output: "match"

Test: "It should check if two strings are matched, if they don't then return the word we're checking, otherwise if they do match, return *s equal to the number of characters in the word"
Code:
const replaceableWord = "hello"
const checkingWOrd = "hello"
Expected Output: "*****"

Test: "It should check if two strings are matched, if they don't then return the word we're checking, otherwise if they do match, return *s equal to the number of characters in the word"
Code:
const replaceableWord = "frank"
const checkingWOrd = "hello"
Expected Output: "frank"

Test: "It should compare two strings even if one is capatilized"
Code:
const replaceableWord = "HELLO"
const checkingWOrd = "hello"
Expected Output: "*****"



## Describe: doesThisContainOffensiveWords()

Test: "It should take a string and split it at the spaces between words into an array"
Code: 
Const: textArray = "Hello this is a sentence"
Const: textArray = []
Expected Output: ['Hello', 'this', 'is', 'a', 'sentence']


Test: "It should take each word from a sentence in sequence, create an array from the sentence, pass each word (object) in the array to the checkWordAgainstOffensiveWords function, then add the return value from that function them one by one to the empty textArray."
Code: 
Const: textArray = "Hello this is a sentence containing zoinks"
Const: textArray = []
Expected Output: ['Hello', 'this', 'is', 'a', 'sentence', 'containing', '******']

Test: "It should take a sentence, break it down into an array, pass the array elements into checkWordAgainstOffensiveWords, then add each output element to the emtpy textArray array and join them into a single sentence then return the sentene."
Code: 
Const: textArray = "Hello this is a sentence containing zoinks"
Const: textArray = []
Expected Output: 'Hello this is a sentence containing ******'












