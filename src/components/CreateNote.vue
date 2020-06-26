<template>
  <div>
        <v-container >
          <v-row align="center" justify="center">
            <v-col cols="6">
              <v-card
                width="510"
                height="50"
                v-show="isdisplay"
                @click="openCard()"
              >
                <v-text-field flat placeholder="Create a Note..." solo>
                </v-text-field>
              </v-card>
              <v-card width="510" v-show="!isdisplay">
                <v-textarea
                  flat
                  solo
                  rows="1"
                  row-height="10"
                  label="Title"
                  auto-grow
                  v-model="title"
                ></v-textarea>

                <v-textarea
                  flat
                  solo
                  rows="1"
                  row-height="10"
                  label="Note detail..."
                  auto-grow
                  v-model="discription"
                ></v-textarea>
                <v-card-actions>
                  <Icons v-bind:isCreateNote="true" />
                  <v-spacer></v-spacer>
                  <v-btn text @click="closeCard()">close</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      
    <div>
      <v-snackbar v-model="successSnackbar">{{ successtext }}</v-snackbar>
  
    </div>
    </div>
</template>

<script>
import api from "../service/userService";
import Icons from "../components/Icons";
export default {
  components: { Icons },
  name: "CreateNote",
  props: ["isCreateNote"],
  data() {
    return {
      isdisplay: true,
      title: "",
      discription: "",
      successSnackbar: false,
      successtext: "Note added Successfully",
    };
  },
  methods: {
    openCard() {
      this.isdisplay = false;
    },
    closeCard() {
      this.isdisplay = true;
      const newNote = {
        title: this.title,
        description: this.discription,
      };
      const token = localStorage.getItem("token");
      api.methods
        .addNote(newNote, token)
        .then((response) => {
          if (response.status == 200) {
            this.successSnackbar = true;
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

<style ></style>
