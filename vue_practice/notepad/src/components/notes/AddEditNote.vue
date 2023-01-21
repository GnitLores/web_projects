<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <div class="control">
        <textarea
          :value="props.modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          ref="textAreaRef"
          class="textarea"
          placeholder="Add a new note"
        />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const textAreaRef = ref(null);

const emit = defineEmits(['update:modelValue']);

const focusTextArea = () => {
  textAreaRef.value.focus();
};

defineExpose({
  focusTextArea,
});
</script>

<style scoped></style>
