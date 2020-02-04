import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    TextInput,
} from 'react-native';

export default function ContactForm(props) {

    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter name"></TextInput>
            <TextInput placeholder="Enter phone"></TextInput>
            <View style={styles.buttonGroup}>
                <Button title='Cancel' color='red' />
                <Button title='Create' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderColor: 'darkgray',
        borderWidth: 1,
        borderRadius: 6
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});