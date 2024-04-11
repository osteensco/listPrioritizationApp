import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../constants/styles'
import Home from './home'
import LandingPage from './landing';

export default function App() {

// check user cred cache, if miss:
//
// return (<LandingPage/>)
//
// otherwise
    let cache_creds = false
    
    if (!cache_creds) {
        return (
            <LandingPage/>
        );
    }
    return (

        <Home/>

    );
}



registerRootComponent(App);


