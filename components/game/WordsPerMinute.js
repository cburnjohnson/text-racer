import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WordsPerMinute() {
    return (
        <View style={styles.container}>
            <Text>Words Per Minute: </Text>
            <Text>0</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
