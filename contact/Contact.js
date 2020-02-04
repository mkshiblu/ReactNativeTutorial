import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
} from 'react-native';

export default function Contact({ name, phone }) {

    const [visiblie, setVisible] = useState(false);


    if (visiblie)
        return (
            <View>
                <Text>{name}</Text>
                <Text>{phone}</Text>
            </View>
        );

    return (
        <Button title='Show' onPress={() => setVisible(true)}></Button>);
}