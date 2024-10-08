import { Ionicons } from "@expo/vector-icons";
import { View, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

export default function IconButton({ icon, label }: Props) {
  return (
    <View style={styles.iconButtonContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          pressed && styles.iconButtonPressed,
        ]}
      >
        <Ionicons
          name={icon}
          size={22}
          color="#232323"
          style={styles.iconStyle}
        />
      </Pressable>
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconButtonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  iconButton: {
    backgroundColor: "white",
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#e1e2e3",
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonPressed: {
    backgroundColor: "#f1f2f3",
  },
  iconStyle: {},
  iconButtonLabel: {
    marginTop: 8,
    fontSize: 12,
    color: "#717273",
  },
});
