// 大顶堆
class MaxHeap {
  constructor(arr) {
    this.heap = []
    if (arr) {
      arr.forEach(value => this.insert(value))
    }
  }

  swap = (i, j) => {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  insert(value) {
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1)
  }

  delMax = () => {
    if (!this.heap.length) return null
    if (this.heap.length === 1) return this.heap.pop()
    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.bubbleDown(0)
    return max
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2)
    if (parentIndex < 0) return
    if (this.heap[parentIndex] < this.heap[index]) {
      this.swap(parentIndex, index)
      this.bubbleUp(parentIndex)
    }
  }

  bubbleDown(index) {
    const value = this.heap[index]
    const leftIndex = 2 * index + 1
    const rightIndex = 2 * index + 2
    const length = this.heap.length
    let temp = value
    let tempIndex = index
    if (leftIndex <= length) {
      const left = this.heap[leftIndex]
      if (temp < left) {
        temp = left
        tempIndex = leftIndex
      }
    }
    if (rightIndex <= length) {
      const right = this.heap[rightIndex]
      if (temp < right) {
        temp = right
        tempIndex = rightIndex
      }
    }
    if (tempIndex !== index) {
      this.swap(index, tempIndex)
      this.bubbleDown(tempIndex)
    }
  }

  value = () => this.heap
}

const heap = new MaxHeap([1, 7, 8, 2, 6, 8, 0])
console.log(heap.value())
