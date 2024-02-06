import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import { useState } from "react";

export default function EntryModal({ modalVisible, setModalVisible }) {
  const [text, setText] = useState("");

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.container}>
        <TextInput
          onChangeText={setText}
          placeholder="placeholder"
          style={styles.textField}
          multiline
        />
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.button}
        >
          <Text style={styles.text}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: "red",
    borderWidth: 2,
  },
  button: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: "lightblue",
    margin: 20,
  },
  textField: {
    flex: 1,
    padding: 10,
    fontSize: 24,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
});
