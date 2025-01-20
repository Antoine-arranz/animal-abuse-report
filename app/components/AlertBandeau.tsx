import { Text, View } from "react-native";
import WarningIcon from "./common/WarningIcon";

export default function AlerteBandeau() {
  return (
    <View className="bg-red-600 flex items-center justify-center py-2">
      <Text className="text-white font-bold text-center text-lg">
        <WarningIcon color="white" />
        {"  "}EN CAS D'URGENCE, APPELEZ LE 17{"  "}
        <WarningIcon color="white" />
      </Text>
    </View>
  );
}
