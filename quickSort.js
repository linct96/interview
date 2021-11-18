// 快速排序
const quickSort = (arr) => {
  if(arr.length<=1) return arr
  let centerIndex = Math.floor(arr.length/2)
  let centerValue = arr.splice(centerIndex,1)[0]
  const leftArr = []
  const rightArr = []
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]>centerValue) {
      rightArr.push(arr[index])
    }else{
      leftArr.push(arr[index])
    }
  }
  return [...quickSort(leftArr),centerValue,...quickSort(rightArr)]
}