/**
 * 基于链表实现的队列
 * 
 * @author wangzhe
 */
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class QueueBasedOnLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // 入队
  enqueue(item) {
    if(this.head === null) {
      this.head = new Node(item);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(item);
      this.tail = this.tail.next;
    }
  }

  // 出队
  dequeue() {
    if(this.head !== null) {
      const value = this.head.element;
      this.head = this.head.next;
      return value;
    }
    return -1;
  }

  dispaly() {

  }
}

const newQueue = new QueueBasedOnLinkedList()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)

// 获取元素
let res = 0
console.log('-------获取dequeue元素------')
while(res !== -1) {
  res = newQueue.dequeue();
  console.log(res);
}