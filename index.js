let sumOfSquare = 0;

for (let index = 1; index <= 100; index++) {
    sumOfSquare += index*index;
}


let squareOfSum = 0;

for (let index = 1; index <= 100; index++) {
    squareOfSum += index;
}

console.log(squareOfSum*squareOfSum);
console.log(sumOfSquare);
console.log(squareOfSum*squareOfSum - sumOfSquare);
