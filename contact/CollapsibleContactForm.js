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
import ContactForm from './ContactForm';

export default function CollapsibleContactForm(props) {
    const [expanded, setExpanded] = useState(false);

    if (expanded) {
        return <ContactForm />
    }
    return (
        <Button title='+' onPress={() => setExpanded(true)} />
    );
}
