
function sumOfNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumOfNumbers([4,6,7,8,9]));


function findTheBiggest(array) {
    let theBiggest = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > theBiggest) {
            theBiggest = array[i];
        }
    }
    return theBiggest;
}
console.log(findTheBiggest([3, 5, 6, 7, 8]))



function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        let lastDigit = number % 10;
        sum += lastDigit;
        number = Math.floor(number / 10);
    }
    return sum;
}
console.log(sumOfDigits(912))



function mostRepeatedNumber(numbers) {
    let mostRepeatedNum;
    let maxCount = 0;

    for (let i = 0; i < numbers.length; i++) {
        let existNum = numbers[i];
        let count = 0;
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] === existNum) {
                count++;
            }
        }
        if (count > maxCount) {
            mostRepeatedNum = existNum;
            maxCount = count;
        }
    }

    return mostRepeatedNum;
}

console.log(mostRepeatedNumber([3, 4, 7, 8, 4, 9, 4, 2]));
