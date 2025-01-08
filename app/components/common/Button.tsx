import { Pressable, Text } from "react-native";

type ButtonProps = {
  content: string;
};

export default function Button({ content }: ButtonProps) {
  return (
    <Pressable className='bg-blue-500 px-4 py-2 rounded-lg'>
      <Text className='text-white text-center'>{content}</Text>
    </Pressable>
  );
}
