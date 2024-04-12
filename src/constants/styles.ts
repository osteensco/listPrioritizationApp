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
        backgroundColor: 'rgba(135, 17, 245, .5)',
        borderRadius: 10, 
    },
    main_area: {
        height: '50%',
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'rgba(135, 17, 245, .5)',
        borderRadius: 10,
    },


});



