function myApply(context, arr) {
  var ctx = Object(context) || window
  ctx._fn = this
  var result
  if (arr) {
    var args = []
    for (let i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']')
    }
    result = eval('context._fn(' + args.toString() + ')')
  } else {
    result = ctx._fn()
  }
  delete ctx._fn

  return result
}

Function.prototype.myApply = myApply

const a = {
  value: 3
}

function add(v1 = 0, v2 = 0) {
  return this.value + v1 + v2
}

const result = add.myApply(a, [1, 2])
console.log(result)
