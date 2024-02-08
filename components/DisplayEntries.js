import { ScrollView, Text } from "react-native";

import EntryDisplayComponent from "./EntryDisplayComponent";

export default function DisplayEntries({ entries }) {
  return (
    <ScrollView>
      {entries ? (
        entries.map((obj, index) => {
          return <EntryDisplayComponent key={index} text={obj.value} />;
        })
      ) : (
        <Text>No entries.</Text>
      )}
    </ScrollView>
  );
}
