class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }
    insert(value){
      const newNode = new Node(value);
      if(this.root === null){
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            if(!currentNode.left){
              currentNode.left = newNode;
              return;
            }
            currentNode = currentNode.left;
          } else {
            if(!currentNode.right){
              currentNode.right = newNode;
              return;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value) {
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.value === value) {
          return currentNode;
        } else if (currentNode.value > value) {
          currentNode = currentNode.left;
        } else if (currentNode.value < value) {
          currentNode = currentNode.right;
        }
      }
      console.log(`${value}`, "does not exist");
      return;
    }
    remove(value) {
      let currentNode = this.root;
      let parentNode = null;
      while (currentNode) {
        if (currentNode.value > value) {
          parentNode = currentNode;
          currentNode = currentNode.left;
          continue;
        } else if (currentNode.value < value) {
          parentNode = currentNode;
          currentNode = currentNode.right;
          continue;
        } else if (currentNode.value === value) {
          if (!currentNode.right) {
            console.log("true", currentNode, "p", parentNode);
            if (currentNode.left) {
              if (parentNode.left.value === value) {
                parentNode.left.value = currentNode.left;
              } else {
                console.log("true");
  
                parentNode.right.value = currentNode.right;
              }
            } else {
              if (parentNode.left.value === value) {
                parentNode.left.value = null;
              } else {
                parentNode.right.value = null;
              }
            }
          } else if (!currentNode.right.left) {
            if (parentNode.left.value === value) {
              currentNode.right.left = currentNode.left;
              parentNode.left.value = currentNode.right;
            } else {
              currentNode.right.left = currentNode.left;
              parentNode.right.value = currentNode.right;
            }
          } else if (currentNode.right.left) {
            if (!currentNode.left) {
              if (parentNode.left.value === value) {
                parentNode.left.value = currentNode.right;
              } else {
                parentNode.right.value = currentNode.right;
              }
            } else if (currentNode.left) {
              if (parentNode.left.value === value) {
                // currentNode.right.left
                parentNode.left.value = currentNode.right;
              } else {
                parentNode.right.value = currentNode.right;
              }
            }
          }
          return;
        } else {
          console.log("no value matched");
          return;
        }
      }
    }
    breadthFirstSearch(value){  //If somehow I can remove first element while iterating, it can be same??? 
      let childs =[this.root];
      let i = 0; 
      let length = 0;
        while(i <= length){
          console.log(childs[i].value,"a ")
          if(childs[i].value === value) return console.log("found!!",childs);
           if(childs[i].left){
            childs.push(childs[i].left);
            length++;
           }
           if(childs[i].right){
            childs.push(childs[i].right);
            length++;
           }
           i++;
        }
     }
   }
  
  const a = new BinarySearchTree();
  // console.log(a.lookup(9))
  a.insert(9);
  a.insert(9);
  a.insert(10);
  a.insert(8);
  a.insert(7);
  console.log("tree", a);
  
  a.breadthFirstSearch(7);