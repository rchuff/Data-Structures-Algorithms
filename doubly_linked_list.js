class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail=null;
        this.length = 0;
    }

    //Add item to the end of the list
    push(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldTail = this.tail;
            this.tail = newNode;
            newNode.prev = oldTail;
            oldTail.next = newNode;
        }
        this.length++;
        return this;
    }

    //Return last item of list
    pop(){
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            let popVal = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return popVal;
        }
        else {
            let oldTail = this.tail;
            this.tail = oldTail.prev;
            this.tail.next = null;
            this.length--;
            return oldTail;
        }

    }

    //Add item to start of list
    shift(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            this.head.next = oldHead;
            oldHead.prev = this.head;
        }
        this.length++;
        return this;
    }

    //Return item from start of list
    unshift(){
        if (this.length === 0) return undefined;
        if (this.length === 1){
            let oldHead = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return oldHead;
        } else {
            let oldHead = this.head;
            this.head = oldHead.next;
            this.head.prev = null;
            this.length--;
            return oldHead;
        }
    }

    //Return node at certain index
    get(index){
        if (index < 0 || index > this.length - 1) return undefined;

        //Find midpoint of array
        let mid = Math.floor(this.length / 2) - 1;

        //Determine loop direction
        let direction = (mid >= index ? "forwards" : "backwards");

        //Loop over arrays
        if (direction === "forwards") {
            let current = this.head;
            for (let i = 0; i < index; i++){
                current = current.next;
            }
            return current;
        } else {
            let current = this.tail;
            for (let i = this.length - 1; i > index; i--){
                current = current.prev;
            }
            return current;
        }

    }


    set(index, value){
        let updateNode = this.get(index);
        if (!updateNode) return false;
        updateNode.val = value;
        return true;
    }

    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if (index === 0) !!this.shift(value);
        if (index === this.length) !!this.push(value);
        else {
            let priorNode = this.get(index-1);
            let postNode = this.get(index);
            let newNode = new Node(value);
            newNode.next = postNode;
            newNode.prev = priorNode;
            postNode.prev = newNode;
            priorNode.next = newNode;
            this.length++;
            return true;
        }
    }

    remove(index){
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return !!this.unshift();
        if (index === this.length - 1) !!this.pop();
        else {
            let postNode = this.get(index+1);
            let priorNode = this.get(index-1);
            postNode.prev = priorNode;
            priorNode.next = postNode;
            return true;
        }
    }

    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        while(node){
            let oldNext = node.next;
            let oldPrev = node.prev;
            node.next = oldPrev;
            node.prev = oldNext;
            node = node.prev;
        }
    }
}

var doublelist = new DoublyLinkedList();
doublelist.push("val1");
doublelist.push("val2");
doublelist.push("val3");
doublelist.push("val4");
doublelist.push("val5");
doublelist.push("val6");
doublelist.push("val7");
doublelist.push("val8");
