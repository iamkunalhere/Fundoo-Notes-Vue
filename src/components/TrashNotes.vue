<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="items in trashNotes" :key="items.id">
        <v-card class="ma-3">
          <v-textarea
            flat
            solo
            rows="1"
            v-model="items.title"
            auto-grow
          ></v-textarea>

          <v-textarea
            flat
            solo
            rows="1"
            v-model="items.description"
            auto-grow
          ></v-textarea>
          <v-card-actions>
            <v-btn @click="deletePermanent(items.id)" small text>
              <v-icon>mdi-delete-forever</v-icon>
            </v-btn>
            <v-btn @click="restore(items.id)" small text>
              <v-icon>mdi-delete-restore</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import notesApi from "../service/notesService";
export default {
  name: "TrashNotes",
  data() {
    return {
      trashNotes: [],
    };
  },
  methods: {
    getTrashNotes() {
      notesApi.methods
        .getTrashNotes()
        .then((response) => {
          console.log(response.data.data);
          const noteDetails = response.data.data;
          this.trashNotes = noteDetails;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deletePermanent(id) {
      const noteDetails = {
        noteIdList: [id],
        isDeleted: true,
      };
      notesApi.methods
        .deleteNoteForever(noteDetails)
        .then((response) => {
          console.log(response);
          this.getTrashNotes();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    restore(id) {
      const noteDetails = {
        noteIdList: [id],
        isDeleted: false,
      };
      notesApi.methods
        .deleteNote(noteDetails)
        .then((response) => {
          console.log(response);
          this.getTrashNotes();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getTrashNotes();
  },
};
</script>
