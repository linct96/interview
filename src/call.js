function myCall(context) {
  var ctx = context ? Object(context) : window
  ctx._fn = this
  var args = []
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  var result = eval('ctx._fn(' + args + ')')
  delete ctx._fn

  return result
}

Function.prototype.myCall = myCall

const a = {
  value: 3
}

function add(v1 = 0, v2 = 0) {
  return this.value + v1 + v2
}

const r = add.myCall(a, 1, 2)
console.log(r)
