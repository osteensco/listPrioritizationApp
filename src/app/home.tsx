import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'
import { Stack } from 'expo-router';




export default function Home() {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{headerTitle:""}}/>
        <View style={styles.main_area}>
            <Text style={styles.textHeader}>Hello android....</Text>
            <StatusBar style="auto" />
        </View>
    </View>
  );
}
