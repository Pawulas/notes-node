const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const options = {
  title: {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  },
  body: {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
  }
};

const argv = yargs
  .command('add', 'A new note', {
    title: options.title,
    body: options.body
  })
  .command('list', 'list all notes')
  .command('read', 'Read all notes', {
    title: options.title
  })
  .command('remove', 'Delete note', {
    title: options.title
  })
  .help()
  .argv;

let command = process.argv[2];

if (command == 'add') {
  var note = notes.addNote(argv.title, argv.body);

  if (!note) {
    console.log("Duplicate message!");
  } else {
    console.log("note created!");
    notes.logNote(note);
  }
} else if (command == 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);

  allNotes.forEach((note) => notes.logNote(note) );

}else if (command == 'read') {
  var note = notes.readNote(argv.title);
  
  if (note) {
    console.log("note found!");
    notes.logNote(note);
  } else {
    console.log("Note not found!");
  }
}else if (command == 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found";
  
  console.log(message);
} else {
  console.log('not recognized')
}