'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
 //we want to check if any node is attached to another node that is not
 //consecutive to it. Ex: if 9 is attached to 2 and not 10.  
 
 //this.next should NOT be null AND it should NOT be n+1
 if (linkedlist.head === linkedlist.tail) {
     return false 
 } //edgecase and/or basecase

};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
