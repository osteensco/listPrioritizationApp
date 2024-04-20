import { Text, View, Pressable } from 'react-native';
import { styles } from '../constants/styles'
import { Link } from 'expo-router';
import { navButtonProps } from '../constants/interfaces';








export const NavButton = ({text, linkPath}: navButtonProps) => { 

    return (
        <Link href={linkPath} asChild>
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






