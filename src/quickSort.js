// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr
  const left = []
  const right = []
  const centerIndex = Math.floor(arr.length / 2)
  const centerValue = arr.splice(centerIndex, 1)[0]
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > centerValue) {
      right.push(arr[index])
    } else {
      left.push(arr[index])
    }
  }
  return [...quickSort(left), centerValue, ...quickSort(right)]
}

const arr = [1, 7, 8, 2, 6, 8, 0]
const result = quickSort(arr)
console.log(result)
