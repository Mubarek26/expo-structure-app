import { Pressable, Text } from 'react-native';

type ButtonProps = {
  label: string;
  onPress?: () => void;
  disabled?: boolean;
};

export const Button = ({ label, onPress, disabled }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`rounded-lg px-6 py-3 bg-blue-500 ${disabled ? 'opacity-60' : 'shadow-lg'}`}
    >
      <Text className="text-center text-white font-semibold">{label}</Text>
    </Pressable>
  );
};
