import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AlerteBandeau from "../components/AlertBandeau";
import Logo from "../components/Logo";
import Signalement from "../components/Signalement";
const image = require("@/assets/images/chat.jpg");

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Logo />
        <View style={styles.imageWrapper}>
          <Image source={image} style={styles.image} contentFit="cover" />
          <Text style={styles.title}>Animal maltraité ?</Text>
          <Text style={styles.alert}>Alertez au</Text>
          <Text style={styles.number}>3677</Text>
        </View>
        <View style={styles.informations}>
          <View style={styles.warning}>
            <Text>
              <FontAwesome
                size={28}
                name="warning"
                color="red"
                style={styles.warningIcon}
              />{" "}
              Ligne réservée aux signalements nécessitant la prise en charge
              urgente d'animaux maltraités.
            </Text>
          </View>
          <View>
            <Text style={styles.infosJour}>
              7 jours sur 7, 365 jours par an, prix d’un appel local
            </Text>

            <Text style={styles.infosTelephone}>
              Du lundi au vendredi de 9h à 19h – Samedi : 10h à 19h – Dimanche
              et jour férié : de 10h à 17h
            </Text>
          </View>
        </View>
        <AlerteBandeau />
        <Signalement />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    height: 450, // ou la hauteur souhaitée
    width: "100%",
    position: "relative", // Important pour les éléments absolus à l'intérieur
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  alert: {
    position: "absolute",
    bottom: 90,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  number: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "red",
    fontSize: 80,
    fontWeight: "bold",
  },
  warning: {
    backgroundColor: "white",
    padding: 5,
  },
  infosTelephone: {
    color: "white",
    marginTop: 10,
  },
  infosJour: {
    color: "white",
    fontWeight: "bold",
  },
  informations: {
    margin: 15,
    padding: 10,
    display: "flex",
    gap: 10,
  },
  warningIcon: {
    fontSize: 15,
  },
});
