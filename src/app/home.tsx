import { View, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'
import { Stack } from 'expo-router';
import { Item, DATA } from '../components/item'
import { Drawer } from 'expo-router/drawer';
import { Button } from '../components/button';
import { SignInButton } from '../components/signInButton';
import { SignInModal } from '../modals/signInModal';
import { useState } from 'react';



export default function Home() {
    
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
        <Stack.Screen options={{headerTitle:""}}/>
        <Drawer.Screen/>
        <SignInModal/>
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
                <Button action="navigation" text="Create New List" linkPath="/dynamicListPage"/> 
            </View>
            <SafeAreaView style={styles.container}>
                <SignInButton/>
            </SafeAreaView>
        </View>
    </View>
  );
}
