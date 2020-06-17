<template>
  <v-app>
    <nav>
      <v-toolbar class="amber lighten-1" flat>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
          <span class="font-weight-light">Fundoo</span><span>Notes</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          class="mx-4"
          flat
          filled
          rounded
          dense
          hide-details
          placeholder="Search"
          autocomplete="off"
        >
        </v-text-field>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <v-btn @click="userLogout()" text>
          Logout
        </v-btn>
      </v-toolbar>

      <v-container fluid >
        <v-layout row>
          <v-flex xs8 md4>
            <v-navigation-drawer floating v-model="drawer">
              <v-list nav dense>
                <v-list-item-group v-model="link" color="primary">
                  <v-list-item
                    v-for="link in links"
                    :key="link.text"
                    router
                    :to="link.route"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="link.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title v-text="link.text"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-navigation-drawer>
          </v-flex>

          <router-view></router-view>
          
        </v-layout>
      </v-container>
      
    </nav>
    
  </v-app>
</template>

<script>
import api from "../service/userService";
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
  data() {
    return {
      drawer: false,
      link: 0,
      links: [
        { text: "Notes", icon: "mdi-lightbulb", route: "createnote"},
        { text: "Reminder", icon: "mdi-gesture-tap", route: "shownotes"},
        { text: "Label", icon: "mdi-pencil" },
        { text: "Archive", icon: "mdi-package-down" },
        { text: "Trash", icon: "mdi-delete" },
      ],
    }
  },
  methods: {
    userLogout() {
      const token = localStorage.getItem("token");
      api.methods
        .logoutUser(token)
        .then((response) => {
          console.log(response);
          if (response.status == 204) {
            alert("logout successful");
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>
