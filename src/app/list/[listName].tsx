import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { styles } from '../../constants/styles';






export default function ListPage() {
  const List = useLocalSearchParams()
  console.log(List)
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
        <Text>Here's some dynamic data passed to me: </Text>
        <Text>{List.listName}</Text>
        <Text>{List.items}</Text>
        <View> 
            <StatusBar style="auto" />
        </View>
    </View>
  );
}



