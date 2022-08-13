class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }
    addVertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }
    addEdge(node1, node2){
        //for undirected graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const a = new Graph();
a.addVertex('0');
a.addVertex('1');
a.addVertex('2');
a.addVertex('3');
a.addVertex('4');
a.addVertex('5');
a.addVertex('6');
a.addEdge('1','3')
a.addEdge('2','1')
a.addEdge('2','3')
console.log(a.adjacentList);
