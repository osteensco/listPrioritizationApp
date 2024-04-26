import { View, Pressable, Text } from "react-native";
import { styles } from "../constants/styles";
import { closeButtonProps } from "../constants/interfaces";







export const CloseButton = ( { setModalVisible }: closeButtonProps) => {

    return (
        <Pressable 
            onPress={ 
                () => { setModalVisible(false) }
            } 
        >
            {
                ({ pressed }) => (
                    <View style={[styles.closeButton,{ opacity: pressed ? 20 : 100  },]}>
                        <Text style={styles.xSymbol}>X</Text>
                    </View>
                )
            }
        </Pressable>

    )

}


