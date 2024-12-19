import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function TestScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "dosis", color: '#fff', fontSize: 28 }}>Test Page</Text>
      <Link href="/" style={styles.button}>
        Go back to home screen.
      </Link>
    </View>
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
