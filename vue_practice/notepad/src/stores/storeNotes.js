import { defineStore } from 'pinia';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/js/firebase';

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotes() {
      const querySnapshot = await getDocs(collection(db, 'notes'));
      console.log('hej');
      querySnapshot.forEach((doc) => {
        this.notes.push({
          id: doc.id,
          content: doc.data().content,
        });
      });
    },
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
