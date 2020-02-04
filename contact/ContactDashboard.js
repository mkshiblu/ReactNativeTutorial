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
import ContactList from './ContactList';
import ContactForm from './ContactForm';

export default function ContactDashboard(props) {

    return (
        <View>
            <Button title='+' />
            <ContactForm/>
            <ContactList/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontWeight: 'bold'
    }
});