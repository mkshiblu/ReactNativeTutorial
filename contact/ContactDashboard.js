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
import CollapsibleContactForm from './CollapsibleContactForm';

export default function ContactDashboard(props) {

    return (
        <View>
            <CollapsibleContactForm style={styles.form} />
            <ContactList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    form: {
       padding: 10
    }
});