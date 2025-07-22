const array = [3, 5, 6, 1, 0, 10, 20, 15, 15, 17]

function choiceSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimalIndex = i

        for (let j = 1 + 1; j < arr.length; j++) {
            if (arr[minimalIndex] > arr[j]) {
                minimalIndex = j
            }
        }

        [arr[i], arr[minimalIndex]] = [arr[minimalIndex], arr[i]]
    }
}

choiceSort(array)
console.log(array)