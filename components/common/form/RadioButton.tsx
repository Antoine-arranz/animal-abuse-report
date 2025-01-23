import { View, TouchableOpacity } from "react-native";
import Text from "@/components/common/typography/Text";

interface Option {
  label: string;
  value: any;
}

interface RadioButtonProps {
  options: Option[];
  value: any;
  onChange: (value: any) => void;
}

export function RadioButton({ options, value, onChange }: RadioButtonProps) {
  return (
    <View className="space-y-2">
      {options.map((option) => (
        <TouchableOpacity
          key={option.label}
          className="flex-row items-center space-x-2"
          onPress={() => onChange(option.value)}
        >
          <View
            className={`h-5 w-5 rounded-full border-2 border-primary justify-center items-center
              ${value === option.value ? "bg-primary" : "bg-white"}`}
          >
            {value === option.value && (
              <View className="h-2 w-2 rounded-full bg-white" />
            )}
          </View>
          <Text variant="body">{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
} 