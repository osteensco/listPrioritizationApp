import { View, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'
import { Stack } from 'expo-router';
import { Item, DATA } from '../components/item'
import { Drawer } from 'expo-router/drawer';
import { SignInButton } from '../components/signInButton';
import { SignInModal } from '../modals/signInModal';
import { useState } from 'react';
import { NavButton } from '../components/navButton';





export default function Home() {
   
    const [modalVisible, setModalVisible] = useState(false)
  
    return (
        <View style={styles.container}>
            <Stack.Screen options={{headerTitle:""}}/>
            <Drawer.Screen/>
            <SignInModal visible={modalVisible} setVisible={setModalVisible}/>
            <View style={styles.container}>
                <View style={styles.main_area}>
                    <FlatList
                        data={DATA}
                        renderItem={({item}) => <Item text={item.title} />}
                        keyExtractor={item => item.id}
                    />
                    <StatusBar style="auto" />
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.container}>
                    <NavButton 
                        text="Create New List" 
                        linkPath={
                           {pathname: "/list/[name]", params: {name: "new list", items: ['item1', 'item2', 'item3']}}
                        }
                    /> 
                </View>
                <SafeAreaView style={styles.container}>
                    <SignInButton setModalVisible={setModalVisible}/>
                </SafeAreaView>
            </View>
        </View>
  )

}
