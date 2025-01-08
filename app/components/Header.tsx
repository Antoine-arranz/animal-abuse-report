import { Image } from "expo-image";
import { Text, View } from "react-native";
import SubTitle from "./common/SubTitle";
import Title from "./common/Title";

export default function Header() {
  const image = require("@/assets/images/chat.jpg");

  return (
    <View className='h-[450px] w-full relative'>
      <Image
        source={image}
        style={{ width: "100%", height: "100%" }} // On utilise style ici car className ne fonctionne pas toujours bien avec expo-image
        contentFit='cover'
      />
      <View className='absolute inset-0 flex items-center justify-between py-5'>
        <Title>Animal maltraité ?</Title>
        <View>
          <SubTitle>Alertez au</SubTitle>
          <Text className='text-red-500 text-7xl font-bold text-center'>
            3677
          </Text>
        </View>
      </View>
    </View>
  );
}
