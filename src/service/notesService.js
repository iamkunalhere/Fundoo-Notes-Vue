import service from "../service/service";
require('dotenv').config();
const url = `http://fundoonotes.incubation.bridgelabz.com/api/notes/`;

export default {
  methods: {
    addNote(noteDetails) {
      return service.postData(url, `addNotes?access_token=`, noteDetails);
    },
    getAllNotes() {
      return service.getNotes(url, `getNotesList?access_token=`);
    },
    deleteNote(noteDetails) {
      return service.postData(url, `trashNotes?access_token=`, noteDetails);
    },
    getTrashNotes() {
      return service.getNotes(url, `getTrashNotesList?access_token=`);
    },
    deleteNoteForever(noteDetails) {
      return service.postData(
        url,
        `deleteForeverNotes?access_token=`,
        noteDetails
      );
    },
    archiveNote(noteDetails) {
      return service.postData(url, `archiveNotes?access_token=`, noteDetails);
    },
    getArchiveNotes() {
      return service.getNotes(url, `getArchiveNotesList?access_token=`);
    },
    updateNote(noteDetails) {
      return service.postData(url, `updateNotes?access_token=`, noteDetails);
    }
  }
};
