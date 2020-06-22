<template>
  <v-app>
    <v-app-bar app clipped-left color="amber">
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

      <div class="text-center">
        <v-menu v-model="menu">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ userEmail }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn text @click="menu = false">Cancel</v-btn>
              <v-btn color="primary" text @click="userLogout()">Logout</v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped expand-on-hover floating>
      <v-list dense>
        <template v-for="(link, i) in links">
          <v-row v-if="link.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="link.heading">
                {{ link.heading }}
              </v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text>edit</v-btn>
            </v-col>
          </v-row>
          <v-divider
            v-else-if="link.divider"
            :key="i"
            dark
            class="my-4"
          ></v-divider>
          <v-list-item v-else :key="i" router :to="link.route">
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ link.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <div class="routeView">
      <router-view></router-view>
    </div>
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
      userEmail: localStorage.getItem("email"),

      menu: false,

      drawer: false,
      link: 0,
      links: [
        { text: "Notes", icon: "mdi-lightbulb", route: "createnote" },
        { text: "Reminder", icon: "mdi-gesture-tap" },
        { divider: true },
        { heading: "Labels" },
        { text: "Label", icon: "mdi-pencil" },
        { divider: true },
        { text: "Archive", icon: "mdi-package-down", route: "archivenotes" },
        { text: "Trash", icon: "mdi-delete", route: "trashnotes" },
      ],
    };
  },
  methods: {
    userLogout() {
      const token = localStorage.getItem("token");
      api.methods
        .logoutUser(token)
        .then((response) => {
          console.log(response);
          if (response.status == 204) {
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped src="@/css/Navbar.css"></style>
