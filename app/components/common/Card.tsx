import { Image } from "expo-image";
import { Text, View } from "react-native";
import Button from "./Button";
import { FontAwesome } from "@expo/vector-icons";

interface CardProps {
  imageSource: string;
  title: string;
  description: string;
  buttonText: string;
  icon?: keyof typeof FontAwesome.glyphMap;
}

export default function Card({
  imageSource,
  title,
  description,
  buttonText,
  icon,
}: CardProps) {
  return (
    <View className="space-y-2 bg-white m-4 rounded-md p-2 flex items-center shadow-md">
      <Image source={imageSource} className="w-40 h-40" />
      <Text className="font-bold text-xl text-center">{title}</Text>
      <Text className="text-base text-center">{description}</Text>
      <Button color="bg-black" content={buttonText} icon={icon} />
    </View>
  );
}
