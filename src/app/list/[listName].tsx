import { FlatList, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { styles } from '../../constants/styles';
import { Item } from '../../components/item';
import { ModalButton } from '../../components/modalButton';
import { useState } from 'react';
import { PMenuModal } from '../../modals/pMenuModal';







export default function ListPage() {
    
    const [modalVisible, setModalVisible] = useState(false)
    const List = useLocalSearchParams()
    console.log(List)

    return (
        <View style={styles.container}>

            <Stack.Screen options={{headerTitle:`${List.listName}`}}/>
            <Drawer.Screen/>

            <PMenuModal visible={modalVisible} setVisible={setModalVisible}/>

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
                    <ModalButton setModalVisible={setModalVisible} text="Prioritize"/>
                </SafeAreaView>
            </View>
        </View>
    )
}



