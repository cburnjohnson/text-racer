import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Text Racer</Text>
            <Button
                title="Start"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
                titleStyle={{ fontSize: 50 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    header: {
        fontSize: 36,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 180,
        marginTop: 100,
        fontFamily: 'Roboto-Bold'
    }
});

export default App;
