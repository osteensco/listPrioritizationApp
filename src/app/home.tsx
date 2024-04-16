import { View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'
import { Stack } from 'expo-router';
import { Item, DATA } from '../components/item'



export default function Home() {
  return (
    <View style={styles.container}>
        <Stack.Screen options={{headerTitle:""}}/>
        <View style={styles.main_area}>
            <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={item => item.id}
            />
            <StatusBar style="auto" />
        </View>
    </View>
  );
}
