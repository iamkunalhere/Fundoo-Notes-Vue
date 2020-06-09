<template>
<v-app>
  <nav>
      <v-toolbar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
      <span class="font-weight-light">Fundoo</span><span>Notes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn flat>Sign out</v-btn>
      </v-toolbar>
      <v-navigation-drawer floating class="grey lighten-4" v-model="drawer">
        <v-list>
          <v-list-item>
            <v-btn icon>
            <v-icon>mdi-note</v-icon>
            </v-btn>
            <v-list-item-title> 
            Notes
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-btn icon>
            <v-icon>mdi-report</v-icon>
            </v-btn>
            <v-list-item-title>Reminders</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-btn icon>
            <v-icon>mdi-edit</v-icon>
            </v-btn>
            <v-list-item-title>Edit labels</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-btn icon>
            <v-icon>mdi-archive</v-icon>
            </v-btn>
            <v-list-item-title>Archive</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-btn icon>
            <v-icon>mdi-delete_sweep</v-icon>
            </v-btn>
            <v-list-item-title>Trash</v-list-item-title>
          </v-list-item>
      </v-list>
      </v-navigation-drawer>
  </nav>
</v-app>
</template>

<script>
export default {
name: "Navbar",
  props: {
    msg: String
  },
  data() {
    return {
    drawer:false
    }
  }
};
</script>

<style>

</style>