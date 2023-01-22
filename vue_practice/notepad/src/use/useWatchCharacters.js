import { watch } from 'vue';

export function useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (newVal, oldVal) => {
    if (newVal.length >= maxChars) {
      alert(`Only ${maxChars} characters allowed.`);
    }
  });
}
