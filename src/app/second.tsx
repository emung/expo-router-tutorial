import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function SecondScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>SecondScreen</Text>
      <Link style={styles.link} href="/third" push>
        Click to navigate to ThirdScreen
      </Link>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    fontSize: 20,
    fontWeight: "normal",
    color: "blue",
  },
});
