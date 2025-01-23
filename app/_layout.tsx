import React from "react";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { Slot } from "expo-router";
import "../global.css";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style='light' backgroundColor='black' />
      <Slot />
    </ThemeProvider>
  );
}
