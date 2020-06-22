<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 lg4 v-for="items in allNotes" :key="items.id">
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
            <v-btn small text>
              <v-icon>mdi-gesture-tap</v-icon>
            </v-btn>
            <v-btn small text>
              <v-icon>mdi-account-plus</v-icon>
            </v-btn>
            <v-btn small text>
              <v-icon>mdi-palette</v-icon>
            </v-btn>
            <v-btn small text>
              <v-icon>mdi-image-area</v-icon>
            </v-btn>
            <v-btn @click="archiveNote(items.id)" small text>
              <v-icon>mdi-package-down</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <div class="text-center">
              <v-menu offset-x>
                <template v-slot:activator="{ on }">
                  <v-btn small text v-on="on">
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
import api from "../service/userService";
export default {
  name: "ShowNotes",
  data() {
    return {
      allNotes: [],
    };
  },
  methods: {
    getAllNotes() {
      const token = localStorage.getItem("token");
      api.methods
        .getAllNotes(token)
        .then((response) => {
          console.log(response.data.data);
          const noteDetails = response.data.data;
          this.allNotes = noteDetails;
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
      api.methods
        .deleteNote(noteDetails, token)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    archiveNote(id) {
      const noteDetails = {
        noteIdList: [id],
        isArchived: true,
      };
      const token = localStorage.getItem("token");
      api.methods
        .archiveNote(noteDetails, token)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getAllNotes();
  },
};
</script>

<style></style>
