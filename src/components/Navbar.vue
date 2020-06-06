<template>
  <div>
      <v-toolbar>
      <v-toolbar-title>Fundoo Notes</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat>Sign out</v-btn>
      </v-toolbar>
  </div>
</template>

<script>
export default {
name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<style>

</style>