// var obj = {
//   name: "pawcio"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var person = '{ "name": "pawcio", "age": 23 }';

// var per = JSON.parse(person);

// console.log(typeof per);
// console.log(per);

const fs = require('fs');

var originalNote = {
  title: "some title",
  body: "some body"
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);