<template>
<v-app>
  <nav>
      <v-toolbar class="amber lighten-1" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
      <span class="font-weight-light">Fundoo</span><span>Notes</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-magnify</v-icon>
      <v-text-field
        class="mx-4"
        flat
        hide-details
        label="Search"
        solo-inverted
        autocomplete="off"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      </v-toolbar>
      
      <v-navigation-drawer floating v-model="drawer">
        <v-list nav dense>
         <v-list-item-group v-model="link" color="primary">
          <v-list-item v-for="(link, i) in links" :key="i">
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
    drawer:false,
    link: 0,
    links: [
        { text: 'Note', icon: 'mdi-note' },
        { text: 'Reminder', icon: 'mdi-alert' },
        { text: 'Label', icon: 'mdi-label' },
        { text: 'Archive', icon: 'mdi-archive' },
        { text: 'Trash', icon: 'mdi-delete-sweep' }
      ],
    }
  }
};
</script>

<style>

</style>