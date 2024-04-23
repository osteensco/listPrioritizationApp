import { View, Pressable, Text } from "react-native";
import { styles } from "../constants/styles";
import { modalButtonProps } from "../constants/interfaces";







export const SignInButton = ( { setModalVisible }: modalButtonProps) => {

    return (
        <Pressable 
            onPress={
                () => {setModalVisible(true)}
            } 
        >
            {
                ({ pressed }) => (
                    <View style={[styles.button,{ backgroundColor: pressed ? '#4B4B4B' : '#8711f580'  },]}>
                        <Text style={styles.textButton}>Sign In</Text>
                    </View>
                )
            }
        </Pressable>

        )

}


