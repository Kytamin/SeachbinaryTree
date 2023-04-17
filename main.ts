import {BinaryTree} from "./src/BinaryTree";

let tree = new BinaryTree<number>();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);

console.log(`The numbers of nodes ${tree.totalNode}`)
console.log(tree.root)
tree.delete(7)
console.log(tree.SearchValue(7))
console.log(tree)



