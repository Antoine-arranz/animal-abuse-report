import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";
import WarningIcon from "./common/WarningIcon";

export default function AlerteBandeau() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <WarningIcon color='white' />
        EN CAS D'URGENCE, APPELEZ LE 17
        <WarningIcon color='white' />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: 5,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  icon: {
    fontSize: 18,
  },
});
