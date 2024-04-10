import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../constants/styles'
import Home from './home'


export default function App() {
  return (
    <Home></Home>
  );
}



registerRootComponent(App);


