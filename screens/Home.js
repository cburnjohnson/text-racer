import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Home() {
    return (
        <View style={styles.homeHeader}>
            <Text style={styles.headerText}>Text Racer</Text>
            <Button
                style={styles.headerBtn}
                title="Start"
                accessibilityLabel="Start button"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    homeHeader: {
        flex: 1,
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 50
    },
    headerBtn: {}
});
