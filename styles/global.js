import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1A2238',
    },
    titleText: {
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#1A2238'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#F4DB7D',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        color: '#F4DB7D'
    },
    errorText: {
        color: '#FF6A3D',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    }
})