import { Pressable, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from '../constants/styles'
import { Link } from 'expo-router';



export default function LandingPage() {
  return (
    <View style={styles.container}>
        <View style={styles.container}>
            <Link replace href="/home" asChild>
                <Pressable>
                    <Text>Get Started!</Text>
                </Pressable>
            </Link>
        </View> 
        <View style={styles.container}> 
            <StatusBar style="auto" />
        </View>
    </View>
  );
}



