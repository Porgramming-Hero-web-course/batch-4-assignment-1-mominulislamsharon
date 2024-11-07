function sumArray(num: number[]): number {
  return num.reduce((sum1, sum2) => 
    sum1 + sum2,0
  )
}

const totalSum = (`Total sum array number: ${sumArray([1, 2, 3, 4, 5])}`);

console.log(totalSum);



