import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WordsPerMinute({ inputValue, time }) {
    const [wpm, setWpm] = useState(0);

    useEffect(() => {
        inputValueLength = inputValue.split(' ').length;
        if (inputValue === '') {
            setWpm(inputValueLength - 1);
        } else {
            setWpm(inputValueLength);
        }
    }, [time]);

    let inputValueLength;

    return (
        <View style={styles.container}>
            <Text>Words Per Minute: </Text>
            <Text>{wpm}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
