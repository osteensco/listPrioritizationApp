import { Text, View, Pressable } from 'react-native';
import { styles } from '../constants/styles'
import { Link } from 'expo-router';




interface buttonProps {
    modal?: null | boolean,
    text: string,
    linkPath: string,
    }
// instead create an additional options interface?
export const Button = ({modal=false, text="test", linkPath=""}: buttonProps) => {
     
    if ({modal}) {
        return (
            <View style={styles.container}>
                    <Pressable style={styles.button}>
                        <Text style={styles.textButton}>{text}</Text>
                    </Pressable>
            </View>
        ) 
    } else {
        return (
            <View style={styles.container}>
                <Link href={linkPath} style={styles.button} asChild>
                    <Pressable>
                        <Text style={styles.textButton}>{text}</Text>
                    </Pressable>
                </Link>
            </View>
        )
    }
}



