import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useNotesViewModel } from "../../viewmodels/NotesViewModel";
import NoteItem from "../components/NoteItem";

const NotesScreen: React.FC = () => {
  const { notes, addNote, deleteNote } = useNotesViewModel();
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addNote(input);
    setInput("");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Heading */}
      <Text style={styles.heading}>📝 Todo Notes</Text>

      {/* Input Row */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter a note..."
          value={input}
          onChangeText={setInput}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

      {/* Notes List */}
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem note={item} onDelete={deleteNote} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No notes yet. Add one!</Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // added top margin
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 8,
    height: 40,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 30,
    color: "#999",
    fontStyle: "italic",
  },
});

export default NotesScreen;
