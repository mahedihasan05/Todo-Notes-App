import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { Note } from "../../models/Note";

interface NoteItemProps {
  note: Note;
  onDelete: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onDelete }) => {
  return (
    <TouchableOpacity
      style={styles.noteContainer}
      onPress={() => onDelete(note.id)}
    >
      <Text style={styles.noteText}>{note.text}</Text>
      <Text style={styles.deleteText}>🗑️</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
  },
  noteText: {
    fontSize: 16,
  },
  deleteText: {
    fontSize: 18,
  },
});

export default NoteItem;
