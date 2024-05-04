import { Button, TextInput, View } from "react-native"
import { listInputProps } from "../constants/interfaces"







export const ListInput = ({onChangeText, newItemText, DB, setNewInputVisible}: listInputProps) => (
    <View>
    <TextInput
        onChangeText={onChangeText}
        value={newItemText}
    />
    <Button 
        title="Add Item" 
        color="#f194ff"
        onPress={
            () => {
                DB.set(newItemText, "")
                setNewInputVisible(false)
                console.log(DB.getAllKeys())
            } 
        }
    />
    <Button 
        title="X" 
        color="#f194ff"
        onPress={
            () => {
                setNewInputVisible(false)
            } 
        }
    />
    </View>
)



