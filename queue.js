class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    //pushes value on
    enqueue(val){
        let newNode = new Node(val);
        if (this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    //shifts value off
    dequeue(){
        if (!this.first) return null;
        let popVal = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
            this.size--;

        } else {
            this.first = popVal.next;
            this.size--;
        }
        return popVal.val;
    }

}

let q = new Queue();
q.enqueue("first");
q.enqueue("second");
q.enqueue("third");
q.dequeue();
