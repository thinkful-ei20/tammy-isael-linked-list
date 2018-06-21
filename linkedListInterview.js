'use strict';
const list = require('./linkedListfunctions');
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
  while(current.next !== null){
    console.log(current.next.value);
    list.remove(current.value);
    list.insertFirst(current.value);
    current = current.next;
  }
  return JSON.stringify(list, null, 2);
}
console.log(JSON.stringify(list, null, 2));
console.log(reverseList(list));