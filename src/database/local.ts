import { MMKV } from 'react-native-mmkv'

export const DB = new MMKV()

export function dbTest() {
    if (!DB.getBoolean('working')) {
        DB.set('working', true)
        console.log("created working key")
    } 
    console.log(`is MMKV working? ${DB.getBoolean('working')}`)
}



