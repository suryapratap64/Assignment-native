import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type User = {
  id: string;
  name: string;
  email: string;
};

type Props = {
  attendees: User[];
};

export default function AttendeeList({ attendees }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Attendees:</Text>
      <FlatList
        data={attendees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name} ({item.email})</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 16 },
  title: { fontSize: 16, fontWeight: "bold", marginBottom: 8 },
  item: { fontSize: 14, color: "#333", marginVertical: 2 },
});
