//Алгоритм бинарного поиска

const array = [0, 3, 5, 7, 11, 14, 18, 22, 23, 25, 30]

function binarySearch(arr, searchNumber) {
    let lowRange = 0
    let highRange = arr.length - 1

    while (lowRange <= highRange) {
        let currentMidline = Math.floor((lowRange + highRange) / 2)

        if (searchNumber === arr[currentMidline]) {
            console.log('Найдено под индексом', currentMidline)

            return arr[currentMidline]
        }

        if (searchNumber > arr[currentMidline]) {
            lowRange = currentMidline + 1
        } else {
            highRange = currentMidline - 1
        }
    }
}

binarySearch(array, 18)
binarySearch(array, 3)
binarySearch(array, 30)
binarySearch(array, 14)