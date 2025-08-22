import { emitKeypressEvents } from "readline";

export class LinkedList {
  constructor() {
    this.head = null;
  }

  //add a new node to the end of the list
  append(value) {
    if (this.head == null) {
      this.head = new Node(value, null);
    } else {
      let temp = this.head;

      while (temp.next != null) {
        temp = temp.next;
      }

      temp.next = new Node(value, null);
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    if (this.head == null) return null;

    let size = 0;

    let temp = this.head;
    while (temp != null) {
      temp = temp.next;
      size++;
    }

    return size;
  }

  //   head() {
  //     return this._head;
  //   }

  tail() {
    if (this.head == null) return null;

    let temp = this.head;

    while (temp.next != null) {
      temp = temp.next;
    }

    return temp;
  }

  at(index) {
    if (this.head == null) return;
    if (index >= this.size()) return;

    let currentIdx = 0;
    let temp = this.head;

    while (temp.next != null && index != currentIdx) {
      temp = temp.next;
      currentIdx++;
    }

    if (temp.next == null) return null;

    return temp;
  }

  pop() {
    if (this.head == null) return null;

    if (this.head.next == null) {
      this.head = null;
    }

    let temp = this.head;

    while (temp.next.next != null) {
      temp = temp.next;
    }

    temp.next = null;
  }

  contains(value) {
    if (this.head == null) return false;

    let temp = this.head;

    while (temp != null && temp.value != value) {
      temp = temp.next;
    }

    if (temp == null) return false;

    return true;
  }

  find(value) {
    if (this.head == null) return false;

    let temp = this.head;
    let curIdx = 0;

    while (temp != null && temp.value != value) {
      temp = temp.next;
      curIdx++;
    }

    if (temp == null) return null;

    return curIdx;
  }

  toString() {
    if (this.head == null) {
      return "null";
    }

    let str = "";

    let temp = this.head;

    while (temp != null) {
      str += "( " + String(temp.value) + " )";
      str += " -> ";
      temp = temp.next;
    }

    str += "null";

    return str;
  }

  insertAt(value, index) {
    if (this.head == null) return;
    if (index > this.size()) return;

    let currentIdx = 0;
    let prev = null;
    let cur = this.head;

    while (cur != null && currentIdx < index) {
      prev = cur;
      cur = cur.next;
      currentIdx++;
    }

    prev.next = new Node(value, cur);
  }

  removeAt(index) {
    if (this.head == null) return;
    if (index >= this.size()) return;

    let currentIdx = 0;
    let prev = null;
    let cur = this.head;

    while (cur.next != null && currentIdx < index) {
      prev = cur;
      cur = cur.next;
      currentIdx++;
    }

    prev.next = cur.next;
    cur = null;
  }
}

class Node {
  value = null;
  next = null;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

console.log("hi");
