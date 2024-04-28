import { Alert, Button, FlatList, SafeAreaView, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { styles } from '../../constants/styles';
import { Item } from '../../components/item';
import { ModalButton } from '../../components/modalButton';
import { Fragment, useState } from 'react';
import { PMenuModal } from '../../modals/pMenuModal';
import { TouchableOpacity } from 'react-native-gesture-handler';







export default function ListPage() {
    
    const [modalVisible, setModalVisible] = useState(false)
    const List = useLocalSearchParams()
    console.log(List)
    let listItems = JSON.parse(List.items)
    let lastIndex = listItems ? listItems.length - 1 : 0


    return (
        <View style={styles.container}>

            <Stack.Screen options={{headerTitle:`${List.listName}`}}/>
            <Drawer.Screen/>

            <PMenuModal visible={modalVisible} setVisible={setModalVisible}/>

            <View style={styles.container}>
                <View style={styles.main_area}>
                    <FlatList
                        data={listItems}
                        renderItem={
                            ({item, index}) => {
                                return(
                                    index < lastIndex ?
                                        <TouchableOpacity>
                                            <Item text={item} />
                                        </TouchableOpacity>
                                    :
                                        <Fragment>
                                            <TouchableOpacity>
                                                <Item text={item} />
                                            </TouchableOpacity>
                                            <Button 
                                                title="Add Item" 
                                                color="#f194ff"
                                                onPress={
                                                    () => Alert.alert('Added pressed')
                                                }
                                            />
                                        
                                        </Fragment>
                                )
                            }
                        }
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



