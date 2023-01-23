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
import { useStoreAuth } from '@/stores/storeAuth';

let notesCollection = null;
let notesQuery = null;
let unsubscribe = null;

export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return {
      notes: [],
      notesLoaded: false,
    };
  },
  actions: {
    init() {
      const storeAuth = useStoreAuth();
      notesCollection = collection(db, 'users', storeAuth.user.id, 'notes');
      notesQuery = query(notesCollection, orderBy('date', 'desc'));
      this.getNotes();
    },
    async getNotes() {
      this.notesLoaded = false;

      if (unsubscribe) unsubscribe();

      unsubscribe = onSnapshot(notesQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          notes.push({
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          });
        });
        this.notes = notes;
        this.notesLoaded = true;
      });
    },
    clearNotes() {
      this.notes = [];
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
