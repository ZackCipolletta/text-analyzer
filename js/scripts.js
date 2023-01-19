// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

//Business Logic
//check function works
function wordCounter(text) {
  if (isEmpty(text)) {
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
  if (isEmpty(text)) {
    return 0;
  }
  const textArray = text.split(" ");
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

function textToArray(input){
  const textArray = input.split(" ");
  return textArray;
}

function numberOfOccurrencesInText(param1) {
  const arrayOfParam1 = param1.split(" ");
  //const arrayOfParam2 = param2.split(" ");
  let emptyArray = [];
  let param1Array = [];
  arrayOfParam1.forEach(function(element1) { 
    let wordCount = 0;
    if(!param1Array.includes(element1)){
      param1Array.push(element1);
      arrayOfParam1.forEach(function(element2){
        if(element1.includes(element2)) {
          wordCount ++;
        }
      })
      emptyArray.push([element1, wordCount]);
    }
  });
  console.log(emptyArray);
}

function doesThisContainOffensiveWords(text) {
  textToArray(text); //split the text into an array
  let returnArray = [];
  textArray.forEach(orgText => returnArray.push(checkWordAgainstOffensiveWords(orgText))); //for each word in the text, run a check function
  return returnArray.join(' ');
}

// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  textToArray(text).forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textToArray(text).length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;

  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}


window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});
