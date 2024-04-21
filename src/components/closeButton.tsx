import { View, Pressable, Text } from "react-native";
import { styles } from "../constants/styles";
import { modalButtonProps } from "../constants/interfaces";







export const CloseButton = ( { setModalVisible }: modalButtonProps) => {

        return (
                    <Pressable 
                        onPress={
                            () => {
                                setModalVisible(false)
                            }
                        } 
                    >
                        {({ pressed }) => (
                            <View style={[styles.closeButton,{ opacity: pressed ? 100 : 20  },]}>
                                <Text style={styles.xSymbol}>X</Text>
                            </View>
                        )}
                    </Pressable>

        )

}


