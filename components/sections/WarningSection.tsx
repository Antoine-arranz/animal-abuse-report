import { View } from "react-native";
import Text from "../common/typography/Text";
import WarningIcon from "@/components/common/icons/WarningIcon";
import { WORKING_HOURS } from "@/utils/constants";

export default function WarningSection() {
  return (
    <View className="flex gap-2 bg-secondary px-5 pb-3">
      <View className="bg-white p-1.5">
        <View className="flex flex-row items-center justify-center gap-2">
          <WarningIcon color="red" />
          <Text variant="small">
            Ligne réservée aux signalements nécessitant la prise en charge
            urgente d'animaux maltraités.
          </Text>
        </View>
      </View>

      <View>
        <Text variant="small" weight="bold" color="white" className="text-center">
          7 jours sur 7, 365 jours par an, prix d'un appel local
        </Text>
        <Text variant="small" color="white" className="text-center">
          {`Du lundi au vendredi de ${WORKING_HOURS.weekdays} – Samedi : ${WORKING_HOURS.saturday} – Dimanche et jour férié : ${WORKING_HOURS.sunday}`}
        </Text>
      </View>
    </View>
  );
} 