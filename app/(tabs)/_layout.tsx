import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { StyleSheet, View } from "react-native";
import "../../global.css"; // Assure-toi que le chemin est correct
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarStyle: {
          paddingBottom: 0,
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: "Accueil",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='home' color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name='signalement'
        options={{
          title: "Je signale",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='paw' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='don'
        options={{
          title: "Nous soutenir",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='heart' color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='contact'
        options={{
          title: "3677",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name='phone' color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
