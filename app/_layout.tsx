import React from "react";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { Slot } from "expo-router";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import Text from "@/components/common/typography/Text";
import PhoneBanner from "@/components/common/layout/PhoneBanner";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style='light' backgroundColor='black' />
      <PhoneBanner/>
      <Slot />
    </ThemeProvider>
  );
}
