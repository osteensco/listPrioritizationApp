import { View, Modal } from 'react-native';
import { styles } from '../constants/styles'
import { modalProps } from '../constants/interfaces';
import { CloseButton } from '../components/closeButton';
import { NavButton } from '../components/navButton';







export const PMenuModal = ({visible, setVisible}: modalProps) => ( 

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
                <NavButton text="Prioritize All Items" linkPath="" clickAction={()=>{}}/>
                <NavButton text="Prioritize New Items" linkPath="" clickAction={()=>{}} />
                <NavButton text="Prioritize Manually" linkPath="" clickAction={()=>{}} />
            </View>
        </View>

    </Modal>

)







