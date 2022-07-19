// 多次触发后至少需要隔一定的时间内*不再触发*允许执行一次
const debounce = (fn, delay) => {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}

// 增加immediate参数代表是否首次执行
