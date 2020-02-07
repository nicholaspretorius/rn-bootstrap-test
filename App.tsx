import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NewMessageForm from "./components/NewMessageForm";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <NewMessageForm />
    </View>
  );
}
