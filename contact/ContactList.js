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

export default function ContactList(props) {

    const data = [
        { id: 1, name: "John Doe", phone: "434-434-4343" },
        { id: 2, name: "Rohn Davis", phone: "534-434-4343" },
        { id: 3, name: "Aohn Doe", phone: "434-434-4343" },
        { id: 4, name: "Robin Hood", phone: "434-434-4343" },
        { id: 5, name: "Jane Doe", phone: "534-434-4343" },
    ];

    return (
        <FlatList data={data}
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