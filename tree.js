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
  const res = []
  stack.push(root);
  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.value)
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res
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

function postOrderTraversal(root){
  const stack = [];
  const res = []
  stack.push(root);
  while (stack.length) {
    const cur = stack.pop();
    res.push(cur.value)
    if (cur.right) {
      stack.push(cur.right);
    }
    if (cur.left) {
      stack.push(cur.left);
    }
  }
  return res
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
