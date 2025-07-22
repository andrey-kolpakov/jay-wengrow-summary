const array = [3, 5, 6, 1, 0, 10, 20, 15, 17]

function bubbleSort(arr) {
    let sorted = false

    while (!sorted) {
        sorted = true

        for (let i = 0; i <= arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const tempElement = arr[i]

                arr[i] = arr[i + 1]
                arr[i + 1] = tempElement

                sorted = false
            }
        }
    }
}

bubbleSort(array)
console.log(array)

