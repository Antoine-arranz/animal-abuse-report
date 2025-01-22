import React from 'react'
import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: 'secondary-lightGray',
            height: 90,
            paddingBottom: 30,
            paddingTop: 10,
          },
          android: {
            backgroundColor: 'white',
            elevation: 8,
            height: 70,
            paddingBottom: 15,
            paddingTop: 10,
          },
        }),
        tabBarActiveTintColor: '#d41116',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarIconStyle: {
          marginBottom: -3,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="signalement"
        options={{
          title: "Je signale",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="exclamation-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="don"
        options={{
          title: "Don",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="phone" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
