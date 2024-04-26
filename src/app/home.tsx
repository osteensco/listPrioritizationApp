import { View, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'
import { Stack } from 'expo-router';
import { Item } from '../components/item'
import { Drawer } from 'expo-router/drawer';
import { SignInButton } from '../components/signInButton';
import { SignInModal } from '../modals/signInModal';
import { useState } from 'react';
import { NavButton } from '../components/navButton';
import { DB } from '../database/local';





export default function Home() {
   
    const [modalVisible, setModalVisible] = useState(false)
 
    const LISTNAMES = DB.getAllKeys()
    const ITEMS = JSON.stringify(["listItem_1", "listItem_2"]) 
    return (
        <View style={styles.container}>
            <Stack.Screen options={{headerTitle:""}}/>
            <Drawer.Screen/>
            <SignInModal visible={modalVisible} setVisible={setModalVisible}/>
            <View style={styles.container}>
                <View style={styles.main_area}>
                    <FlatList
                        data={LISTNAMES}
                        renderItem={({item}) => <Item text={item} />}
                        // keyExtractor={item => item.id}
                    />
                    <StatusBar style="auto" />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.container}>
                    <NavButton 
                        text="Create New List" 
                        linkPath={
                           {pathname: "/list/[name]", params: {name: "new list", items: ITEMS}}
                        }
                        clickAction={()=>{DB.set("new list", ITEMS)}}
                    /> 
                </View>
                <SafeAreaView style={styles.container}>
                    <SignInButton setModalVisible={setModalVisible}/>
                </SafeAreaView>
            </View>
        </View>
  )

}
