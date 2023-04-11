const fs = require("Fs");
const path = require("path");

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify({notes: notesArray},
        null, 2)
        )

        return note;
}

function deleteNote(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    //Rewrites indexes for remaining notes
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(path.join(__dirname, '../db/db.json'),
    JSON.stringify({
        notes: notesArray},
         null, 2)
    )
}

module.exports = {
    createNewNote,
    deleteNote
};