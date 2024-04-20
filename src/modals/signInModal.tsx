import { Text, View, Modal } from 'react-native';
import { styles } from '../constants/styles'
import { modalProps } from '../constants/interfaces';







export const SignInModal = ({visible, setVisible}: modalProps) => ( 

    <Modal
        animationType="slide" 
        transparent={true} 
        visible={visible} 
        onRequestClose={
            () => setVisible(!visible) 
        }
    >

        <View style={styles.container}>
            <View style={styles.modalView}>
                <Text>I'm a modal! :D</Text>
            </View>
        </View>

    </Modal>

)



