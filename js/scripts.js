// Business Logic

// function wordCounter(text) {
//     if (text.trim().length === 0){
//       return 0;
//     }
//     else {
//       let wordCount = 0;
//       const textArray = text.split(" ");
//       textArray.forEach(function(word){
//       if (!Number(word));
//         wordCount++;
//     });
//   return wordCount;
// }

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