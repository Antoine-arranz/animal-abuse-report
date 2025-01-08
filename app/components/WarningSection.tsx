import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";
import WarningIcon from "./common/WarningIcon";

export default function WarningSection() {
  return (
    <View className='space-y-2.5 bg-black px-5 pb-3'>
      <View className='bg-white p-1.5'>
        <Text className='flex items-center justify-center gap-2 text-xs'>
          <WarningIcon color='red' />
          <Text>
            Ligne réservée aux signalements nécessitant la prise en charge
            urgente d'animaux maltraités.
          </Text>
        </Text>
      </View>

      <View className='space-y-1.5'>
        <Text className='text-white font-bold text-xs text-center'>
          7 jours sur 7, 365 jours par an, prix d'un appel local
        </Text>
        <Text className='text-white text-xs text-center'>
          Du lundi au vendredi de 9h à 19h – Samedi : 10h à 19h – Dimanche et
          jour férié : de 10h à 17h
        </Text>
      </View>
    </View>
  );
}
