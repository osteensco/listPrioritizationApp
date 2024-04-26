import { FlatList, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { styles } from '../../constants/styles';
import { Item } from '../../components/item';







export default function ListPage() {
    
    const List = useLocalSearchParams()
    console.log(List)

    return (
        <View style={styles.container}>
            <Stack.Screen options={{headerTitle:`${List.listName}`}}/>
            <Drawer.Screen/>
            <View style={styles.container}>
                <View style={styles.main_area}>
                    <FlatList
                        data={JSON.parse(List.items)}
                        renderItem={({item}) => <Item text={item} />}
                        // keyExtractor={item => item.id}
                    />
                    <StatusBar style="auto" />
                </View>
            </View>
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>

                </SafeAreaView>
            </View>
        </View>
    )
}



