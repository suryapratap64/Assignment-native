import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { gql, useApolloClient } from "@apollo/client";
import io from "socket.io-client";
import { useRoute } from "@react-navigation/native";

const JOIN_EVENT_MUTATION = gql`
  mutation JoinEvent($eventId: ID!) {
    joinEvent(eventId: $eventId) {
      id
      name
    }
  }
`;

const socket = io("http://localhost:4000/graphql"); // adjust to your backend URL

export default function EventDetailScreen() {
  const route = useRoute<any>();
  const eventId = route.params?.eventId;
  const client = useApolloClient();
  const [attendees, setAttendees] = useState<any[]>([]);

  useEffect(() => {
    socket.emit("joinEventRoom", eventId);

    socket.on("attendeesUpdate", (data) => {
      setAttendees(data);
    });

    return () => {
      socket.off("attendeesUpdate");
    };
  }, [eventId]);

  const handleJoin = async () => {
    await client.mutate({ mutation: JOIN_EVENT_MUTATION, variables: { eventId } });
  };

  return (
    <View style={styles.container}>
      <Button title="Join Event" onPress={handleJoin} />
      <Text style={styles.title}>Attendees:</Text>
      <FlatList
        data={attendees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.attendee}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginVertical: 10 },
  attendee: { padding: 5 }
});
