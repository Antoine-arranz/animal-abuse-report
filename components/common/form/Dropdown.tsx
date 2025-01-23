import { View } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { FontAwesome } from "@expo/vector-icons";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  value: string | null;
  onValueChange: (value: string) => void;
  placeholder?: string;
}

export function Dropdown({ options, value, onValueChange, placeholder }: DropdownProps) {
  return (
    <View className="border border-gray-300 rounded-md">
      <RNPickerSelect
        onValueChange={onValueChange}
        items={options}
        value={value}
        placeholder={{
          label: placeholder || "Sélectionnez une option",
          value: null,
        }}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            color: "black",
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            color: "black",
          },
        }}
        Icon={() => (
          <FontAwesome
            name="chevron-down"
            size={16}
            color="gray"
            style={{ padding: 15 }}
          />
        )}
      />
    </View>
  );
} 