import { Text, View, Pressable } from 'react-native';
import { styles } from '../constants/styles'
import { Link } from 'expo-router';
// import { modalVisible, setModalVisible } from '../constants/states';
import { buttonProps } from '../constants/interfaces';







export const Button = ({action, text, linkPath}: buttonProps) => { 

    switch(action) {
        case 'modal':
            return (
                    <Pressable 
                        onPress={() => {console.log("onPress")}} 
                    >
                        {({ pressed }) => (
                            <View style={[styles.button,{ backgroundColor: pressed ? '#4B4B4B' : '#8711f580'  },]}>
                                <Text style={styles.textButton}>{text}</Text>
                            </View>
                        )}
                    </Pressable>
            ) 
        case 'navigation':
            return (
                    <Link href={linkPath} style={styles.button} asChild>
                        <Pressable>
                            {({ pressed }) => (
                                <View style={[styles.button,{ backgroundColor: pressed ? '#4B4B4B' : '#8711f580'  },]}>
                                    <Text style={styles.textButton}>{text}</Text>
                                </View>
                            )}
                        </Pressable>
                    </Link>
            )
    }

}




