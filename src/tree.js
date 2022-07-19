// DFS 通用遍历树的迭代解法（先序、中序、后序）
function treeTraversal(node) {
  const UN_VISITED = 0 // 未访问
  const VISITED = 1 // 已访问
  const res = []
  const stack = [[UN_VISITED, node]] // 定义初始访问栈
  while (stack.length) {
    const [flag, node] = stack.pop()
    if (!node) continue // 跳过无子节点的叶节点的两个 null 节点
    if (flag === UN_VISITED) {
      // 先、中、后序遍历仅需要控制入栈的顺序即可
      stack.push([UN_VISITED, node.right])
      stack.push([UN_VISITED, node.left])
      stack.push([VISITED, node])
    } else {
      res.push(node.val)
    }
  }
  return res
}

// DFS 通用遍历树的递归解法（先序、中序、后序）
function treeTraversalRecurse(node) {
  const result = []
  const recurseFn = node => {
    if (!node) return
    result.push(node.val) // 先、中、后序遍历仅需要控制 push 时机即可
    recurseFn(node.left)
    recurseFn(node.right)
  }
  recurseFn(node)
  return result
}

// BFS 迭代解法
function treeLevelOrder(root) {
  const result = []
  if (!root) return result
  const queue = [root]
  let levelNodes = []
  while (queue.length) {
    // 需要定义一个常量记住现有的队列长度。因为 node 的子节点会有入队操作使得 queue 的长度改变
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      levelNodes.push(node.val)
    }
    result.push(levelNodes)
    levelNodes = []
  }
  return result
}

//        1
//      /   \
//     2     3
//    / \   / \
//   4  5  6  7
const mockTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null
    },
    right: {
      val: 5,
      left: null,
      right: null
    }
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
}

const result = treeLevelOrder(mockTree)
console.log(result)
