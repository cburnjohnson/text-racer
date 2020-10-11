import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WordsPerMinute({ inputValue, time, wpm, setWpm }) {
    useEffect(() => {
        inputValueLength = inputValue.split(' ').length;
        if (inputValue === '') {
            setWpm(0);
        } else {
            setWpm(Math.round((inputValueLength * 60) / time));
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
        justifyContent: 'center',
    },
});
