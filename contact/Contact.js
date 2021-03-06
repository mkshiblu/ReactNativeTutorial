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

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text>{phone}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#EEEEEE'
    },
    title: {
        fontWeight: 'bold'
    }
});