import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type Event = {
  id: string;
  name: string;
  location: string;
  startTime: string; // ISO date string
};

type Props = {
  event: Event;
  onPress: () => void;
};

export default function EventCard({ event, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{event.name}</Text>
      <Text style={styles.location}>{event.location}</Text>
      <Text style={styles.time}>
        {new Date(event.startTime).toLocaleString()}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2, // shadow on Android
  },
  name: { fontSize: 18, fontWeight: "bold" },
  location: { fontSize: 14, color: "#555" },
  time: { fontSize: 12, color: "#888" },
});
