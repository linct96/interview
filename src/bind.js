function myBind(ctx) {
  var fn = this
  // 校验是否被函数调用
  if (typeof fn !== 'function') throw new Error()
  // 获取剩余参数
  var args = Array.prototype.slice.call(arguments, 1)

  var noop = function () {}

  var bindFn = function () {
    // 区分被 new 时，this 的指向
    var realCtx = this instanceof bindFn ? this : ctx
    var bindFnArgs = Array.prototype.slice.call(arguments)
    return fn.apply(realCtx, args.concat(bindFnArgs))
  }

  // 将原函数的原型指向绑定函数的原型
  noop.prototype = this.prototype
  bindFn.prototype = new noop()

  return bindFn
}

Function.prototype.myBind = myBind

const obj = {
  name: 'obj'
}
const foo = function (a, b) {
  this.name = this.name ? this.name : ''
  console.log(this.name + a + b)
}

const bindFoo = foo.myBind(obj)
bindFoo('c', 'd')
