import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {
  variant?: "title" | "subtitle" | "body" | "small" | "7xl";
  weight?: "normal" | "medium" | "bold";
  color?: string;
}

export default function Text({
  children,
  variant = "body",
  weight = "normal",
  color,
  className,
  style,
  ...props
}: TextProps) {
  const variantStyles = {
    title: "text-title",
    subtitle: "text-subtitle",
    body: "text-body",
    small: "text-small",
    "7xl": "text-7xl",
  };

  const weightStyles = {
    normal: "font-montserrat",
    medium: "font-montserrat-medium",
    bold: "font-montserrat-bold",
  };

  return (
    <RNText
      className={`
        ${variantStyles[variant]}
        ${weightStyles[weight]}
        ${color ? `text-${color}` : ""}
        ${className || ""}
      `}
      style={[
        {
          fontFamily:
            weight === "normal"
              ? "Montserrat"
              : weight === "medium"
              ? "Montserrat-Medium"
              : "Montserrat-Bold",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
}
