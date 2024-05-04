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
import { ListInput } from '../../components/listInput';







export default function ListPage() {

    // TODO
    // -- refactor list data model
    // -- add edit list name button
    // -- add edit and remove list item buttons

    const [newInputVisible, setNewInputVisible] = useState(false)
    const [newItemText, onChangeText] = useState("new item")
    const [modalVisible, setModalVisible] = useState(false)
    const List = useLocalSearchParams()

    console.log(List)
    
    let listItems = JSON.parse(DB.getString(List.listName as string) as string)
    console.log(listItems)
    let lastIndex = listItems ? listItems.length - 1 : 0

    return (
        <View style={styles.container}>

            <Stack.Screen options={{headerTitle:`${List.listName}`}}/>
            <Drawer.Screen/>

            <PMenuModal visible={modalVisible} setVisible={setModalVisible}/>

            <View style={styles.container}>
                <View style={styles.main_area}>
                    {
                    listItems.length != 0 ? 
                    <FlatList
                        data={listItems}
                        renderItem={
                            ({item, index}) => {
                                console.log(`inputVis: ${newInputVisible}`)
                                console.log(`${index} < ${lastIndex}`)
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
                                                <ListInput
                                                    onChangeText={onChangeText}
                                                    newItemText={newItemText}
                                                    DB={DB}
                                                    setNewInputVisible={setNewInputVisible}
                                                />
                                            </Fragment>
                                    )
                                } else {
                                    console.log("inputvis false rendered")
                                    console.log(`inputVis: ${newInputVisible}`)
                                    console.log(`${index} < ${lastIndex}`)
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
                    :
                    <FlatList
                        data={[0]}
                        renderItem={
                            ({item, index}) => {
                                return (
                                    <Fragment>
                                    <TextInput
                                        onChangeText={onChangeText}
                                        value={newItemText}
                                    />
                                    <ListInput
                                        onChangeText={onChangeText}
                                        newItemText={newItemText}
                                        DB={DB}
                                        setNewInputVisible={setNewInputVisible}
                                    />
                                    </Fragment>
                                )
                            }
                        }
                    />
                    }
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



