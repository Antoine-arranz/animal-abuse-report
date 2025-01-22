import { Image } from 'expo-image';
import { View } from 'react-native';

export default function Logo() {
  return (
    <View className="absolute top-0 left-0 pl-1.5 z-50 bg-transparent">
      <Image 
        source="https://3677.fr/wp-content/uploads/2024/04/3677-SOS-maltraitance-animale-LogoFull.svg" 
        className="w-20 h-20"
        contentFit="contain"
      />
    </View>
  );
} 