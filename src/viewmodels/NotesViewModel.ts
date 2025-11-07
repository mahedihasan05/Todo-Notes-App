import { useState } from "react";
import { Note } from "../models/Note";

export const useNotesViewModel = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    if (text.trim().length === 0) return;
    const newNote: Note = {
      id: Date.now().toString(),
      text,
    };
    setNotes(prev => [...prev, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };

  return { notes, addNote, deleteNote };
};
