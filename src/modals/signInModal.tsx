import { Text, View, Modal } from 'react-native';
import { styles } from '../constants/styles'
import { modalVisible, setModalVisible } from '../constants/states';






export const SignInModal = () => ( 

    <Modal
        animationType="slide" 
        transparent={true} 
        visible={modalVisible} 
        onRequestClose={
            () => setModalVisible(!modalVisible) 
        }
    >

        <View style={styles.container}>
            <View style={styles.modalView}>
                <Text>I'm a modal! :D</Text>
            </View>
        </View>

    </Modal>

)



