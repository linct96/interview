const myBind = (ctx) => {
  const self = this
  const args = [...arguments].slice(1)

  const nullFn = function(){}
  const bindFn = function(){
    const realCtx = this instanceof self ? this : ctx
    return _self.apply(realCtx, args.concat(Array.prototype.slice.call(arguments)))
  }

  // 维护原型关系
  if (this.prototype) {
    nullFn.prototype = this.prototype;
  }

  bindFn.prototype = new fnNop();

}
const obj = {}
const foo = function(){}

const bindFoo = foo.bind(obj)