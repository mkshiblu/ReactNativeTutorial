import React, { useState, useCallback } from 'react';
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
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleCreate = useCallback(() => {
        props.onSubmit({ name, phone });
    });

    return (
        <View style={styles.container}>
            <TextInput placeholder="Enter name" onChangeText={(text) => setName(text)} />
            <TextInput placeholder="Enter phone" onChangeText={(text) => setPhone(text)} />
            <View style={styles.buttonGroup}>
                <Button title='Cancel' color='red' onPress={props.onCancel} />
                <Button title='Create' onPress={handleCreate} />
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