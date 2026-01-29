import { Redirect } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
  //   return <Slot />;
  // return (
  //   <View style={styles.container}>
  //     <Text>From the sixth layer</Text>
  //   </View>
  // );
  return <Redirect href="/second" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c97777ff",
  },
});
