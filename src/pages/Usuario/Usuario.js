import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function Usuario({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});
