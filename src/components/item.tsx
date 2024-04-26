import { Text, View } from 'react-native';
import { styles } from '../constants/styles'
import { itemProps } from '../constants/interfaces';










export const Item = ({text}: itemProps) => (
    <View style={styles.list_item}>
        <Text style={styles.textHeader}>{text}</Text>
    </View>
)




