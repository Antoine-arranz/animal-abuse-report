import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as RNTheme,
} from "@react-navigation/native";

export default function ThemeProvider(props: { children: React.ReactNode }) {
  return (
    <RNTheme value={DefaultTheme}>
      {props.children}
    </RNTheme>
  );
}
