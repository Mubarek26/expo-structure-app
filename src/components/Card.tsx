import { View } from 'react-native';

export const Card = ({ children }: { children: React.ReactNode }) => (
  <View className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">{children}</View>
);
