<template>
  <v-app>
    <div >
      <v-main>
        <v-container fluid>
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
                  <v-btn text>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn text @click="closeCard()">close</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </div>
    <div class="notesContainer">
      <ShowNotes />
    </div>
    <v-snackbar v-model="successSnackbar">{{ successtext }}</v-snackbar>
    <v-snackbar v-model="failureSnackbar">{{ failuretext }}</v-snackbar>
  </v-app>
</template>

<script>
import api from "../service/userService";
import ShowNotes from "../components/ShowNotes";
export default {
  components: { ShowNotes },
  name: "CreateNote",
  data() {
    return {
      isdisplay: true,
      title: "",
      discription: "",
      successSnackbar: false,
      failureSnackbar: false,
      successtext: "Note added Successfully",
      failuretext: "Empty Note...!",
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
          } else {
            this.failureSnackbar = true;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped src="@/css/CreateNote.css"></style>
