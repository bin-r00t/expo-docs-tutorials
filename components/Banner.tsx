import { View, Text } from "react-native";
import { Image } from "expo-image";
// import { FontAwesome } from "@expo/vector-icons";
import emojiImage from "../assets/images/emoji1.png";
import Button from "./Button";

type Props = {
  title: string;
  description?: string;
  image?: string;
  // onPress?: () => void;
};

export default function Banner({ title, description, image }: Props) {
  console.log(emojiImage);
  const onPress = () => {
    console.log("Banner clicked");
  };
  return (
    <View className="m-4 p-6 bg-[#bfdbfe50] rounded-3xl">
      <View className="items-start gap-3">
        <Text className="font-bold text-lg">{title}</Text>
        <Text className="text-gray-700 text-lg">{description}</Text>
        <Button onPress={onPress} label="Click me" type="primary" />
      </View>
      <View>
        <Image source={{ uri: emojiImage }} />
      </View>
    </View>
  );
}
