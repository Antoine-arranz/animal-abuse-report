import { Pressable } from "react-native";

type ButtonProps = {
  content: string;
};

export default function Button(props: ButtonProps) {
  return <Pressable>{props.content}</Pressable>;
}
