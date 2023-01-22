import { defineStore } from 'pinia';
import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '@/js/firebase';

const notesCollection = collection(db, 'notes');
const notesQuery = query(notesCollection, orderBy('date', 'desc'));

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
    };
  },
  actions: {
    async getNotes() {
      onSnapshot(notesQuery, (querySnapshot) => {
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
      // can also use this to generate id: const id = window.crypto.randomUUID();
      await addDoc(notesCollection, {
        content: noteText,
        date: Date.now().toString(),
      });
    },
    async deleteNote(id) {
      await deleteDoc(doc(notesCollection, id));
    },
    async updateNote(id, content) {
      await updateDoc(doc(notesCollection, id), {
        content,
        date: Date.now().toString(),
      });
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
