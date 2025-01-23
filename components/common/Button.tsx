import { Pressable, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

interface ButtonProps {
  content: string;
  color?: string;
  icon?: keyof typeof FontAwesome.glyphMap;
  onPress?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}

export default function Button({
  content,
  color = "bg-primary",
  icon,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
}: ButtonProps) {
  const variantStyles = {
    primary: `${color} text-white`,
    secondary: 'bg-secondary text-white',
    outline: 'bg-transparent border-2 border-primary text-primary',
  };

  const sizeStyles = {
    small: 'py-2 px-4 text-small',
    medium: 'py-3 px-6 text-body',
    large: 'py-4 px-8 text-subtitle',
  };

  return (
    <Link href='/formulaire' asChild>
    <Pressable 
      className={`
        ${variantStyles[variant]} 
        ${sizeStyles[size]} 
        rounded-button 
        flex-row 
        items-center 
        justify-center
        ${disabled ? 'opacity-50' : ''}
      `}
      onPress={onPress}
      disabled={disabled}
    >
      {icon && (
        <FontAwesome
          name={icon}
          size={size === 'large' ? 24 : size === 'medium' ? 18 : 16}
          color={variant === 'outline' ? '#d41116' : 'white'}
          style={{ marginRight: 8 }}
        />
      )}
      <Text className={`
        font-medium 
        text-center
        ${variant === 'outline' ? 'text-primary' : 'text-white'}
      `}>
        {content}
      </Text>
      </Pressable>
      </Link>
  );
} 