<template>
  <div>
    <v-card width="350" v-for="items in trashNotes" :key="items.id">
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
        <v-btn @click="deletePermanent(items.id)" text>
          <v-icon>mdi-delete-forever</v-icon>
        </v-btn>
        <v-btn @click="restore(items.id)" text>
          <v-icon>mdi-delete-restore</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import api from "../service/userService";
export default {
  name: "TrashNotes",
  data() {
    return {
      trashNotes: [],
    };
  },
  methods: {
    getTrashNotes() {
      const token = localStorage.getItem("token");
      api.methods
        .getTrashNotes(token)
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
      const token = localStorage.getItem("token");
      api.methods
        .deleteNoteForever(noteDetails, token)
        .then((response) => {
          console.log(response);
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
      const token = localStorage.getItem("token");
      api.methods
        .deleteNote(noteDetails, token)
        .then((response) => {
          console.log(response);
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
