const Node = require('./NodeClass');
const LinkedList = require('./LinkedListClass');


console.log('######## Linked List ########');
const LL = new LinkedList(new Node(10));
LL.addToHead(new Node(20));
LL.addToHead(new Node(30));
LL.addToHead(new Node(40));
LL.addToTail(new Node(1000));
console.log(LL.getLL());
console.log(LL.count);
const swap = LL.swapNodesByData(0, 40);
swap.then(resolvedData=>{
    console.log(resolvedData);
    console.log(LL.getLL());
})
.catch ((rejectedData)=>{
    console.log(rejectedData);
})
