// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0){
      return 0;
    }
    else {
      let wordCount = 0;
      const textArray = text.split(" ");
      textArray.forEach(function(word){
        console.log(wordCount);
      if (parseInt(word) === false) {
        wordCount ++;
        return wordCount;
    }
  });
  
}}

// if text.trim().lenth === 0){
//   return 0;
// }
// else {

// }