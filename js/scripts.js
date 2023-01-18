// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0){
      return 0;
    }
    else {
      let wordCount = 0;
      const textArray = text.split(" ");
      textArray.forEach(function(word){
      if (!Number(word));
        wordCount++;
    });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (word === text) {
    return 1;
  }
  return 0;
}