class Node {
  constructor(value) {
    this.value = value,
    this.next = null;
    this.prev = null;
  };
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };

    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  insert(index,value){
    if(index>this.length){
        console.log("a")
       return this.append(value);
       
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const tempNext = leader.next;
    
    leader.next = newNode;
    newNode.prev = leader; 
    newNode.next = tempNext;
    tempNext.prev = newNode;
    this.length++;
  }
  traverseToIndex(index){
    let i = index;
    let currentNode = this.head;
    while(i--){
        currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const a = new LinkedList(1);
// console.log(a, a.length);
a.prepend(2);
a.append(3);
console.log(a.printList(), a.length);
a.insert(1,4)
console.log(a.printList(), a.length);
console.log(a)
