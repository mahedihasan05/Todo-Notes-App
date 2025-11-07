import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Note } from "../models/Note";

export const useNotesViewModel = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const stored = await AsyncStorage.getItem("notes");
    if (stored) setNotes(JSON.parse(stored));
  };

  const saveNotes = async (updated: Note[]) => {
    await AsyncStorage.setItem("notes", JSON.stringify(updated));
  };

  const addNote = (text: string) => {
    if (!text.trim()) return;
    const newNote: Note = { id: Date.now().toString(), text };
    const updated = [...notes, newNote];
    setNotes(updated);
    saveNotes(updated);
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter((n) => n.id !== id);
    setNotes(updated);
    saveNotes(updated);
  };

  return { notes, addNote, deleteNote };
};
