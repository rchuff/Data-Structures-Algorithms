class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            newNode.next = oldFirst;
        }
        this.size++;
        return this.size;
    }
    pop(){
        if (this.size === 0) return undefined;
        if (this.size === 1) {
            let popVal = this.first;
            this.first = null;
            this.last = null;
            this.size--;
            return popVal;
        } else {
            let oldFirst = this.first;
            this.first = this.first.next;
            oldFirst.next = null;
            this.size--;
            return oldFirst.val;
        }
    }

}

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

let stack = new Stack();
stack.push("first");
stack.push("second");
stack.push("third");
