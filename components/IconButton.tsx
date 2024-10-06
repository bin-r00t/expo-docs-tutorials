import { View, Pressable, Text, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

type Props = {
  // important: the keyof operator is used to ensure that the icon prop is a valid MaterialIcons icon name
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButtonContainer: {},
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonText: {
    color: "#fff",
    marginTop: 12,
  },
});
