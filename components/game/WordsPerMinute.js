import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WordsPerMinute({ inputValue, time, wpm, setWpm }) {
    useEffect(() => {
        setWpm(calculateWpm());
    }, [time]);


    const calculateWpm = () => {
       const inputValueLength = inputValue.split('').length;
       const currentWpm = (inputValueLength/5) / 60;
       return currentWpm;
    }

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
