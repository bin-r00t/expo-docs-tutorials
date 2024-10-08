import { NavigationProp } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  navigation: NavigationProp<any>;
};
export default function Index({ navigation }: Props) {
  function handleToFindFriendScreen() {
    navigation.navigate("AddFriend");
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <View style={styles.btnContainer}>
        <Pressable
          style={styles.btn}
          android_ripple={{ color: "#e1e2e388" }}
          onPress={handleToFindFriendScreen}
        >
          <Text style={styles.btnText}>Find Friend Screen</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#7259d1",
    marginTop: 24,
    borderRadius: 24,
  },
  btn: {
    padding: 12,
    paddingHorizontal: 80,
    textAlign: "center",
  },
  btnText: { color: "#fff" },
});
