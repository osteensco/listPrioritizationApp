import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'
import { Link } from 'expo-router';



export default function LandingPage() {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <Link replace href="/home" style={styles.button} asChild>
                <Pressable>
                    <Text style={styles.textButton}>
                        Continue
                    </Text>
                </Pressable>
            </Link>
        </View> 
        <View style={styles.container}>
            <Link replace href="" style={styles.button} asChild>
                <Pressable>
                    <Text style={styles.textButton}>
                        Sign In
                    </Text>
                </Pressable>
            </Link>
        </View> 
        <View> 
            <StatusBar style="auto" />
        </View>
    </View>
  );
}



