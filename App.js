import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View>
            <Text style={styles.header}>Text Racer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: 'Roboto-Bold'
    }
});

export default App;
