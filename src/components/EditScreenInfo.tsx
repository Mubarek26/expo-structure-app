import { Text, View } from 'react-native';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View>
      <View className="items-center mx-12">
        <Text className="text-lg text-accent text-accent leading-6 text-center">{title}</Text>

        <View className="rounded-md px-1 my-2">
          <Text className="text-primary">{path}</Text>
        </View>

        <Text className="text-lg text-primary leading-6 text-center">{description}</Text>
      </View>
    </View>
  );
};
