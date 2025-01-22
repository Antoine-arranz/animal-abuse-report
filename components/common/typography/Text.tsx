import { Text as RNText, TextProps as RNTextProps } from 'react-native';

interface TextProps extends RNTextProps {
  variant?: 'title' | 'subtitle' | 'body' | 'small' | '7xl';
  weight?: 'normal' | 'medium' | 'bold';
  color?: string;
}

export default function Text({
  children,
  variant = 'body',
  weight = 'normal',
  color,
  className,
  ...props
}: TextProps) {
  const variantStyles = {
    title: 'text-title',
    subtitle: 'text-subtitle',
    body: 'text-body',
    small: 'text-small',
    '7xl': 'text-7xl',
  };

  const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    bold: 'font-bold',
  };

  return (
    <RNText
      className={`
        ${variantStyles[variant]}
        ${weightStyles[weight]}
        ${color ? `text-${color}` : ''}
        ${className || ''}
      `}
      {...props}
    >
      {children}
    </RNText>
  );
} 