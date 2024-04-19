import { Text, View, Pressable } from 'react-native';
import { styles } from '../constants/styles'
import { Link } from 'expo-router';
import { modalVisible, setModalVisible } from '../constants/states';
import { buttonProps } from '../constants/interfaces';






export const Button = ({action, text, linkPath}: buttonProps) => {
     
    switch(action) {
        case 'modal':
            return (
                    <Pressable 
                        style={styles.button}
                        onPress={() => setModalVisible(true)} 
                    >
                        <Text style={styles.textButton}>{text}</Text>
                    </Pressable>
            ) 
        case 'navigation':
            return (
                    <Link href={linkPath} style={styles.button} asChild>
                        <Pressable>
                            <Text style={styles.textButton}>{text}</Text>
                        </Pressable>
                    </Link>
            )
    }

}




