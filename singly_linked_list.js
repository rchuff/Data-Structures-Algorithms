class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
            this.length = 1;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
        return this;
    }
    traverse(){
        var current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
    //Removes end of list and returns value.
    pop(){
        //Nothing to pop in list
        if(this.length === 0) return undefined;

        //Only one value to pop
        if(this.length === 1) {
            let popVal = this.head;
            this.head = null;
            this.tail = null;
            this.length = 0;
            return popVal;
        }
        var current = this.head;
        var lastItem = null;

        //Loop through values updating lastvalue and current.
        //If current == tail then return tail and update.
        while(current){
            if (!current.next) {
                lastItem.next = null;
                this.tail = lastItem;
                this.length--;
                return current;
            }
            lastItem = current;
            current = current.next;
        }
    }

    //Removes start of list and returns value.
    shift(){
        if (this.length ===0) return undefined;
        var popValue = this.head;
        popValue.next = null;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return popValue;
        }
        this.head = this.head.next;
        this.length--;
        return popValue;
    }
    unshift(val){
      let newNode = new Node(val);
      if (this.length === 0){
          this.head = newNode;
          this.tail = newNode;
          this.length = 1;
      } else {
          newNode.next = this.head;
          this.head = newNode;
          this.length++;
      }
      return this;
    }

    get(index){
        if (index >= this.length || index < 0) return null;
        var current = this.head;
        for (let i=0; i<index; i++){
            current = current.next;
        }
        return current;
    }

    set(index, value){
        var updateNode = this.get(index);
        if (!updateNode) return false;
        updateNode.val = value;
        return true;
    }

    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value);
        if (index === 0) return !!this.unshift(value);
        else {
            let prevNode = this.get(index-1);
            let postNode = this.get(index);
            let newNode = new Node(value);
            prevNode.next = newNode;
            newNode.next = postNode;
            this.length++;
            return true;
        }
    }

    remove(index){
        if (index < 0 || index >= this.length) return false;
        if (index === this.length - 1) return !!this.pop();
        if (index === 0) return !!this.shift();
        else {
            let prevNode = this.get(index-1);
            let removed = this.get(index);
            prevNode.next = this.get(index+1);
            this.length--;
            return removed;
        }

    }

    reverse(){
        let oldTail = this.tail;
        this.tail = this.head;
        this.head = oldTail;

        let current = this.tail;
        let next = current.next;
        let prev = null;

        while(current){
            next=current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
    }
}

var list = new SinglyLinkedList();
list.push("Bob");
list.push("Brandom");
list.push("Bowzer");
list.push("Hi");
list.push(":)");
