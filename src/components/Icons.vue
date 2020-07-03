<template>
  <div>
    <div>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn x-small text v-model="date" v-bind="attrs" v-on="on">
            <v-icon>mdi-gesture-tap</v-icon>
          </v-btn>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>

      <v-btn x-small text @click="openCollabDialog(note)">
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
      <v-menu v-if="isCreateNote == true" offset-x>
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

      <v-menu v-if="isCreateNote == false" offset-x>
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
import notesApi from "../service/notesService";
export default {
  name: "Icons",
  props: ["note", "isCreateNote"],
  data() {
    return {
      input: {
        date: "",
      },
    };
  },
  methods: {
    archiveNote(note) {
      const noteDetails = {
        noteIdList: [note.id],
        isArchived: true,
      };
      notesApi.methods
        .archiveNote(noteDetails)
        .then((response) => {
          if (response) {
            this.$root.$refs.ShowNotes.getAllNotes();
          }
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
      notesApi.methods
        .deleteNote(noteDetails)
        .then((response) => {
          if (response) {
            this.$root.$refs.ShowNotes.getAllNotes();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
