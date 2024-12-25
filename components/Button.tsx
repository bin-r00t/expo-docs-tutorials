import { StyleSheet, View, Text, Pressable } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";

type Props = {
  label: string;
  type: "primary" | "secondary" | "tertiary";
  onPress?: () => void;
};

export default function Button({ label, type, onPress }: Props) {
  let containerClassName = "rounded-xl p-4";
  let labelClassName = "text-lg";
  if (type === "primary") {
    containerClassName += " bg-blue-600";
    labelClassName += " text-white";
  } else if (type === "secondary") {
    containerClassName += " border border-blue-600";
    labelClassName += " text-blue-600";
  } else {
    labelClassName += " text-blue-600";
  }
  return (
    <View className={containerClassName}>
      <Pressable onPress={onPress}>
        <Text className={labelClassName}>{label}</Text>
      </Pressable>
    </View>
  );
}
