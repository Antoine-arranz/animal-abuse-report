import React from "react";
import ThemeProvider from "@/components/ui/ThemeProvider";
import { Slot } from "expo-router";
import "../global.css";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
