import FontAwesome from "@expo/vector-icons/FontAwesome";

type WarningIconProps = {
  color: string;
};

export default function WarningIcon({ color }: WarningIconProps) {
  return (
    <FontAwesome size={20} name='warning' color={color} className='text-base' />
  );
}
