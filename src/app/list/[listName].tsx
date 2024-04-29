import { Alert, Button, FlatList, SafeAreaView, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { styles } from '../../constants/styles';
import { Item } from '../../components/item';
import { ModalButton } from '../../components/modalButton';
import { Fragment, useState } from 'react';
import { PMenuModal } from '../../modals/pMenuModal';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DB } from '../../database/local';







export default function ListPage() {

    // add state for changing 'Add Item' button to minimize right and show a text input field
    const [newInputVisible, setNewInputVisible] = useState(false)
    const [newItemText, onChangeText] = useState("")
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
                                if (newInputVisible) {
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
                                                <TextInput
                                                    onChangeText={onChangeText}
                                                    value={newItemText}
                                                />
                                                <Button 
                                                    title="Add Item" 
                                                    color="#f194ff"
                                                    onPress={
                                                        () => {
                                                            DB.set(newItemText, "")
                                                            setNewInputVisible(false)
                                                        } 
                                                    }
                                                />
                                                <Button 
                                                    title="X" 
                                                    color="#f194ff"
                                                    onPress={
                                                        () => {
                                                            setNewInputVisible(false)
                                                        } 
                                                    }
                                                />
                                            </Fragment>
                                    )
                                } else {
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
                                                    onPress={()=>setNewInputVisible(true)}
                                                />
                                            </Fragment>
                                    )
                                }
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



