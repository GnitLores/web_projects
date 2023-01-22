import { defineStore } from 'pinia';
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';
import { db } from '@/js/firebase';

const notesCollection = collection(db, 'notes');

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(notesCollection, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          notes.push({
            id: doc.id,
            content: doc.data().content,
          });
        });
        this.notes = notes;
      });
    },
    async addNote(noteText) {
      const id = window.crypto.randomUUID();
      await setDoc(doc(notesCollection, id), {
        content: noteText,
      });
    },
    async deleteNote(id) {
      await deleteDoc(doc(notesCollection, id));
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
