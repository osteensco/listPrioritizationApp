import { StyleSheet } from 'react-native';





export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212529',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#8711F5',
    },
    textButton: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
    }, 
    button: {
        minHeight: '10%',
        minWidth: '60%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 
    },
    list_item: {
        backgroundColor: '#4B4B4B',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,                        
    },
    main_area: {
        height: '50%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#8711f580',
        borderRadius: 10,
    },
  modalView: {
          margin: 20,
              backgroundColor: 'white',
                  borderRadius: 20,
                      padding: 35,
                          alignItems: 'center',
                              shadowColor: '#000',
                                  shadowOffset: {
                                            width: 0,
                                                  height: 2,
                                                      },
                                                          shadowOpacity: 0.25,
                                                              shadowRadius: 4,
                                                                  elevation: 5,
                                                                    },

});



