import {Tree} from "../interface/Tree";
import {TreeNode} from "./Treenode";

export class BinaryTree<T> implements Tree<T> {
    root: TreeNode<T> | null;
    totalNode: number;

    constructor() {
        this.root = null;
        this.totalNode = 0;
    }

    getSize(): number {
        return this.totalNode
    }

    inorder(node: TreeNode<T>|null): void {
        if(node){
            console.log(node.data)
            if(node.left){
                this.inorder(node.left)
            }
            if(node.right){
                this.inorder(node.right)
            }
        }
    }

    insert(data: T): TreeNode<T>|null{
        if (!this.root) {
            this.root = new TreeNode<T>(data)
            this.totalNode++
            return this.root
        } else {
            let node = new TreeNode<T>(data)
            let currentNode = this.root
            while (currentNode) {
                if (data < currentNode.data) {
                    if (!currentNode.left) {
                        currentNode.left = node
                        break;
                    }
                    currentNode = currentNode.left
                } else if (data > currentNode.data) {
                    if (!currentNode.right) {
                        currentNode.right = node
                        break;
                    }
                    currentNode = currentNode.right
                }
            }
            this.totalNode++
            return currentNode
        }

    }
    SearchValue(value:T):TreeNode<T>{
        let currentNode= this.root
        while (currentNode){
            if(currentNode.data===value){
                  return currentNode
            }
            if(value<currentNode.data){
                currentNode=currentNode.left
            }else {
                currentNode=currentNode.right
            }

        }
        console.log(`is not found`)
        return null
    }
  delete(value:T):boolean|void{
        let currentValue=this.SearchValue(value)
        if(!currentValue){
            return true
        }else if(currentValue){
            currentValue.data=null
        }
  }


}
