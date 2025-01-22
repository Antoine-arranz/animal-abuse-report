import { View, ViewProps } from "react-native";
import { ReactNode } from "react";

interface CardProps extends ViewProps {
  children: ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'small' | 'medium' | 'large';
}

export default function Card({ 
  children, 
  variant = 'elevated',
  padding = 'medium',
  style,
  ...props 
}: CardProps) {
  const variantStyles = {
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-white border border-secondary-lightGray',
    filled: 'bg-secondary-gray',
  };

  const paddingStyles = {
    none: 'p-0',
    small: 'p-3',
    medium: 'p-6',
    large: 'p-8',
  };

  return (
    <View 
      className={`
        ${variantStyles[variant]}
        ${paddingStyles[padding]}
        rounded-card
        m-4
      `}
      {...props}
    >
      {children}
    </View>
  );
}