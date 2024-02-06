import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { useState } from "react";

import EntryModal from "./EntryModal.js";
import DisplayEntries from "./components/DisplayEntries.js";

function getState() {
  return ["hello", "personal journal"];
}
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [entries, setEntries] = useState(getState);

  return (
    <SafeAreaView style={styles.container}>
      <DisplayEntries entries={entries} />

      <EntryModal
        modalVisible={modalVisible}
        setModalVisible={(state) => setModalVisible(state)}
        setEntries={(newEntry) => setEntries(newEntry)}
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
