import { Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

type ButtonProps = {
  content: string;
  color?: string;
  icon?: keyof typeof FontAwesome.glyphMap; // Les noms des icônes disponibles
};

export default function Button({
  content,
  color = "bg-blue-500",
  icon,
}: ButtonProps) {
  return (
    <Pressable className={`${color} py-3 px-6 rounded-full flex-row items-center`}>
      {icon && (
        <FontAwesome
          name={icon}
          size={18}
          color="white"
          style={{ marginRight: 8 }} // Espacement entre l'icône et le texte
        />
      )}
      <Text className="text-white text-center">{content}</Text>
    </Pressable>
  );
}
