import { Image } from "expo-image";
import { View } from "react-native";
import Button from "@/components/common/Button";
import { FontAwesome } from "@expo/vector-icons";
import Card from "@/components/common/Card";
import Text from "@/components/common/typography/Text";

interface SignalementCardProps {
  imageSource: string;
  title: string;
  description: string;
  buttonText: string;
  icon?: keyof typeof FontAwesome.glyphMap;
  onPress?: () => void;
}

export default function SignalementCard({
  imageSource,
  title,
  description,
  buttonText,
  icon,
  onPress,
}: SignalementCardProps) {
  return (
    <Card variant="elevated">
      <View className="w-full items-center justify-center">
        <Image 
          source={imageSource} 
          className="w-40 h-40" 
          contentFit="contain"
          contentPosition="center"
        />
      </View>
      <Text variant="title" weight="bold" color="secondary" className="text-center mb-4">
        {title}
      </Text>
      <Text variant="body" color="secondary" className="text-center mb-4">
        {description}
      </Text>
      <Button 
        variant="secondary" 
        content={buttonText} 
        icon={icon}
        onPress={onPress}
      />
    </Card>
  );
}