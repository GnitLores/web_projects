<template>
  <div class="todo">
    <div class="title has-text-centered">Todo</div>

    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Add a todo" />
      </p>
      <p class="control">
        <a class="button is-info"> Add </a>
      </p>
    </div>
  </div>
</template>

<style>
@import "bulma/css/bulma.min.css";

.todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>
