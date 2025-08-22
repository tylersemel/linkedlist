class LinkedList {
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
    if (this.head == null) return 0;

    let size = 0;

    let temp = this.head;
    while (temp != null) {
      temp = temp.next;
      size++;
    }

    return size;
  }

  getHead() {
    return this.head;
  }

  tail() {
    if (this.head == null) return null;

    let temp = this.head;

    while (temp.next != null) {
      temp = temp.next;
    }

    return temp;
  }

  at(index) {
    if (this.head == null || index >= this.size()) return null;

    let currentIdx = 0;
    let temp = this.head;

    while (temp != null && index != currentIdx) {
      temp = temp.next;
      currentIdx++;
    }

    if (temp == null) return null;

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
    if (this.head == null) return null;

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
    if (index == 0) {
      this.prepend(value);
      return;
    }
    if (this.head == null) return;
    if (index > this.size()) return;

    let currentIdx = 0;
    let prev = null;
    let cur = this.head;

    while (cur != null && currentIdx != index) {
      prev = cur;
      cur = cur.next;
      currentIdx++;
    }

    prev.next = new Node(value, cur);
  }

  removeAt(index) {
    if (index == 0) {
      this.head = this.head.next;
      return;
    }
    if (this.head == null) return;
    if (index >= this.size()) return;

    let currentIdx = 0;
    let prev = null;
    let cur = this.head;

    while (cur != null && currentIdx != index) {
      prev = cur;
      cur = cur.next;
      currentIdx++;
    }

    if (cur == null) {
      prev.next = null;
    } else {
      prev.next = cur.next;
      cur = null;
    }
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

// export default LinkedList;

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

//prepend test
list.prepend("tiger");
console.log(list.toString());

//size test -> should be 7
console.log(list.size());

//tail
console.log("tail: " + list.tail().value);

//at -> ex: 2 should be cat
console.log("at idx 6: " + list.at(6).value);

//pop
list.pop();
console.log("pop: " + list.tail().value);

//contains -> parrot
console.log("contains parrot: " + list.contains("parrot"));

//contains -> turtle false
console.log("contains turtle: " + list.contains("turtle"));

//find idx of hamster -> shoould be 4
console.log("idx of hamster: " + list.find("hamster"));

//find idx of nothing -> shoould be null
console.log("idx of nothing: " + list.find("nothing"));

//insertAt 4
list.insertAt("lynx", 4);
console.log("insert " + list.toString());

//removeAt 4
list.removeAt(4);
console.log(list.toString());

//insertAt 4
list.insertAt("ant", list.size());
console.log("insert end" + list.toString());
