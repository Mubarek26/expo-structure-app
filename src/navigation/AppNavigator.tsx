import { View } from 'react-native';
import { HomeScreen } from '@/screens/HomeScreen';


export const AppNavigator = () => {
  return (
    <View className="flex-1">
      <HomeScreen />
    </View>
  );
};
