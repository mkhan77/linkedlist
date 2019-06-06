//By Mohammad Khan
//6-5-19

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addFirstNode(data) {
    this.head = new Node(data);
    this.tail = this.head;
    return this;
  }

  addHead(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else {
      let newHead = new Node(data, this.head);
      this.head = newHead;
    }
    return this;
  }

  addTail(data) {
    if (!this.head) {
      this.addFirstNode(data);
    } else if (this.head === this.tail) {
      this.tail = new Node(data);
      this.head.next = this.tail;
    } else {
      let newTail = new Node(data);
      this.tail.next = newTail;
      this.tail = newTail;
    }
    return this;
  }

  addNodeAtPosition(data, targetData) {
    let current = this.head;
    if (!this.head) {
      this.addFirstNode(data);
    } else if (this.head === this.tail) {
      this.head.next = new Node(data);
      this.tail = this.head.next;
    } else {
      while (current) {
        if (current.data === targetData)
          current.next = new Node(data, current.next);
        current = current.next;
      }
    }
    return this;
  }

  findNode(targetData) {
    let current = this.head;
    while (current) {
      if (current.data === targetData) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  editNode(data, newData) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        current.data = newData;
      }
      current = current.next;
    }
    return this;
  }

  removeNode(targetData) {
    let current = this.head;
    if (this.head === this.tail && this.head.data === targetData) {
      this.head = null;
      this.tail = null;
      return this;
    }

    if (this.head.data === targetData) {
      this.head = this.head.next;
    } else if (this.tail.data === targetData) {
      while (current) {
        if (current.next === this.tail) {
          this.tail = current;
          current.next = null;
        }
        current = current.next;
      }
    } else {
      let previous = this.head;
      current = previous.next;
      while (current) {
        if (current.data === targetData) {
          previous.next = current.next;
          current = current.next;
          break;
        } else {
          previous = current;
          current = current.next;
        }
      }
    }
    return this;
  }

  printList() {
    let current = this.head;
    if (!this.head) console.log("List is Empty");
    console.log("head");
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log("tail");
    return this;
  }

  createArray() {
    let current = this.head;
    let arr = [];
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
}

module.exports = LinkedList;
