class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };

        this.tail = this.head;
        this.length = 1;
    }
    printLinkedList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return array;
    }
    append(value) {
        // const newNode = {
        //     value:value,
        //     next:null
        // }; ****OR because the code is repeating we can use classes instead****
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        // return this;
    }
    prepend(value) {
        // const newNode = {
        //     value:value,
        //     next:null    // why next:null and not next:this.head --> **because of this we can use class
        // }
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        if (index > this.length) {
            return this.append(value);
        }
        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;

        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }
    traverseToIndex(index) {
        let i = index;
        let currentNode = this.head;
        while (i--) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    remove(index) {
        const leader = this.traverseToIndex(index - 1);
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
    }
    reverse(length){
        let i = 0;
       
        while(i<length){
            
            const change = this.head;
            const cn = change.next;
            change = change.next;
        }
        //  let tmpHead = this.head;
        // this.head = this.tail;
        // this.tail = tmpHead;
        
    }
}

const a = new LinkedList(10);
console.log(a.printList(), a.length);
a.append(5);
console.log(a.printList(), a.length);
a.prepend(1);
console.log(a.printList(), a.length);
a.insert(1, 3);
// console.log(a)
// console.log(a.traverseToIndex(1))
console.log(a.printList(), a.length);
a.remove(1);
console.log(a.printList(), a.length);
a.reverse()
console.log(a.printList(), a.length,"rev");

