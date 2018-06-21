'use strict';

//insert (First, Last, Before, After, and insertAt), remove, and find. 
class _Node{
  constructor(value, next, prev){
    this.value=value;
    this.next=next;
    this.prev=prev;
  }
}

class DoubleLinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length=0;
  }

  insertFirst(item){
    if (!this.head){
      const newNode = new _Node(item, null, null);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    const newNode = new _Node(item, this.head, null);
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
  }

  insertLast(item){
    if (!this.head){
      this.insertFirst(item);
    } else{
      let current = this.head;
      while(current.next !== null){
        current = current.next;
      }
      const newNode = new _Node(item, null, current);
      current.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }




  insertBefore(item,key){
    let currNode = this.head;
    let prevNode = this.head;
    while(currNode.value !== key && currNode.next !== null){
      prevNode = currNode;
      currNode = currNode.next;
      console.log('inside while', prevNode.value, currNode.value);
    }
    prevNode.next = new _Node(item, currNode);
    
  }

  insertAfter(item,key){
    let currNode = this.head;

    while(currNode.value !== key && currNode.next !== null){
      currNode = currNode.next;
    }

    if (currNode.next === null){
      //console.log('Cannot find your key');
    }

    currNode.next = new _Node(item, currNode.next.next);
    
  }

  
  insertAt(item, position){
    let counter = 0; 
    let currNode = this.head;
    let prevNode = this.head;
    while(counter !== position && currNode.next !== null){
      counter++;
      prevNode = currNode;
      currNode = currNode.next;
    }
    prevNode.next = new _Node(item, currNode);
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

module.exports = DoubleLinkedList;
