'use strict';


class _Node{
  constructor(value, next){
    this.value=value;
    this.next=next;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(item){
    this.head = new _Node(item, this.head);
  }

  insertBefore(item,key){
    let currNode = this.head;
    let prevNode = this.head;
    while(currNode.next !== key && currNode.next !== null){
      prevNode = currNode;
      currNode = currNode.next;
      console.log('inside while', prevNode.value, currNode.value);
    }
    prevNode.next = new _Node(item, currNode);
    currNode = currNode.next;
    
  }
  
  insertLast(item){
    if(this.head === null){
      this.insertFirst(item);
    }
    else{
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item,null);
    }
  }

  find(item){
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    while (currNode.value !== item){
      if (currNode.next === null){
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item){
    if(!this.head){
      return null;
    }
    if(this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next=currNode.next;
  }
}

<<<<<<< HEAD
=======
module.exports = LinkedList;
>>>>>>> 4dcab747e1cea474bef69bd845e5ae02cea81414
