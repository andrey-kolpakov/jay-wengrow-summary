const arrayWithDublicate = [3, 5, 6, 1, 0, 10, 20, 15, 15, 17]
const arrayWithoutDublicate = [3, 5, 6, 1, 0, 10, 20, 15, 17]

function checkArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                return true
            }
        }
    }
    return false
}

console.log(checkArray(arrayWithDublicate))
console.log(checkArray(arrayWithoutDublicate))
