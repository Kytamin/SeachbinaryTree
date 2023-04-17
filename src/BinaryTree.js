"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var Treenode_1 = require("./Treenode");
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
        this.totalNode = 0;
    }
    BinaryTree.prototype.getSize = function () {
        return this.totalNode;
    };
    BinaryTree.prototype.inorder = function (node) {
        if (node) {
            console.log(node.data);
            if (node.left) {
                this.inorder(node.left);
            }
            if (node.right) {
                this.inorder(node.right);
            }
        }
    };
    BinaryTree.prototype.insert = function (data) {
        if (!this.root) {
            this.root = new Treenode_1.TreeNode(data);
            this.totalNode++;
            return this.root;
        }
        else {
            var node = new Treenode_1.TreeNode(data);
            var currentNode = this.root;
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node;
                        break;
                    }
                    currentNode = currentNode.left;
                }
                else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node;
                        break;
                    }
                    currentNode = currentNode.right;
                }
            }
            this.totalNode++;
            return currentNode;
        }
    };
    BinaryTree.prototype.SearchValue = function (value) {
        var currentNode = this.root;
        while (currentNode) {
            if (currentNode.data === value) {
                return currentNode;
            }
            if (value < currentNode.data) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
        }
        console.log("is not found");
        return null;
    };
    BinaryTree.prototype.delete = function (value) {
        var currentValue = this.SearchValue(value);
        if (!currentValue) {
            return true;
        }
        else if (currentValue) {
            this.SearchValue(value).data = null;
            currentValue.right = currentValue;
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
