import { TextInput, View } from 'react-native';

type InputProps = {
  placeholder?: string;
  secure?: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

export const Input = ({ placeholder, secure, value, onChange }: InputProps) => {
  return (
    <View className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3">
      <TextInput
        value={value}
        onChangeText={onChange}
        secureTextEntry={secure}
        placeholder={placeholder}
        className="text-base text-gray-900"
      />
    </View>
  );
};
