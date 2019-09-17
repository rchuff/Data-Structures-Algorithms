class Graph {
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(value){
        if (!this.adjacencyList[value]) {
            this.adjacencyList[value] = [];
            return this.adjacencyList;
        }
        return undefined;
    }
    addEdge(vertex1, vertex2){
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2){
        let firstNode = this.adjacencyList[vertex1].indexOf(vertex2);
        if (firstNode !== -1) this.adjacencyList[vertex1].splice(firstNode,1);

        let secondNode = this.adjacencyList[vertex2].indexOf(vertex1);
        if (secondNode !== -1) this.adjacencyList[vertex2].splice(secondNode,1);
    }
    removeVertex(vertex){
        let edgeList = this.adjacencyList[vertex];
        for (let city of edgeList){
            this.removeEdge(vertex, city);
        }
        delete this.adjacencyList[vertex];
    }
    recursDFS(vertex){
        let vertices = [];
        let visited = {};
        const DFS = node => {
            let startPoint = this.adjacencyList[node];
            if (startPoint.length === 0) return null;
            visited[node] = true;
            vertices.push(node);
            for (let city of startPoint){
                if (!visited[city]) DFS(city);
            }
        }
        DFS(vertex);
        return vertices;
    }
    iterativeDFS(vertex){
        let vertices = [];
        let stack = [];
        let visited = {};
        stack.push(vertex);
        let current;
        visited[vertex] = true;

        while(stack.length > 0){
            current = stack.pop();
            vertices.push(current);
            for (let item of this.adjacencyList[current]){
                if (!visited[item]){
                    visited[item] = true;
                    stack.push(item);
                }
            }
        }
        return vertices;
    }
    bfs(vertex){
        let vertices = [];
        let queue = [];
        let visited = {};
        queue.push(vertex);
        let current;
        visited[vertex] = true;

        while(queue.length > 0){
            current = queue.shift();
            vertices.push(current);
            for (let item of this.adjacencyList[current]){
                if (!visited[item]){
                    visited[item] = true;
                    queue.push(item);
                }
            }
        }
        return vertices;
    }
}

let graph = new Graph();
graph.addVertex("Tokyo");
graph.addVertex("London");
graph.addVertex("New York");
graph.addVertex("Detroit");
graph.addVertex("Paris");
graph.addVertex("Cairo");
graph.addEdge("Tokyo","London");
graph.addEdge("Tokyo","Cairo");
graph.addEdge("London","New York");
graph.addEdge("New York","Paris");
graph.addEdge("Detroit","New York");
graph.addEdge("Detroit","Paris");
graph.addEdge("Paris","Cairo");
