import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";

import EntryModal from "./EntryModal.js";
import DisplayEntries from "./components/DisplayEntries.js";

import { createTable, getItems } from "./database/database.js";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [entries, setEntries] = useState(null);
  const [newEntry, setNewEntry] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        await createTable();
        const data = await getItems();
        if (data != null && data.length !== 0) {
          setEntries(data);
        }
      } catch (e) {
        console.log("Unable to retrieve entries.");
      }
    })();
  }, [newEntry]);

  return (
    <SafeAreaView style={styles.container}>
      <DisplayEntries entries={entries} />

      <EntryModal
        modalVisible={modalVisible}
        setModalVisible={(state) => setModalVisible(state)}
        setNewEntry={(newEntry) => setNewEntry(newEntry)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Add Entry</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "lightblue",
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});
