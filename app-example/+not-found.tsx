import { View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function NotFoundScreen() {
  return (
    <>
      {/* This line is special:  */}
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      {/* The real content part: */}
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to home screen.
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
