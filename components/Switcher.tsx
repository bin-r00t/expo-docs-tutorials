import { StyleSheet, View, Text, Pressable } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
import React, { useCallback } from "react";
import { PickPartial } from "expo-router";

type ContentItem = {
  label: string;
  value: string;
};
type Props = {
  content: Array<ContentItem>;
  onSelect?: () => void;
};

export default function Switcher({ content, onSelect }: Props) {
  const [active, setActive] = React.useState<string | null>(null);
  const onPress = (item: ContentItem) => {
    setActive(item.value);
  };
  return (
    <View className={"bg-white m-3 p-1 shadow rounded-lg flex-row gap-1"}>
      {content.map((item, index) => (
        <>
          <Pressable
            onPress={() => onPress(item)}
            key={item.value}
            // style={pressed => ({ backgroundColor: pressed ? "#f0f0f0" : "white" })}
            className="flex-1 rounded-lg"
          >
            <View className={`p-2 rounded-lg items-center active:bg-gray-200 `}>
              <Text>{item.label}</Text>
            </View>
          </Pressable>
          {index != content.length - 1 && (
            <View className="mt-2 h-6 w-[1px] bg-gray-300"></View>
          )}
        </>
      ))}
    </View>
  );
}
