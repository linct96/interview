// 多次触发后至少需要隔一定的时间内允许执行一次
const throttle = (fn,delay) => {
  let timer = null
  return function(...args){
    if (timer) return 
    timer = setTimeout(() => {
      fn.apply(this,args)
      clearTimeout(timer)
    }, delay);
  }
}
