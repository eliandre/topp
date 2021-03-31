import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Song({ navigation }) {

    const searchLink = 'https://www.songsterr.com/?pattern='+navigation.getParam('performer')+'-'+navigation.getParam('title');

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={styles.text}>{navigation.getParam('title')}</Text>
                <Text style={styles.text}>{navigation.getParam('performer')}</Text>
                <Text style={styles.text}>{navigation.getParam('body')}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(searchLink)}>
                    <Text style={styles.linkText}>Link</Text>
                </TouchableOpacity>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#1A2238',
        fontSize: 16
    },
    linkText: {
        textDecorationLine: 'underline',
        color: '#1A2238',
    }
})