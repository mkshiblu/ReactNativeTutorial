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
import ContactForm from './ContactForm';

export default function CollapsibleContactForm({ onSubmit }) {
    const [expanded, setExpanded] = useState(false);

    const handleCancel = useCallback(() => {
        setExpanded(false);
    });

    const handleSubmit = useCallback(({ name, phone }) => {
        setExpanded(false);
        onSubmit({ name, phone });
    });

    if (expanded) {
        return <ContactForm onCancel={handleCancel} onSubmit={handleSubmit} />
    }
    return (
        <Button title='+' onPress={() => setExpanded(true)} />
    );
}
