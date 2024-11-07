function removeDuplicates(num1: number[]): number[] {
  return num1.filter((remove,index) => 
  num1.indexOf(remove) === index
  )
}

const duplicateNumberRemove =(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log(duplicateNumberRemove);