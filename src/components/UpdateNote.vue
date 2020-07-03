<template>
  <div>
    <v-card width="510">
      <v-textarea
        flat
        solo
        rows="1"
        row-height="10"
        auto-grow
        v-model="noteDetails.title"
        style="color:red"
      ></v-textarea>

      <v-textarea
        flat
        solo
        rows="1"
        row-height="10"
        auto-grow
        v-model="noteDetails.description"
      ></v-textarea>
      <v-card-actions>
        <Icons v-bind:isCreateNote="true" />
        <v-spacer></v-spacer>
        <v-btn text @click="updateNote()">close</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Icons from "../components/Icons";
import notesApi from "../service/notesService";
export default {
  components: { Icons },
  name: "UpdateNote",
  props: ["noteDetails"],
  data() {
    return {};
  },
  methods: {
    updateNote() {
      const noteDetails = {
        noteId: this.noteDetails.id,
        title: this.noteDetails.title,
        description: this.noteDetails.description,
      };
      notesApi.methods
        .updateNote(noteDetails)
        .then((response) => {
          if (response) {
            this.$root.$refs.ShowNotes.closeDialog();
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
