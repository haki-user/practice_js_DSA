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
  // insert(value) {
  //   const newNode = new Node(value);
  //   if (this.root === null) {
  //     this.root = newNode;
  //   } else {
  //     let currentNode = this.root;
  //     while (true) {
  //       if (value < currentNode.value) {
  //         if (!currentNode.left) {
  //           currentNode.left = newNode;
  //           return;
  //         } else {
  //           currentNode = currentNode.left;
  //         }
  //       } else {
  //         if (!currentNode.right) {
  //           currentNode.right = newNode;
  //           return;
  //         } else {
  //           currentNode = currentNode.right;
  //         }
  //       }
  //     }
  //   }
  // }
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
  //   find(value) {
  //     let currentNode = this.root;
  //     let prevNode = currentNode;
  //     while (currentNode) {
  //       if (currentNode.value === value) {
  //         return prevNode;
  //       } else if (currentNode.value > value) {
  //         prevNode = currentNode;
  //         currentNode = currentNode.left;
  //       } else if (currentNode.value < value) {
  //         prevNode = currentNode;
  //         currentNode = currentNode.right;
  //       }
  //     }
  //     console.log("does not exist");
  //     return;
  //   }
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
}

const a = new BinarySearchTree();
let i = 1;
// console.log(a.lookup(9))
a.insert(9);
console.log("a", i++, a);
a.insert(9);
console.log("a", i++, a);
a.insert(10);
console.log("a", i++, a);
a.insert(8);
console.log("a", i++, a);
a.insert(7);
console.log("a", i++, a);
