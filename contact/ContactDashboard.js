import React, { useState, useCallback } from 'react';
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
    const data = [
        { id: 1, name: "John Doe", phone: "434-434-4343" },
        { id: 2, name: "Rohn Davis", phone: "534-434-4343" },
        { id: 3, name: "Aohn Doe", phone: "434-434-4343" },
        { id: 4, name: "Robin Hood", phone: "434-434-4343" },
        { id: 5, name: "Jane Doe", phone: "534-434-4343" },
        { id: 6, name: "Robin Hood", phone: "434-434-4343" },
        { id: 7, name: "Jane Doe", phone: "534-434-4343" },
        { id: 8, name: "Robin Hood", phone: "434-434-4343" },
        { id: 9, name: "Jane Doe", phone: "534-434-4343" },
    ];

    const [contacts, setContacts] = useState(data);

    const handleSubmit = useCallback(({ name, phone }) => {
        setContacts([{ id: contacts.length + 1, name, phone }, ...contacts])
    });

    return (
        <View style={styles.container}>
            <CollapsibleContactForm style={styles.createForm}
                onSubmit={handleSubmit} />
            <ContactList contacts={contacts} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    createForm: {
        margin: 10,
        marginBottom: 10
    }
});
