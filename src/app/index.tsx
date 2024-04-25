import { registerRootComponent } from 'expo'
import Home from './home'
import LandingPage from './landing'
import { DB, dbTest } from '../database/local'






export default function App() {
    

// check user cred cache, if miss:
//
// return (<LandingPage/>)
//
// otherwise go to home screen
    console.log(DB.getAllKeys())
    DB.clearAll()
    console.log(DB.getAllKeys())
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



