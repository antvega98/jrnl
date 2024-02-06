import { ScrollView, Text } from "react-native";

import EntryDisplayComponent from "./EntryDisplayComponent";

export default function DisplayEntries({ entries }) {
  return (
    <ScrollView>
      {entries ? (
        entries.map((text, index) => {
          return <EntryDisplayComponent key={index} text={text} />;
        })
      ) : (
        <Text>No entries.</Text>
      )}
    </ScrollView>
  );
}
