import { FontAwesome } from "@expo/vector-icons";

interface WarningIconProps {
  color: string;
  size?: number;
}

export default function WarningIcon({ color, size = 20 }: WarningIconProps) {
  return <FontAwesome name="warning" size={size} color={color} />;
} 