import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>{ title }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1A2238',
        letterSpacing: 1
    }
})