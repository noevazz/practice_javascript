const Node = require('./NodeClass.js');

class LinkedList {
    constructor (head = null) {
        this.head = head;
        this.count = head? 1: 0;
    }
    _validateNodeArgument (node) {
        if (node instanceof Node || node === null)
            return true;
        else 
            return false;
    }
    addToTail (node) {
        if (!this._validateNodeArgument(node))
            throw new Error('addToTail only accepts Node instances or null');
        this.count++;
        if (!this.head) {
            this.head = node;
            return;
        }
        let tmpNode = this.head;
        while (tmpNode.next) {
            tmpNode = tmpNode.next
        }
        tmpNode.next = node;
    }
    addToHead (node) {
        if (!this._validateNodeArgument(node))
            throw new Error('addToHead only accepts Node instances or null');
        this.count++;
        if (this.head) {
            let tmpHead = this.head;
            this.head = node;
            this.head.next = tmpHead;
        } else {
            this.head = node;
        }
    }

    getNodeByData (data) {
        let tempNode = this.head;
        if (!tempNode){
            console.log('_-------', Promise.reject(null));
            return Promise.reject(null);
        }
        return new Promise((resolve, reject)=>{
            while (tempNode.next !== null) {
                if (tempNode.data === data){
                    resolve(tempNode);
                    break;
                }
                tempNode = tempNode.next;
            }
            reject(null);
        })
    }

    getNodeNeighborByData (data) {
        let tempNode = this.head;
        let prevNode = null;
        if (!tempNode){
            return Promise.reject(null);
        }
        return new Promise((resolve, reject)=>{
            while (tempNode.next !== null) {
                if (tempNode.data === data){
                    resolve([prevNode, tempNode]);
                    break;
                }
                prevNode = tempNode;
                tempNode = tempNode.next;
            }
            reject(null);
        })
    }

    swapNodesByData (dataNode1, dataNode2) {
        return new Promise((resolve, reject)=>{
            Promise.all([
                this.getNodeNeighborByData(dataNode1),
                this.getNodeNeighborByData(dataNode2)
            ])
            .then(resolvedData=>{
                let [prevNode1, node1] = resolvedData[0];
                let [prevNode2, node2] = resolvedData[1];
                if (prevNode1 === null) {
                    this.head = node2;
                } else {
                    prevNode1.next = node2;
                }
                if (prevNode2 === null) {
                    this.head = node1;
                } else {
                    prevNode2.next = node1;
                }
                const tempNextNode1 = node1.next;
                node1.next = node2.next;
                node2.next = tempNextNode1;
                resolve('Swap completed');
            })
            .catch(rejectedData=>{
                reject('Cannot swap, check if the data is available as Nodes in the list.');
            });

        })
    }

    getLL () {
        let tmpNode = this.head;
        const LL = [];
        while (tmpNode) {
            LL.push(tmpNode.data);
            tmpNode = tmpNode.next;
        }
        return LL;
    }
}

module.exports = LinkedList;