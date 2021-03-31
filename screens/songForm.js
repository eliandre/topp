import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const songSchema = yup.object({
    title: yup.string().required(),
    performer: yup.string().required(),
    body: yup.string()
})

export default function SongForm({ addSong, save, load }) {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', performer: '', body: '' }}
                validationSchema={songSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    addSong(values);
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={globalStyles.input}
                            placeholder='Laulu pealkiri'
                            placeholderTextColor='#F4DB7D'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />

                        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                            style={globalStyles.input}
                            placeholder='Laulu esitaja'
                            placeholderTextColor='#F4DB7D'
                            onChangeText={props.handleChange('performer')}
                            value={props.values.performer}
                            onBlur={props.handleBlur('performer')}
                        />

                        <Text style={globalStyles.errorText}>{props.touched.performer && props.errors.performer}</Text>

                        <TextInput
                            multiline minHeight={60}
                            style={globalStyles.input}
                            placeholder='Laulu lisainfo'
                            placeholderTextColor='#F4DB7D'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />

                        <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <FlatButton text='Sisesta' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
}