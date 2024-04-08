import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../constants/styles'



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello android....</Text>
      <StatusBar style="auto" />
    </View>
  );
}



registerRootComponent(App);


