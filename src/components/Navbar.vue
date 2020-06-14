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
        prepend-icon="mdi-magnify"
        class="mx-4"
        flat
        hide-details
        label="Search"
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
      <v-btn @click="userLogout()" icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      </v-toolbar>

    <div class="createNote">
      <v-card>
      <v-card-title>
          <v-text-field placeholder="Title" solo flat>
          </v-text-field>
      </v-card-title>
      <v-card-text>
        <v-textarea
          solo
          label="Take a note..."
        ></v-textarea>
      </v-card-text>
      </v-card>
    </div> 

      <v-navigation-drawer floating v-model="drawer">
        <v-list nav dense>
         <v-list-item-group v-model="link" color="primary">
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
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
        { text: 'Note', icon: 'mdi-note', route: '/navbar/createNote' },
        { text: 'Reminder', icon: 'mdi-alert' },
        { text: 'Label', icon: 'mdi-label' },
        { text: 'Archive', icon: 'mdi-archive' },
        { text: 'Trash', icon: 'mdi-delete-sweep' }
      ],
    }
  }
};
</script>

<style scoped>
.createNote {
    display: flex;
    justify-content: center;
}
</style>