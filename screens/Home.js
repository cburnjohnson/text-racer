import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Text Racer</Text>
            <Button
                title="Start"
                color="green"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'lightblue'
    },
    header: {
        fontSize: 36,
        textTransform: 'uppercase',
        textAlign: 'center',
        marginBottom: 200,
        marginTop: 100,
        fontFamily: 'Roboto-Bold'
    }
});

export default Home;
