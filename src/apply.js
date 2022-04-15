function myApply(context, arr) {
  // 将 context 包装为对象。
  var ctx = Object(context) || window
  // 挂载函数到 context 上。
  // 如果 _fn 已经存在，可以利用 hasOwnProperty 检测，保存之前的函数。
  ctx._fn = this
  var result
  if (arr) {
    var args = []
    for (let i = 0; i < arr.length; i++) {
      args.push('arr[' + i + ']')
    }
    // 字符串拼接会自动调用 args 的 toString 方法。
    result = eval('context._fn(' + args + ')')
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
