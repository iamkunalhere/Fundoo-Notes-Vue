<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg4
        @click="getID(item)"
        v-for="item in allNotes"
        :key="item.id"
      >
        <v-card class="ma-3">
          <v-textarea
            flat
            solo
            rows="1"
            v-model="item.title"
            auto-grow
          ></v-textarea>

          <v-textarea
            flat
            solo
            rows="1"
            v-model="item.description"
            auto-grow
          ></v-textarea>
          <v-card-actions>
            <Icons v-bind:note="item" v-bind:isCreateNote="false"/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Icons from "../components/Icons";
import api from "../service/userService";
export default {
  components: { Icons },
  name: "ShowNotes",
  props: ["isCreateNote"],
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
          this.allNotes = noteDetails.filter(function(note) {
            return note.isDeleted == false && note.isArchived == false;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getID(item) {
      return item;
    },
  },
  created() {
    this.$root.$refs.ShowNotes = this;
  },
  mounted() {
    this.getAllNotes();
    this.getID();
  },
};
</script>

<style></style>
