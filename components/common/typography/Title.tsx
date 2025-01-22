import { Text } from "react-native";

type TitleProps = {
  children: string;
  className?: string;
};

export default function Title({ children, className = "" }: TitleProps) {
  return (
    <Text className={`text-white text-center text-5xl font-bold ${className}`}>
      {children}
    </Text>
  );
}
