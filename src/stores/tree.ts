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
            } else {
                this.left.addNode(node);
            }
        } else {
            if (this.right === null) {
                this.right = node;
            } else {
                this.right.addNode(node);
            }
        }
    }
}

type BinaryTree = {
    root: TreeNode | null;
};

class Node {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
};

class Edge {
    id: string;
    source: string;
    target: string;

    constructor(id:string, source: string, target: string) {
        this.id = id;
        this.source = source;
        this.target = target;
    }
};

export const useTreeStore = defineStore("trees", {
    state: () => ({
        tree: {
            root: null,
        } as BinaryTree,
        graphdisplay: {
            nodes: [] as Node[],
            edges: [] as Edge[]
        }
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
        },

        async deleteGraph() {
            this.graphdisplay.nodes = [];
            this.graphdisplay.edges = [];
        },

        async generateDisplayTree() {
            // Read the tree in preorder and for each node do the following:
            // 1. If the node is the root, create a node with the value of the node, and id = 0
            // 2. create a node with the value of the node, and an id
            // 3. create an edge from the parent to the node

            this.deleteGraph();
            let id = 0;
            let edgeid = 0;

            const traverse = (node: TreeNode | null, parent: string | null) => {
                if (node !== null) {
                    const currentNodeId = "Treenode" + id.toString();
                    this.graphdisplay.nodes.push(new Node(currentNodeId, node.value.toString()));
                    if (parent !== null) {
                        this.graphdisplay.edges.push(new Edge("Edge" + edgeid.toString(), parent.toString(), currentNodeId));
                        edgeid++;
                    }
                    id++;
                    if (node.left !== undefined) {
                        traverse(node.left, currentNodeId);
                    }
                    if (node.right !== undefined) {
                        traverse(node.right, currentNodeId);
                    }
                }
            };

            if (this.tree !== undefined) {
                traverse(this.tree.root, null);
            }
            console.log("generated graph ", this.graphdisplay);
        },

        async getGraphDisplay() {
            return this.graphdisplay;
        },

        async generateFromPostorderAndInorder(postorder: number[], inorder: number[]) {
            // The last element in the postorder is the root of the tree
            // Find the root in the inorder list
            // The elements to the left of the root in the inorder list are the left subtree
            // The elements to the right of the root in the inorder list are the right subtree
            // The number of elements in the left subtree is the same as the number of elements in the left subtree in the postorder list
            // The number of elements in the right subtree is the same as the number of elements in the right subtree in the postorder list
            // Recursively build the left and right subtrees

            const buildTree = (postorder: number[], inorder: number[]) => {
                if (postorder.length === 0) {
                    return null;
                }
                const root = postorder[postorder.length - 1];
                const rootIndex = inorder.indexOf(root);
                const leftInorder = inorder.slice(0, rootIndex);
                const rightInorder = inorder.slice(rootIndex + 1);
                const leftPostorder = postorder.slice(0, leftInorder.length);
                const rightPostorder = postorder.slice(leftInorder.length, postorder.length - 1);
                const node = new TreeNode(root);
                node.left = buildTree(leftPostorder, leftInorder);
                node.right = buildTree(rightPostorder, rightInorder);
                return node;
            };

            this.tree.root = buildTree(postorder, inorder);
        }
    },
});
