const array = [3, 5, 6, 1, 0, 10, 301, 20, 15, 17, 200, 301]

function greatestNumberLinear(array) {
    let greatestNumber = 0

    for (let i of array) {
        if(array[i] > greatestNumber) {
            greatestNumber = array[i]
        }
    }

    return greatestNumber
}

console.log(greatestNumberLinear(array))