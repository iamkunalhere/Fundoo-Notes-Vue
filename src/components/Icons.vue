<template>
  <div>
    <div >
      <v-btn small text>
        <v-icon>mdi-gesture-tap</v-icon>
      </v-btn>
      <v-btn x-small text>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
      <v-btn x-small text>
        <v-icon>mdi-palette</v-icon>
      </v-btn>
      <v-btn x-small text>
        <v-icon>mdi-image-area</v-icon>
      </v-btn>
      <v-btn x-small @click="archiveNote(note)" text>
        <v-icon>mdi-package-down</v-icon>
      </v-btn>
      <v-menu v-if="isCreateNote==true" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn x-small text v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            add label
          </v-list-item>
        </v-list>
      </v-menu>
    
      <v-menu v-if="isCreateNote==false" offset-x>
        <template v-slot:activator="{ on }">
          <v-btn x-small text v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="moveToTrash(note)">
            delete
          </v-list-item>
          <v-list-item>
            add label
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
import api from "../service/userService";
export default {
  name: "Icons",
  props: ["note","isCreateNote"],
  methods: {
    archiveNote(note) {
      const noteDetails = {
        noteIdList: [note.id],
        isArchived: true,
      };
      const token = localStorage.getItem("token");
      api.methods
        .archiveNote(noteDetails, token)
        .then((response) => {
          console.log(response);
          this.$root.$refs.ShowNotes.getAllNotes();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    moveToTrash(note) {
      const noteDetails = {
        noteIdList: [note.id],
        isDeleted: true,
      };
      const token = localStorage.getItem("token");
      api.methods
        .deleteNote(noteDetails, token)
        .then((response) => {
          console.log(response);
          this.$root.$refs.ShowNotes.getAllNotes();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
