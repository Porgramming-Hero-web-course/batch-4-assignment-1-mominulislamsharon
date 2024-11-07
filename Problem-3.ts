function countWordOccurrences(sentence : string, word: string) : number {
  const lowerCaseSentence = sentence.toLowerCase();
  const lowerCaseWord = word.toLowerCase();

  return lowerCaseSentence.split(' ').filter(currentWord => currentWord === lowerCaseWord).length;
}

const result = countWordOccurrences("I love typescript", "typescript") ;
console.log(result);



