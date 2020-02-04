import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';


export default function ListSeparator() {
    return <View style={styles.separator}></View>
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: 'black',
        height: 1
    }
});