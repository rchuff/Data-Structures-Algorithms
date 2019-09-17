class BinarySearchTree {
    constructor(){
        this.root = null;
    }

//     //Iteratively
//     insert(value){
//         let newNode = new Node(value);
//         if (!this.root) {
//             this.root = newNode;
//             return this;
//         }
//         let node = this.root;
//         while (node){
//             console.log(value);
//             console.log(node.value);
//             if (value >= node.value){
//                 if (!node.right){
//                     node.right = newNode;
//                     return this;
//                 } else {
//                     node = node.right;
//                 }

//             }
//             else if (value < node.value){
//                 if (!node.left){
//                     node.left = newNode;
//                     return this;
//                 } else {
//                     node = node.left;
//                 }
//             }
//         }
//     }

    //Recursively
    insert(value){
        let node = this.root;
        let newNode = new Node(value);
        if (!node) {
            this.root = newNode;
            return this;
        } else {
            const recurseSearch = function(node){
                if (value >= node.value){
                    if (!node.right){
                        node.right = newNode;
                        return this;
                    } else {
                        return recurseSearch.call(this,node.right);
                    }
                } else if (value < node.value){
                    if (!node.left){
                        node.left = newNode;
                        return this;
                    } else {
                        return recurseSearch.call(this,node.left);
                    }
                }
            }
            return recurseSearch.call(this, node);
        }
    }

    find(value){
        if (!this.root) return false;
        let node = this.root;
        const recurseSearch = node => {
            if (value === node.value) return true;
            else if (value >= node.value){
                if (!node.right) return false;
                else return recurseSearch.call(this,node.right);
            } else if (value < node.value){
                if (!node.left) return false;
                else return recurseSearch.call(this,node.left);
            }
        }

        return recurseSearch(node);
    }

    bfs(){
        if (!this.root) return null;
        let queue = [];
        let visited = [];
        let node = this.root;
        queue.push(this.root);
        const recurseSearch = node => {
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            let visitedNode = queue.shift();
            visited.push(visitedNode.value);
            if (queue.length === 0) return visited;
            return recurseSearch(queue[0]);
        }
        return recurseSearch(node);
    }

    preorder(){
        if (!this.root) return null;
        let visited = [];
        let node = this.root;
        const recurseSearch = node => {
            visited.push(node.value);
            if (node.left) recurseSearch(node.left);
            if (node.right) recurseSearch(node.right);
        }
        recurseSearch(node);
        return visited;
    }

    postorder(){
        let visited = [];
        let node = this.root;
        const recurseSearch = node => {
            if (node.left) recurseSearch(node.left);
            if (node.right) recurseSearch(node.right);
            visited.push(node.value);
        }
        recurseSearch(node);
        return visited;
    }

    inorder(){
        let visited = [];
        let node = this.root;
        const recurseSearch = node => {
            if (node.left) recurseSearch(node.left);
            visited.push(node.value);
            if (node.right) recurseSearch(node.right);
        }
        recurseSearch(node);
        return visited;
    }

}



class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
