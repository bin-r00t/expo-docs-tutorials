import { View, StyleSheet, Text } from "react-native";
import Banner from "@/components/Banner";
import React, { useState } from "react";

export default function PlaygroundScreen() {
  const [banner, setBanner] = useState({
    title: "Title",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. distinctio minima fuga!`,
  });
  return (
    <View className="flex-1 bg-gray-100">
      <Banner title={banner.title} description={banner.description} />
      {/* <View className="m-2 rounded-3xl p-12 bg-blue-200">
        <Text>Lorem ipsum dolor sit.</Text>
      </View> */}
    </View>
  );
}
