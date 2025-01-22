import { Text } from "react-native";

type SubTitleProps = {
  children: string;
  className?: string;
};
export default function SubTitle({ children, className = "" }: SubTitleProps) {
  return (
    <Text className={`text-white text-4xl font-bold text-center ${className}`}>
      {children}
    </Text>
  );
}
