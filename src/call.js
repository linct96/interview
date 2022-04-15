function myCall(context) {
  // 将 context 包装为对象。
  var ctx = context ? Object(context) : window
  // 挂载函数到 context 上。
  // 如果 _fn 已经存在，可以利用 hasOwnProperty 检测，保存之前的函数。
  ctx._fn = this
  var args = []
  // arguments[0] 为上下文，所以从 index = 1 开始
  for (var i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']')
  }
  // 字符串拼接会自动调用 args 的 toString 方法。
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
