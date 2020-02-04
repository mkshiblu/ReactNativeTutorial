import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    FlatList,
} from 'react-native';
import Contact from './Contact';
import Separatr from '../common/ListSeparator';
import ListSeparator from '../common/ListSeparator';

export default function ContactList({ contacts }) {
    return (
        <FlatList data={contacts}
            renderItem={({ item }) => <Contact name={item.name} phone={item.phone} />}
            ItemSeparatorComponent={() => <ListSeparator />}
            keyExtractor={(item) => item.id.toString()}
        >
        </FlatList>
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