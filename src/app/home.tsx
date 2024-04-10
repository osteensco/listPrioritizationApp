import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'




export default function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.main_area}>
            <Text style={styles.header}>Hello android....</Text>
            <StatusBar style="auto" />
        </View>
    </View>
  );
}
