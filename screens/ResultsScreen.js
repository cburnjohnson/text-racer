import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ResultsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Your Results</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
    },
});
