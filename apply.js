const myApply = (ctx=window,...args) => {
  const symbol = Symbol()
  ctx[symbol] = this
  const params = args[0] || []
  const result = params.length ? context.fn(...params) : context.fn()
  delete ctx[symbol]

  return result
}

