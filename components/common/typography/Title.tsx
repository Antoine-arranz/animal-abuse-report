import Text from "@/components/common/typography/Text";

type TitleProps = {
  children: string;
  className?: string;
};

export default function Title({ children, className = "" }: TitleProps) {
  return (
    <Text
      variant='title'
      weight='bold'
      color='white'
      className={`text-center text-5xl ${className}`}
    >
      {children}
    </Text>
  );
}
