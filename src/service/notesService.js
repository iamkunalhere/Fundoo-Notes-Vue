import service from "../service/service";

const url = `http://fundoonotes.incubation.bridgelabz.com/api/notes/`;

export default {
    methods: {

addNote(noteDetails, token) {
    return service.postData(url, `addNotes?access_token=${token}`, noteDetails);
  },
  getAllNotes(token) {
    return service.getNotes(url, `getNotesList?access_token=${token}`);
  },
  deleteNote(noteDetails, token) {
    return service.postData(url, `trashNotes?access_token=${token}`, noteDetails);
  },
  getTrashNotes(token) {
    return service.getNotes(url, `getTrashNotesList?access_token=${token}`);
  },
  deleteNoteForever(noteDetails, token) {
    return service.postData(url, `deleteForeverNotes?access_token=${token}`, noteDetails);
  },
  archiveNote(noteDetails, token) {
    return service.postData(url, `archiveNotes?access_token=${token}`, noteDetails);
  },
  getArchiveNotes(token) {
    return service.getNotes(url, `getArchiveNotesList?access_token=${token}`);
  },
  updateNote(noteDetails, token) {
    return service.postData(url, `updateNotes?access_token=${token}`, noteDetails);
  },
},
};
