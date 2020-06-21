<template>
  <div>
    <v-card width="510" v-for="items in allNotes" :key="items.id">
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
        <v-btn text>
          <v-icon>mdi-gesture-tap</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-palette</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-image-area</v-icon>
        </v-btn>
        <v-btn text>
          <v-icon>mdi-package-down</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn text>
          <v-icon >mdi-dots-vertical</v-icon>
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
  },
  mounted() {
    this.getAllNotes();
  },
};
</script>
