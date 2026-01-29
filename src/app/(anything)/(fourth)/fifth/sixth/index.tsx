import { StyleSheet, Text, View } from "react-native";

export default function DeeplyNestedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Deeply Nested Screen here</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "darkgreen",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
