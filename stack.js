
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    };
    peek(){
        return this.top;
    };
    push(value){
        const newNode = new Node(value);
        // const temp = this.top;
        newNode.next = this.top
        this.top = newNode;

        if(this.length === 0) this.bottom = newNode;
        this.length++;
    }
    pop(){
        if(!this.top) return;
        if(this.top === this.bottom){
            this.top = null;
            this.bottom = null;
            this.length--;
            return
        }
        const temp = this.top
        this.top = temp.next
        this.length--;
    }
}

const a = new Stack();
// a.printLIst()
console.log(a.peek())
a.push("google");
// a.push("youtube");
a.pop();
// a.push("discord");
console.log(a.peek())
// a.printList()
// a.push(66);
a.pop()
console.log(a)