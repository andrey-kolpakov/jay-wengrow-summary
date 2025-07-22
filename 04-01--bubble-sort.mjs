const array = [3, 5, 6, 1, 0, 10, 20, 15, 17]

function bubbleSort(arr) {
    function checkArray(arr) {
        let result

        for (let i = 0; i <= arr.length - 1; i++) {
            const currentItem = arr[i]
            const nextItem = arr[i + 1]

            if (currentItem > nextItem) {
                arr[i] = nextItem
                arr[i + 1] = currentItem

                result = true
            }
        }

        return result
    }

    while (checkArray(arr)) {}
}

bubbleSort(array)
console.log(array)

