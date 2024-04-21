import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { styles } from '../../constants/styles';






export default function ListPage() {
  return (
    <View style={styles.container}>
        <Stack.Screen
            options={{
            headerShown: false,
            }}
        />
        <Drawer.Screen
            options={{
                headerShown: false,
            }}
        />
        <Text>I'm a dynamic list page! :D</Text>
        <View> 
            <StatusBar style="auto" />
        </View>
    </View>
  );
}



