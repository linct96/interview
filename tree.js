// 先序遍历
function preOrderTraversal(root) {
  if (root != null) {
    console.log(root.data);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
  }
}

// 中序遍历
function inOrderTraversal(root) {
  if (root != null) {
    inOrderTraversal(root.left);
    console.log(root.data);
    inOrderTraversal(root.right);
  }
}

// 后序遍历
function postOrderTraversal(root) {
  if (root != null) {
    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log(root.data);
  }
}