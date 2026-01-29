import { Link, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>IndexScreen</Text>
      {/* this is one way how to navigate to other screens */}
      <Link style={styles.link} href="/second" push>
        Click to navigate to SecondScreen
      </Link>

      {/* This is another way how to navigate to other screens*/}
      <Pressable style={styles.button} onPress={() => router.push("/second")}>
        <Text>Goto second screen</Text>
      </Pressable>

      {/* It is also possible to combine a Link component together with a Button / Pressable */}
      <Link href="/third" asChild>
        <Pressable style={styles.button}>
          <Text>Goto third screen directly</Text>
        </Pressable>
      </Link>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/fifth/sixth")}
      >
        <Text>Goto deeply nested screen</Text>
      </Pressable>
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
  button: {
    fontSize: 20,
    fontWeight: "normal",
    color: "blue",
    margin: 10,
    borderWidth: 2,
    borderColor: "blue",
    padding: 10,
    borderRadius: 10,
  },
});
