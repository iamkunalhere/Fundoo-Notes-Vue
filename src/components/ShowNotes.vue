<template>
  <v-container>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        lg3
        @click="getID(item)"
        v-for="item in allNotes.slice().reverse()"
        :key="item.id"
      >
        <v-card class="ma-3" >
          <v-textarea
            flat
            solo
            rows="1"
            v-model="item.title"
            auto-grow
            @click="openDialog(item)"
          ></v-textarea>

          <v-textarea
            flat
            solo
            rows="1"
            v-model="item.description"
            auto-grow
          ></v-textarea>
          <v-card-actions>
            <Icons v-bind:note="item" v-bind:isCreateNote="false" />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog" width="510">
      <UpdateNote v-bind:noteDetails="updateNoteData" />
    </v-dialog>
  </v-container>
</template>
<script>
import Icons from "../components/Icons";
import UpdateNote from "../components/UpdateNote";
import notesApi from "../service/notesService";
export default {
  components: { Icons, UpdateNote },
  name: "ShowNotes",
  props: ["isCreateNote"],
  data() {
    return {
      dialog: false,
      updateNoteData: [],
      allNotes: [],
    };
  },
  methods: {
    getAllNotes() {
      const token = localStorage.getItem("token");
      notesApi.methods
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
    openDialog(item) {
      this.updateNoteData = item;
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
      this.getAllNotes();
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
