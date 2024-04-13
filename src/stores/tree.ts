import { defineStore } from "pinia";

class TreeNode {
    value: number;
    nodeid: string;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number, nodeid: string) {
        this.value = value;
        this.nodeid = nodeid;
        this.left = null;
        this.right = null;
    }

    addNode(node: TreeNode) {
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node;
                return "l," + this.nodeid;
            } else {
                return "l," + this.left.addNode(node);
            }
        } else {
            if (this.right === null) {
                this.right = node;
                return "r," + this.nodeid;
            } else {
                return "r," + this.right.addNode(node);
            }
        }
    }
}

type BinaryTree = {
    root: TreeNode | null;
};

export const useTreeStore = defineStore("trees", {
    state: () => ({
        tree: {
            root: null,
        } as BinaryTree,
    }),

    actions: {
        async insertNode(node: number, nodeid: string) {
            if (this.tree.root === null) {
                this.tree.root = new TreeNode(node, nodeid);
                return "";
            } else {
                return this.tree.root.addNode(new TreeNode(node, nodeid));
            }
        },

        async clearTree() {
            this.tree.root = null;
        },

        async preOrderTraversal() {
            const result: number[] = [];
            const traverse = (node: TreeNode | null) => {
                if (node !== null) {
                    result.push(node.value);
                    if (node.left !== undefined) {
                        traverse(node.left);
                    }
                    if (node.right !== undefined) {
                        traverse(node.right);
                    }
                }
            };
            if (this.tree !== undefined) {
                traverse(this.tree.root);
            }
            return result;
        },

        async inOrderTraversal() {
            const result: number[] = [];
            const traverse = (node: TreeNode | null) => {
                if (node !== null) {
                    if (node.left !== undefined) {
                        traverse(node.left);
                    }
                    result.push(node.value);
                    if (node.right !== undefined) {
                        traverse(node.right);
                    }
                }
            };
            if (this.tree !== undefined) {
                traverse(this.tree.root);
            }
            return result;
        },

        async postOrderTraversal() {
            const result: number[] = [];
            const traverse = (node: TreeNode | null) => {
                if (node !== null) {
                    if (node.left !== undefined) {
                        traverse(node.left);
                    }
                    if (node.right !== undefined) {
                        traverse(node.right);
                    }
                    result.push(node.value);
                }
            };
            if (this.tree !== undefined) {
                traverse(this.tree.root);
            }
            return result;
        },

        async consolelogtree() {
            console.log(this.tree);
        }
    },
});
