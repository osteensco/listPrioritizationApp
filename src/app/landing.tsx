import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'
import { Stack } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Button } from '../components/button';







export default function LandingPage() {
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
    <Button action="navigation" text="Continue" linkPath="/home" />
    <Button action="navigation" text="Sign In" linkPath="" />
        <View> 
            <StatusBar style="auto" />
        </View>
    </View>
  );
}



