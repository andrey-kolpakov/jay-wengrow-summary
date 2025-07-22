const array = [3, 5, 6, 1, 0, 10, 20, 15, 17]

function bubbleSort(arr) {
    let sorted = false

    while (!sorted) {
        sorted = true

        arr.forEach((el, index) => {
            if (arr[index] > arr[index + 1]) {
                const tempElement = arr[index]

                arr[index] = arr[index + 1]
                arr[index + 1] = tempElement

                sorted = false
            }
        })
    }
}

bubbleSort(array)
console.log(array)

