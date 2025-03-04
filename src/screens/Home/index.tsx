import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { homeStyles } from './style';

export default function Home() {
  return (
    <View style={homeStyles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  )
}
