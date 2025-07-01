import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../graphql/queries";

export default function EventListScreen({ navigation }: any) {
  const { data, loading, error } = useQuery(GET_EVENTS);

  useEffect(() => {
    console.log({ loading, error, events: data?.events });
  }, [loading, error, data]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;


  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={data?.events || []}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EventDetail", { eventId: item.id })
            }
            style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}
          >
            <Text style={{ fontSize: 16 }}>{item.name}</Text>
            <Text style={{ color: "#666" }}>{item.location}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
