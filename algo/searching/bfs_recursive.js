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
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
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
  breadthFirstSearch(queue, list) {
    if (!queue.length) return list;

    let currentNode = queue.shift(); //*****NOT this.queue because queue is just a parameter.******

    list.push(currentNode.value);

    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    
    return this.breadthFirstSearch(queue, list);
  }
}

const a = new BinarySearchTree();
// console.log(a.lookup(9))
a.insert(10);
a.insert(2);
a.insert(1);
a.insert(20);
a.insert(30);
a.insert(3);
a.insert(15);
console.log("tree", a);

console.log(a.breadthFirstSearch([a.root], [])); //***because this keyword works only inside of a class.****
