import { defineStore } from 'pinia';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error maxime, vero deleniti voluptatem molestias ad! Architecto illum amet magnam, illo sed aspernatur porro enim nam adipisci, ea sint cumque non.',
        },
        {
          id: 'id2',
          content: 'Shorter note',
        },
      ],
    };
  },
  actions: {
    addNote(noteText) {
      let note = {
        id: window.crypto.randomUUID(),
        content: noteText,
      };
      this.notes.unshift(note);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id == id);

      // console.log(this.notes[index]);
      this.notes[index].content = content;
    },
  },
  getters: {
    // You can't pass arguments to getters, but you can return a function with access to the state.
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id)[0].content;
      };
    },
  },
});
