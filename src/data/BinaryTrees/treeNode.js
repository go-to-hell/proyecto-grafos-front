class TreeNode {
  constructor(val, l, r) {
    this.value = val;
    this.left = l;
    this.right = r;
  }

  toString() {
    return "Node[" + this.value + ", " + this.left + ", " + this.right + "]";
  }
}

export default TreeNode;
