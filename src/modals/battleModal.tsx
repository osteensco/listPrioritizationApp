// modal for head to head priority goes here
// user picks the more important list item of two choices




import { Text, View, Modal } from 'react-native';
import { styles } from '../constants/styles'
import { modalProps } from '../constants/interfaces';
import { CloseButton } from '../components/closeButton';







export const BattleModal = ({visible, setVisible}: modalProps) => ( 

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
            <CloseButton setModalVisible={setVisible}/>
            <Text>Battle modal!!!!!</Text>            
            </View>
        </View>

    </Modal>

)





