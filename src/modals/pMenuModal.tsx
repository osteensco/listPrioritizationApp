import { View, Modal, Text, Pressable } from 'react-native';
import { styles } from '../constants/styles'
import { modalProps } from '../constants/interfaces';
import { CloseButton } from '../components/closeButton';
import { NavButton } from '../components/navButton';
import { ModalButton } from '../components/modalButton';
import { useState } from 'react';
import { BattleModal } from './battleModal';






export const PMenuModal = ({visible, setVisible}: modalProps) => {
    

    // "prioritize manually" should do the following in order
            // -- make list items draggable
            // -- unhide drag item symbols
            // -- close (aka hide) modal


    // ModalButtons need to close this modal, then open battle modal. may need to place battle modal in listName page?



    const [battleVisible, setBattleVisible] = useState(false)

    return ( 

    <Modal
        animationType="slide" 
        transparent={true} 
        visible={visible} 
        onRequestClose={
            () => setVisible(!visible) 
        }
    >

        <View style={styles.container}>
            <BattleModal visible={battleVisible} setVisible={setBattleVisible}/>
            <View style={styles.modalView}>
                <CloseButton setModalVisible={setVisible}/>
                <Text>Prioritize:    </Text>
                <ModalButton text="All Items" setModalVisible={setBattleVisible} />
                <ModalButton text="New Items" setModalVisible={setBattleVisible} />
                <NavButton text="Manually" linkPath="" clickAction={()=>{}} />
            </View>
        </View>

    </Modal>

)
}






