<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg3 v-for="items in archiveNotes" :key="items.id">
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
            <v-btn x-small text>
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
            <v-btn @click="unArchiveNote(items.id)" x-small text>
              <v-icon>mdi-package-up</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <div class="text-center">
              <v-menu offset-x>
                <template v-slot:activator="{ on }">
                  <v-btn x-small text v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="moveToTrash(items.id)">
                    delete
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import notesApi from "../service/notesService";
export default {
  name: "ArchiveNotes",
  data() {
    return {
      archiveNotes: [],
    };
  },
  methods: {
    getArchiveNotes() {
      const token = localStorage.getItem("token");
      notesApi.methods
        .getArchiveNotes(token)
        .then((response) => {
          console.log(response.data.data);
          const noteDetails = response.data.data;
          this.archiveNotes = noteDetails;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    moveToTrash(id) {
      const noteDetails = {
        noteIdList: [id],
        isDeleted: true,
      };
      const token = localStorage.getItem("token");
      notesApi.methods
        .deleteNote(noteDetails, token)
        .then((response) => {
          console.log(response);
          this.getArchiveNotes();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    unArchiveNote(id) {
      const noteDetails = {
        noteIdList: [id],
        isArchived: false,
      };
      const token = localStorage.getItem("token");
      notesApi.methods
        .archiveNote(noteDetails, token)
        .then((response) => {
          if (response) {
            this.getArchiveNotes();
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getArchiveNotes();
  },
};
</script>
