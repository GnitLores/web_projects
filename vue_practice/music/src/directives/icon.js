export default {
  beforeMount(el, binding) {
    const iconClass = `fa fa-${binding.value} float-right text-green-400 text-2xl`;
    el.innerHTML += `<i class="${iconClass}"></i></i>`;
  },
};
