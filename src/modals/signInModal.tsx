import { Text, View, Modal } from 'react-native';
import { styles } from '../constants/styles'







export const SignInModal = () => ( 

    <Modal
        animationType="slide" 
        transparent={true} 
        visible={false} 
        // onRequestClose={
        //     () => setModalVisible(false) 
        // }
    >

        <View style={styles.container}>
            <View style={styles.modalView}>
                <Text>I'm a modal! :D</Text>
            </View>
        </View>

    </Modal>

)



