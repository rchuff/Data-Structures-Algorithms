class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        if (this.values.length > 1){
            let childIdx = this.values.length - 1;
            let parentIdx = Math.floor((childIdx - 1)/2);
            let parentNode = this.values[parentIdx];
            const swap = (arr, idx1, idx2) => {
                [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
            }

            while (val > parentNode && childIdx !== 0){

                swap(this.values, childIdx, parentIdx);
                childIdx = parentIdx;
                parentIdx = Math.floor((childIdx - 1)/2);
                parentNode = this.values[parentIdx];
            }
        }
        return this.values;
    }

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;
            if (leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if (leftChild > element) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                    ) {
                        swap = rightChildIdx;
                    }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}




let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
