import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
// import { FontAwesome } from "@expo/vector-icons";

type Props = {
  content?: string;
  spinnerType: "line";
  loading: boolean;
};

export default function Loading({ content, spinnerType, loading }: Props) {
  return (
    <>
      {loading && (
        <View
          className={
            "bg-[#fff33] h-screen-safe w-screen-safe items-center justify-center"
          }
        >
          <View className={"bg-gray-300 p-4 rounded-lg h-32 w-32 items-center justify-center"}>
            <Text className="text-gray-600 text-lg">
              {content ?? "Loading..."}
            </Text>
            <View className="w-20 h-1 bg-white mt-6 rounded" />
          </View>
        </View>
      )}
    </>
  );
}
