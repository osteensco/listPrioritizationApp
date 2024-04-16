import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { View } from 'react-native-reanimated/lib/typescript/Animated';





export default function Layout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
            <Drawer.Screen 
                name="home" 
                // options={{
                //     drawerLabel: "landing",
                //     title: "test",
                // }}
            />

        <Stack.Screen
            name="landing"
            options={{
                headerStyle: {
                    backgroundColor: '#8711F5',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
        >
        </Stack.Screen>
        </Drawer>
        </GestureHandlerRootView>
  );
}



