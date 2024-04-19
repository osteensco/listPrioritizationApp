import { registerRootComponent } from 'expo';
import Home from './home'
import LandingPage from './landing';






export default function App() {

// check user cred cache, if miss:
//
// return (<LandingPage/>)
//
// otherwise go to home screen
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



