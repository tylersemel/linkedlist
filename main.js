import { LinkedList } from "./linkedlist.js";

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
console.log("at idx 2: " + list.at(2).value);

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
