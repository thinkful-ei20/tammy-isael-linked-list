'use strict';
const list = require('./linkedListfunctions');
const LinkedList = require('./linkedList');
const DoubleLinkedList = require('./doubleLinkedList');
const ll = new LinkedList();
const doubleLinkedList = new DoubleLinkedList();

function WhatDoesThisProgramDo(lst){
  let current = lst.head;
  while(current !== null){
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else{
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}

//It sets a variale equal to the list head (begin at the beginning of 'lst')

//While the 'current' isn't at the end, it will move to the next node

//At every node of 'lst' it will check to see if the next node value is equal to 'value at 'current''.

//If the values are the same, it will point it's next node to the node two spaces away

//If the values are not the same, the new node will move to the next node

//It will loop until it reaches the end of the nested list

//By doing this it will traverse around any duplicate values

//O(n^2)
//It is a loop within a loop, as the list grows the processing time increases by the size of the list


function reverseList(list){
  let current = list.head;
  
  while(current){
    list.remove(current.value);
    list.insertFirst(current.value);
    current = current.next;
  }

  return JSON.stringify(list, null, 2);
}
//console.log(JSON.stringify(list, null, 2));
// console.log(reverseList(list));

// function reverseListRecursive(list){
//   let current = list.head;

//   if (current.next === null) {
//     return;
//   }

//   list.insertFirst(current.value);
//   list.remove(current.value);

//   return reverseListRecursive(list);

//   //return JSON.stringify(list, null, 2);
// }

// console.log(reverseListRecursive(list));

// Third from the end
// Write an algorithm to find the third element from the end of a linked list. 
// Note You may be tempted to add a length property to your Linked List class. 
// The length property is not a typical property of linked list, 
// therefore don't make any modification to the Linked list class that is provided to you.

function thirdFromTheEnd(list){
  let counter = 0;
  let currentNode = list.head;

  while (currentNode) {
    counter++;
    currentNode = currentNode.next;
  }

  currentNode = list.head;
  for (let i=0; i !== counter-3; i ++){
    currentNode = currentNode.next;
  }
  return currentNode;
}

// console.log(thirdFromTheEnd(list));

function middleList(list){
  let current = list.head;
  let mid = list.head;

  while(current.next !== null && current.next.next !== null){
    current = current.next.next;
    mid = mid.next;
  }
  return mid; //thanks jeffrey
}

// console.log(middleList(list));

function cycleInList(list){
  ll.insertFirst('hello');
  ll.insertLast('hello2');
  ll.find('hello2').next = list.head;
  let fast = list.head.next;
  let slow = list.head;
  while(fast != null && slow != null){
    if(fast == slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
}
// console.log(cycleInList(ll));
// console.log(cycleInList(list));
function display(DLL){
  let current = DLL.head;

  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function createDoublelyLinkedList(){


  doubleLinkedList.insertLast('A');
  doubleLinkedList.insertLast('B');
  doubleLinkedList.insertLast('C');
  doubleLinkedList.insertLast('D');

  //doubleLinkedList.insertLast('newItem3');

  display(doubleLinkedList);
}

createDoublelyLinkedList();