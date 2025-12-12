import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import '../global.css';
export default function Home() {
  return (
    <View className='items-center text-center justify-center flex-1'>
      <Text className='text-lg font-bold '>Welcome back!</Text>
      <Link href="/onboarding">Go to Onboarding</Link>
    </View>
  );
}
