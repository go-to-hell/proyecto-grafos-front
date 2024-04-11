import TreeNode from "./treeNode";

class BinaryTree {
  constructor(root) {
    this.root = root;
  }

  search(searchedValue, tempRoot) {
    if (tempRoot === null || tempRoot.value === searchedValue) {
      return tempRoot;
    } else {
      if (searchedValue < tempRoot.value) {
        return this.search(searchedValue, tempRoot.left);
      } else {
        if (searchedValue > tempRoot.value) {
          return this.search(searchedValue, tempRoot.right);
        }
      }
    }
    return tempRoot;
  }

  insert(insertValue, tempRoot) {
    if (insertValue <= tempRoot.value) {
      if (tempRoot.left === null) {
        tempRoot.left = new TreeNode(insertValue, null, null);
      } else {
        this.insert(insertValue, tempRoot.left);
      }
    } else {
      if (insertValue > tempRoot.value) {
        if (tempRoot.right === null) {
          tempRoot.right = new TreeNode(insertValue, null, null);
        } else {
          this.insert(insertValue, tempRoot.right);
        }
      }
    }
  }

  delete(deleteValue, tempRoot) {
    if (tempRoot === null) {
      return null;
    } else {
      if (deleteValue < tempRoot.value) {
        tempRoot.left = this.delete(deleteValue, tempRoot.left);
        return tempRoot;
      } else {
        if (deleteValue > tempRoot.value) {
          tempRoot.right = this.delete(deleteValue, tempRoot.right);
          return tempRoot;
        } else {
          if (tempRoot.left === null && tempRoot.right === null) {
            return null;
          } else {
            if (tempRoot.left === null) {
              return tempRoot.right;
            } else {
              if (tempRoot.right === null) {
                return tempRoot.left;
              } else {
                let rightTree = this.lift(tempRoot, tempRoot.right);
                tempRoot.value = rightTree.value;
                tempRoot.right = this.delete(tempRoot.value, tempRoot.right);
                return tempRoot;
              }
            }
          }
        }
      }
    }
  }

  lift(deleteNode, tempRoot) {
    if (tempRoot.left === null) {
      return tempRoot;
    } else {
      return this.lift(deleteNode, tempRoot.left);
    }
  }

  printPreOrder(tempRoot) {
    if (tempRoot !== null) {
      console.log(tempRoot.value);
      this.printPreOrder(tempRoot.left);
      this.printPreOrder(tempRoot.right);
    }
  }

  printInOrder(tempRoot) {
    if (tempRoot !== null) {
      this.printInOrder(tempRoot.left);
      console.log(tempRoot.value);
      this.printInOrder(tempRoot.right);
    }
  }

  printPostOrder(tempRoot) {
    if (tempRoot !== null) {
      this.printPostOrder(tempRoot.left);
      this.printPostOrder(tempRoot.right);
      console.log(tempRoot.value);
    }
  }

  equalTreesSV(tempRoot1, tempRoot2) {
    if (tempRoot1 === null && tempRoot2 === null) {
      return true;
    }
    if (tempRoot1 === null || tempRoot2 === null) {
      return false;
    }
    if (tempRoot1.value !== tempRoot2.value) {
      return false;
    }
    return (
      this.equalTreesSV(tempRoot1.left, tempRoot2.left) &&
      this.equalTreesSV(tempRoot1.right, tempRoot2.right)
    );
  }

  equalTreesStructure(tempRoot1, tempRoot2) {
    if (tempRoot1 === null && tempRoot2 === null) {
      return true;
    }
    if (tempRoot1 === null || tempRoot2 === null) {
      return false;
    }
    return (
      this.equalTreesStructure(tempRoot1.left, tempRoot2.left) &&
      this.equalTreesStructure(tempRoot1.right, tempRoot2.right)
    );
  }

  countNodes(tempRoot) {
    if (tempRoot === null) {
      return 0;
    }
    let leftCount = this.countNodes(tempRoot.left);
    let rightCount = this.countNodes(tempRoot.right);
    return 1 + leftCount + rightCount;
  }
}

export default BinaryTree;
