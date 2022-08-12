// **** My, stack with array implementation
class MyStack{
    constructor(){
        this.array = [];
        this.length = 0;
        this.top = null;
        this.bottom = null;
    }
    peek(){
        return this.top;
    }
    push(value){
        this.array.push(value);
        this.top = this.array[this.length]
        this.bottom = this.array[0];
        this.length++;
    }
    pop(){
        if(this.length === 0) return;
        if(this.length === 1){
            this.top = null;
            this.bottom = null;
            this.array.pop();
            this.length--;
        } else {
            this.length--;
            this.array.pop();
            this.top = this.array[this.length-1]
        }
    }
}
// ****dsa Tutorial implementation
class Stack{
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value);
    }
    pop(){
        this.array.pop();
    }
}

const a = new Stack();
a.push('google');
console.log(a.peek());
a.push('discord')
console.log(a);
a.pop()
a.push('youtube');
console.log(a.peek());
console.log(a)


const ma = new MyStack();
console.log(ma);
ma.push(4);
console.log(ma);
ma.push(5)
// a.push(6)
console.log(ma)
ma.pop()
ma.pop()
// a.pop()
// a.pop()
console.log(ma);
