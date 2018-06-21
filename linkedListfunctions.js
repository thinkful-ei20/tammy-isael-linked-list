'use strict';

const LinkedList = require('./linkedList');
let linkedList1 = new LinkedList();

function main(){
  linkedList1.insertFirst('Apollo');
  linkedList1.insertLast('Boomer');
  linkedList1.insertLast('Helo');
  linkedList1.insertLast('Husker');
  linkedList1.insertLast('Starbuck');
  linkedList1.insertLast('Tauhida');
  linkedList1.remove('squirrel');
  
  linkedList1.insertBefore('Athena', 'Boomer');
  linkedList1.insertAfter('Hotdog', 'Helo');
  linkedList1.insertAt('Kat', 2);
  linkedList1.remove('Tauhida');

  // console.log(size(linkedList1));
  // return display(linkedList1);
  return linkedList1;

}

function display(ll){
  // let currentNode = ll.head;
  // while(currentNode.next !== null){
  //   console.log(currentNode.value);
  //   currentNode = currentNode.next;
  // }
  // console.log(currentNode.value);

  return JSON.stringify(ll, null, 2);
}

function size(ll){
  let counter = 1;
  let currentNode = ll.head;
  while(currentNode.next !== null){
      currentNode = currentNode.next;
      counter++
  }
  return counter;
}

function isEmpty(ll){
  return ll.head === null;
}



let list = main();
console.log(display(list));
console.log(size(list));
console.log(isEmpty(list));
console.log(isEmpty({head: null}));