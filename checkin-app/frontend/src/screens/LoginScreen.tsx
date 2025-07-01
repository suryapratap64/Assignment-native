import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { useAuthStore } from "../state/authStore";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [tokenInput, setTokenInput] = useState("");
  const setToken = useAuthStore((s) => s.setToken);

  const navigation = useNavigation<any>();
const token = useAuthStore((s) => s.token);
console.log("My token:", token);

  const handleLogin = () => {
   
    setToken(tokenInput || "mock-token");
    navigation.navigate("EventList");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Enter token"
        value={tokenInput}
        onChangeText={setTokenInput}
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 4 }
});
