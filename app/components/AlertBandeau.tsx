import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

export default function AlerteBandeau() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {" "}
        <FontAwesome
          size={28}
          name="warning"
          color="white"
          style={styles.icon}
        />{" "}
        EN CAS D'URGENCE, APPELEZ LE 17
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
    fontSize:18
    },
    icon: {
        fontSize:18
  }
});
