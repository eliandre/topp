import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Modal, Image, AsyncStorage } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import SongForm from './songForm';
import { useEffect } from 'react';

export default function Home({ navigation }) {

    const [ modalOpen, setModalOpen ] = useState(false);

    const [details, setDetails] = useState([
        {title: 'Mama Kin', performer: 'Aerosmith', body: 'Intro ja riffid', link: 'www.google.ee', key: '1'}
    ]);

    const save = async() => {
        try {
            await AsyncStorage.setItem('title', JSON.stringify(details.title));
            await AsyncStorage.setItem('performer', JSON.stringify(details.performer));
            await AsyncStorage.setItem('body', JSON.stringify(details.body));
        }
        catch (err) {
            console.log(err);
        }
    }

    const load = async() => {
        try {
            let title = await AsyncStorage.getItem('title');
            let performer = await AsyncStorage.getItem('performer');
            let body = await AsyncStorage.getItem('body');

            if(title != null) {
                this.setDetails({title});
            }

            if(performer != null) {
                this.setDetails({performer});
            }

            if(body != null) {
                this.setDetails({body});
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        load()
    }, []);

    const addSong = (song) => {
        song.key = Math.random().toString();
        setDetails((currentSongs) => {
            return [song, ...currentSongs];
        });
        setModalOpen(false);
    }

    function deleteSong(_index){
        let tempArr = [...details];
        tempArr.splice(_index, 1);
        setDetails(tempArr)
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='close'
                            size={24}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <SongForm addSong={addSong} save={save} load={load} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={details}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Laul', item)} >
                        <Card>
                            <View style={styles.listItem}>
                                <Text style={globalStyles.titleText}>{item.title} - {item.performer}</Text>
                                <TouchableOpacity onPress={() => deleteSong(index)}>
                                    <Image source={require('../assets/baseline_delete_black_18dp.png')} />
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F4DB7D',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        color: '#F4DB7D'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#1A2238',
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})