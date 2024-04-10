import { defineStore } from "pinia";

class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    addNode(node: TreeNode) {
        if (node.value < this.value) {
            if (this.left === null) {
                this.left = node;
                return "l,";
            } else {
                return "l," + this.left.addNode(node);
            }
        } else {
            if (this.right === null) {
                this.right = node;
                return "r,";
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
        async insertNode(node: number) {
            if (this.tree.root === null) {
                this.tree.root = new TreeNode(node);
                return "";
            } else {
                return this.tree.root.addNode(new TreeNode(node));
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
                    traverse(node.left);
                    traverse(node.right);
                }
            };
            traverse(this.tree);
            return result;
        },

        async inOrderTraversal() {
            const result: number[] = [];
            const traverse = (node: TreeNode | null) => {
                if (node !== null) {
                    traverse(node.left);
                    result.push(node.value);
                    traverse(node.right);
                }
            };
            traverse(this.tree);
            return result;
        },

        async postOrderTraversal() {
            const result: number[] = [];
            const traverse = (node: TreeNode | null) => {
                if (node !== null) {
                    traverse(node.left);
                    traverse(node.right);
                    result.push(node.value);
                }
            };
            traverse(this.tree);
            return result;
        },

        async consolelogtree() {
            console.log(this.tree);
        }
    },
});
