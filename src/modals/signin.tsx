import { Text, View, Modal } from 'react-native';
import { styles } from '../constants/styles'
import { modalVisible, setModalVisible } from '../constants/states';




type buttonProps = {
    text: string,
    linkPath: string,
    }

export const SignInModal = ({text, linkPath}: buttonProps) => ( 
    
    <Modal
        animationType="slide" 
        transparent={true} 
        visible={modalVisible} 
        onRequestClose={
            () => { 
                setModalVisible(!modalVisible) 
            }
        }
    >

        <View style={styles.container}>
            <View></View>
            <View><Text>I'm a modal! :D</Text></View>
            <View></View>
        </View>

    </Modal>
)



