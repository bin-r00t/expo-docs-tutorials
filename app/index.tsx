import { View } from "react-native";
import Banner from "@/components/Banner";
import React, { useState } from "react";
import Switcher from "@/components/Switcher";
import Loading from "@/components/Loading";

export default function PlaygroundScreen() {
  const [banner, setBanner] = useState({
    title: "Title",
    description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. distinctio minima fuga!`,
  });
  return (
    <View className="flex-1 bg-gray-100">
      {/* <Loading spinnerType="line" loading={true} /> */}
      <Switcher
        content={[
          { label: "section1", value: "1" },
          { label: "section2", value: "2" },
          { label: "section3", value: "3" },
        ]}
      />
      <Banner title={banner.title} description={banner.description} />
      <Banner title={banner.title} image="234" />
    </View>
  );
}
