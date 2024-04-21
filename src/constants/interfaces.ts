



export interface listScreenProps {
    name: string,
    items: string[],
}



export interface listLinkParamProps {
    name: string,
}



export interface listLinkProps {
    pathname: string,
    params: listLinkParamProps,
}



export interface navButtonProps {
    text: string,
    linkPath: string | listLinkProps,
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
}



