import { StyleSheet, Text, View, Platform, Dimensions } from "react-native";
import { Image } from "expo-image";
import { useState, useEffect, useMemo } from "react";
const image = require("@/assets/images/chat.jpg");

export default function Index() {
  const [screenSize, setScreenSize] = useState(Dimensions.get("window"));

  useEffect(() => {
    const onResize = () => {
      setScreenSize(Dimensions.get("window"));
    };
    const subscription = Dimensions.addEventListener("change", onResize);
    return () => {
      subscription.remove();
    };
  }, []);

  const isDesktopFormat = useMemo<boolean>(() => {
    const { width } = screenSize;
    return Platform.OS === "web" && width > 768;
  }, [screenSize]);

  return (
    <View style={styles.container}>
      <View style={[styles.imageWrapper, isDesktopFormat && { height: "50%" }]}>
        <Image source={image} style={styles.image} contentFit='cover' />
        <Text style={styles.title}>Animal maltraité ?</Text>
        <Text style={styles.alert}>Alertez au</Text>
        <Text style={styles.number}>3677</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageWrapper: {
    height: "100%",
    position: "relative",
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
    fontSize: 40,
    fontWeight: "bold",
  },
  alert: {
    position: "absolute",
    bottom: 150,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  number: {
    position: "absolute",
    bottom: 60,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "red",
    fontSize: 80,
    fontWeight: "bold",
  },
});
