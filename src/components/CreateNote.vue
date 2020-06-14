<template>
<div class="createNote">
    <v-card>
      <v-card-title>
          <v-text-field placeholder="Title" solo>
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
</template>

<script>
export default {
name: "CreateNote"
};
</script>

<style scoped>
.createNote {
    display: flex;
    justify-content: center;
}
</style>