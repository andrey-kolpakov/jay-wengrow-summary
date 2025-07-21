//Алгоритм линейного поиска

const array = [0, 3, 5, 7, 11, 14, 18, 22, 23, 25, 30]

function linearSearch(arr, searchNumber){
    array.forEach((element, index) => {
        if (element === searchNumber){
            console.log(searchNumber, 'найден на индексе', index)

            return searchNumber
        }
    })
}

linearSearch(array, 18)
linearSearch(array, 3)
linearSearch(array, 30)
linearSearch(array, 14)