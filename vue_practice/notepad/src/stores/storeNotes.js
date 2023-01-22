import { defineStore } from 'pinia';
import { db } from '@/js.firebase';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [
        {
          id: 'id1',
          content:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore beatae veniam nulla!',
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
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharCount: (state) => {
      let count = 0;
      state.notes.forEach((note) => {
        count += note.content.length;
      });
      return count;
    },
  },
});
