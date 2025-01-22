import { Text, View } from "react-native";
import WarningIcon from "@/components/common/icons/WarningIcon";

export default function AlerteBandeau() {
  return (
    <View className="bg-error flex items-center justify-center py-2">
      <Text className="text-white font-bold text-body text-center">
        <WarningIcon color="white" />
        {"  "}EN CAS D'URGENCE, APPELEZ LE 17{"  "}
        <WarningIcon color="white" />
      </Text>
    </View>
  );
}
