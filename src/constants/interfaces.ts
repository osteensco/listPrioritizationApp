import { MMKV } from "react-native-mmkv"




export interface listScreenProps {
    name: string,
    items: string[],
}



export interface listLinkParamProps {
    name: string,
    items: string,
}



export interface listLinkProps {
    pathname: string,
    params: listLinkParamProps,
}



export interface navButtonProps {
    text: string,
    linkPath: string | listLinkProps,
    clickAction: Function,
}



export interface itemProps {
    text: string
}



export interface modalProps {
    visible: boolean,
    setVisible: Function,
}



export interface modalButtonProps {
    setModalVisible: Function,
    text: string,
}



export interface closeButtonProps {
    setModalVisible: Function,
}



export interface listInputProps {
    onChangeText: React.Dispatch<React.SetStateAction<string>>, 
    newItemText: string, 
    DB: MMKV, 
    setNewInputVisible: Function,
} 


