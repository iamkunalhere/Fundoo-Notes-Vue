<template>
  <div class="noteList">
    <div>
      <CreateNote />
      <ShowNotes />
    </div>
  </div>
</template>

<script>
import CreateNote from "../components/CreateNote";
import ShowNotes from "../components/ShowNotes";
export default {
  components: { ShowNotes, CreateNote },
};
</script>

<style scoped src="@/css/NoteList.css"></style>
