<template>
  <div>
    <div v-for="items in allNotes" :key="items.id">
      <v-card width="500px" height="300px" class="margin:40px">
        <v-card-title>{{ items.title }}</v-card-title>
        <v-card-text>{{ items.description }}</v-card-text>
      </v-card>
    </div>
  </div>
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
      api.methods.getAllNotes(token)
        .then(response => {
            const noteDetails = JSON.stringify(response);
            this.allNotes = noteDetails;
            console.log(this.allNotes);
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
