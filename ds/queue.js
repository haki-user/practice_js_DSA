class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.prev = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue() {
    if (this.length === 0) return;
    if (this.length === 1) {
    this.last = null;
    }
    this.first = this.first.prev;
    this.length--;
  }
}

const a = new Queue();
a.enqueue(5);
// console.log(a.peek(),a)
a.enqueue(6);
a.enqueue(7);
console.log(a);
a.dequeue();
a.dequeue();
console.log(a)
a.dequeue();
console.log(a.peek(), "a", a.last);

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class nQueue{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.length = 0;
//     }
//     peek(){
//         return this.first;
//     }
//     enqueue(value){
//         const newNode = new Node(value);
//         if(this.length === 0) {
//             this.first = newNode;
//         }
//         // const temp = this.last;
//         // this.last = newNode;
//         newNode.next = this.last;
//         this.last = newNode
//         this.length++
//         // newNode.next = temp;
//     }
//     dequeue(){

//     }
// }
