import { View, Text } from 'react-native';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { ScreenContent } from '@/components/ScreenContent';

export const HomeScreen = () => {
  return (
    <ScreenContent title="Home" path="src/screens/HomeScreen.tsx">
      <View className="space-y-4">
        <Card>
          <Text className="text-lg font-semibold">Welcome back!</Text>
          <Text className="text-sm text-gray-500">Here is a quick summary of your day.</Text>
        </Card>
        <Button label="Go to profile" onPress={() => {}} />
      </View>
    </ScreenContent>
  );
};
