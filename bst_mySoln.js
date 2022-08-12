class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//         const newNode = new Node(value);
//         if(!this.root){
//             this.root = newNode;
//             // console.log("aaaa",this.root.value)
//         }
//         // if(this.root.left === null && this.root.right === null) this.root.left = newNode;
//          else{
//         const Root = this.root;
//            var temp = this.findLess(Root,newNode);
//         //    temp = newNode;
//         }

//     }
//     findLess(currentNode,newNode){
//         // console.log("cn",currentNode)

//         if(currentNode === null) {
//             return currentNode = newNode;}
//         else if(currentNode.left === null) {
//             return currentNode.left = newNode;
//         }

//         else if(currentNode.left.value > newNode.value){
//             // console.log(currentNode.value>newNode.value)
//             return this.findLess(currentNode.left,newNode);
//         }
//         else if(currentNode.right === null) return currentNode.right = newNode;
//         else if(currentNode.right.value < newNode.value){
//             // console.log(currentNode.value>newNode.value,"222")
//             return this.findLess(currentNode.right,newNode)
//         }
//         // const currentNode = this.root;
//         // while(currentNode){
//         //     if(currentNode.value > newNode.value){
//         //         currentNode = currentNode.right;
//         //         return
//         //     }
//         //     if(currentNode.right > newNode.value){

//         //         return currentNode.left
//         //     }
//         // }
//     }
//     lookup(currNode,value){
//         if(currNode) console.log("lkup", currNode.value)
//         if(!currNode){
//             console.log("(!currNode")
//             return currNode;
//         }
//         else if(!currNode.left){
//             return currNode
//         }
//         else if(currNode.value < value){
//             console.log(`${value} is greater than ${currNode.value}`)
//             // return currNode
//             return
//         }
//         else if(currNode.value > value && currNode.right && currNode.left.value < value){
//             console.log("currNode.value > value && currNode.right")
//             return this.lookup(currNode.right,value)
//         }
//         else if(currNode.value > value && !currNode.right && currNode.left.value < value){
//             console.log(" && !currNode.right && currNode.left.value < value")
//             return this.lookup(currNode.right,value)
//         }
//         else if(currNode.left.value < value){
//              console.log("currNode.left.value < value")
//             return this.lookup(currNode.left,value)
//         }
//         else if(currNode.left.value > value){
//             //  console.log("currNode.left.value < value")
//             return this.lookup(currNode.left,value)
//         }
//         console.log("nothing")
//     }
// }

class BinarySearchTree{
  constructor(){
      this.root = null;
  }
  insert(value){
      const newNode = new Node(value);
      var currentNode = this.root;
      if(!this.root){
          this.root = newNode;
          return;
      }
      while(true){
          
          // let prevNode = currentNode;
          if(!currentNode){
              currentNode = newNode;
              return;
          }
          // console.log("w",currentNode,currentNode.left);
          if(currentNode.value > value){
              // console.log("f1",currentNode);
              if(!currentNode.left){
                  // console.log(currentNode.left,"aaaa")
                  currentNode.left = newNode;
                  return;
              }
              currentNode = currentNode.left;
          } else if(currentNode.value < value){
              if(!currentNode.right){
                  currentNode.right = newNode;
                  return;
              }
              currentNode = currentNode.right;
              // console.log(currentNode)
          } else {
              break;
          }
      }
      
  }
}


const a = new BinarySearchTree();
a.insert(100);
a.insert(50); 
a.insert(40);
a.insert(30);
a.insert(35);
a.insert(10);
a.insert(2);
a.remove(50);
console.log(a, "aaaaaa");
// console.log(a.lookup(35));
