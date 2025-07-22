const arrayWithDublicate = [3, 5, 6, 1, 0, 10, 20, 15, 15, 17]
const arrayWithoutDublicate = [3, 5, 6, 1, 0, 10, 20, 15, 17]

function checkArray(arr) {
    let existingNumbers = []

    for (let i = 0; i < arr.length; i++) {
        if (existingNumbers[arr[i]] === 1) {
            return true
        } else {
            existingNumbers[arr[i]] = 1
        }
    }
    return false
}

console.log(checkArray(arrayWithDublicate))
console.log(checkArray(arrayWithoutDublicate))
