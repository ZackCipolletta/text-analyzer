//Business Logic
//check function works
function wordCounter(text) {
  if (text.trim().length === 0){
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;//pulls wordCount out of two }}?
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  console.log(textArray);
  let wordCount = 0;
  textArray.forEach(function(element) { 
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount ++
    }
  });
  return wordCount;
}  

function checkWordAgainstOffensiveWords(originalWord){
  const offensiveWordsArr = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
  if(offensiveWordsArr.includes(originalWord.toLowerCase())){
    return ("*".repeat(originalWord.length))
  }else{
    return originalWord;
  }
}

function doesThisContainOffensiveWords(text) {
  const textArray = text.split(" "); //split the text into an array
  let returnArray = [];
  textArray.forEach(orgText => returnArray.push(checkWordAgainstOffensiveWords(orgText))); //for each word in the text, run a check function
  return returnArray.join(' ');
}



//UI Logic