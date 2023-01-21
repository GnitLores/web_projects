<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note" />
        </div>
      </div>
      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <div class="card mb-4" v-for="i in 3">
      <div class="card-content">
        <div class="content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
          maxime, vero deleniti voluptatem molestias ad! Architecto illum amet
          magnam, illo sed aspernatur porro enim nam adipisci, ea sint cumque
          non.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
