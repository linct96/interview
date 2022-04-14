// DFS 通用遍历树的迭代解法
function treeTraversal(node) {
  const UN_VISITED = 0; // 未访问
  const VISITED = 1; // 已访问
  const res = [];
  const stack = [[UN_VISITED, node]]; // 定义初始访问栈
  while (stack.length) {
    const [flag, node] = stack.pop();
    if (!node) continue; // 跳过无子节点的叶节点的两个 null 节点
    if (flag === UN_VISITED) {
      // 先、中、后序遍历仅需要控制入栈的顺序即可
      stack.push([UN_VISITED, node.right]);
      stack.push([VISITED, node]);
      stack.push([UN_VISITED, node.left]);
    } else {
      res.push(node.val);
    }
  }
  return res;
}

// DFS 通用遍历树的递归解法
function treeTraversalRecurse(node, res) {
  if (!node) return;
  treeTraversalRecurse(node.left, res);
  res.push(node.val);
  treeTraversalRecurse(node.right, res);
}
const result = [];
treeTraversalRecurse(root, result);

// BFS
function treeLevelOrder(root) {
  const result = [];
  if (!root) return result;
  const queue = [root];
  let levelNodes = [];
  while (queue.length) {
    const size = queue.length; // 需要定义一个常量记住现有的队列长度。因为 node 的子节点会有入队操作使得 queue 的长度改变
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
      levelNodes.push(node.val);
    }
    result.push(levelNodes);
    levelNodes = [];
  }
  return result;
}

//【先序遍历】递归
function preOrderTraversalRecurse(root) {
  if (!root) return;
  console.log(root.value);
  preOrderTraversalRecurse(root.left);
  preOrderTraversalRecurse(root.right);
}
//【先序遍历】迭代
function preOrderTraversal(root) {
  const stack = [];
  const res = [];
  stack.push(root);
  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.value);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res;
}

//【中序遍历】递归
function inOrderTraversalRecurse(root) {
  if (!root) return;
  inOrderTraversalRecurse(root.left);
  console.log(root.value);
  inOrderTraversalRecurse(root.right);
}

//【中序遍历】迭代
function inOrderTraversal(root) {
  if (!root) return;
  const stack = [];
  let temp = root;
  while (stack.length || temp) {
    while (temp) {
      stack.push(temp);
      temp = temp.left;
    }
    const cur = stack.pop();
    console.log(cur.val);
    temp = cur.right;
  }
}

// 后序遍历
function postOrderTraversalRecurse(root) {
  if (root !== null) {
    postOrderTraversalRecurse(root.left);
    postOrderTraversalRecurse(root.right);
    console.log(root.value);
  }
}

function postOrderTraversal(root) {
  const stack = [];
  const res = [];
  stack.push(root);
  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.value);
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res;
}

//        1
//      /   \
//     2     3
//    / \   / \
//   4  5  6  7
const mockTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
};

postOrderTraversal(mockTree);

function traversal(root) {
  const res = [];
  const stack = [[0, root]];
  while (stack.length) {
    const [flag, node] = stack.pop();
    if (!node) {
      continue;
    }
    if (flag) {
      res.push(node.val);
    } else {
      stack.push([0, node.right]);
      stack.push([0, node.left]);
      stack.push([1, node]);
    }
  }
  return res;
}