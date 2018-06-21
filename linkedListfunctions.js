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
  // console.log(linkedList1.insertBefore('111111','Husker'));
  // console.log(loop(linkedList1));

  console.log(linkedList1.insertAfter('111111','Apollo'));
  console.log(loop(linkedList1));


}

function loop(ll){
  let currentNode = ll.head;
  while(currentNode.next !== null){
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
}

console.log(main());