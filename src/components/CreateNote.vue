<template>
<div>
    <v-card width=510 height="50" v-show="isdisplay" @click="openCard()">    
              <v-text-field flat placeholder="Create a Note..." solo > </v-text-field>
          </v-card>
          <v-card width=510 v-show="!isdisplay">    
              <v-textarea flat solo 
              rows="1"
              row-height="10"
              label="Title" auto-grow
              v-model="title"></v-textarea>
        
              <v-textarea flat solo 
              rows="1"
              row-height="10"
              label="Note detail..." auto-grow
              v-model="discription"></v-textarea>
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
</div>
</template>

<script>
import api from "../service/userService";
export default {
name: "CreateNote",
data() {
    return {
      isdisplay: true,
      title:"",
      discription:""
    };
  },
  methods: {
    openCard() {
      this.isdisplay = false;
    },
    closeCard() {
      this.isdisplay = true;
      const newNote ={
        title: this.title,
        description: this.discription
      }
      const token = localStorage.getItem("token");
      api.methods.addNote(newNote,token)
        .then(response => {
          if(response.status == 200) {
            alert("Note added successful");
          }
        })
        .catch(error => {
          console.log(error);
        });

    }
  }
};
</script>

<style scoped>

</style>