import { Text, View, Pressable } from 'react-native';
import { styles } from '../constants/styles'
import { Link } from 'expo-router';




type buttonProps = {
    text: string,
    linkPath: string,
    }

export const Button = ({text, linkPath}: buttonProps) => ( 
    <View style={styles.container}>
        <Link href={linkPath} style={styles.button} asChild>
            <Pressable>
                <Text style={styles.textButton}>{text}</Text>
            </Pressable>
        </Link>
    </View>
)




