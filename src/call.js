const myCall = (ctx=window,...args) => {
  const symbol = Symbol()
  ctx[symbol] = this
  const result = args.length ? context.fn(...args) : context.fn()
  delete ctx[symbol]

  return result
}

Function.prototype.myCall = myCall
