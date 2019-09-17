class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});
    }
    shortRoute(v1, v2){
        let queue = new PriorityQueue();
        let visited = [];
        let previous = {};
        let shortestDist = {};
        for (let key in this.adjacencyList){
            console.log(key);
            shortestDist[key] = Infinity;
            queue.enqueue(key, Infinity);
            previous[key] = null;
        }
        shortestDist[v1] = 0;
        queue.enqueue(v1,0);
        previous[v1] = null;

        let current;
        console.log(queue.values);
        while (queue.values.length){
            current = queue.dequeue();
            if (current.val === v2) break;
            this.adjacencyList[current.val].forEach(item => {



                if (item.weight < shortestDist[item.node]) {
                    shortestDist[item.node] = item.weight;
                    previous[item.node] = current.val;
                }
            })
            visited.push(current.val);
        }
        return shortestDist;

    }
}

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }
    dequeue(){
        return this.values.shift();
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}

let wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");
wg.addEdge("A", "B", 4);
wg.addEdge("A", "C", 2);
wg.addEdge("C", "D", 2);
wg.addEdge("C", "F", 4);
wg.addEdge("D", "F", 1);
wg.addEdge("D", "E", 3);
wg.addEdge("F", "E", 1);
wg.addEdge("E", "B", 3);
