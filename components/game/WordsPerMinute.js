import React, { useEffect, useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import gameContext from '../../context/game/gameContext';

export default function WordsPerMinute() {

    const {inputValue, wpm, setWpm, counter} = useContext(gameContext);

    useEffect(() => {
        setWpm(calculateWpm());
    }, [counter]);

    const calculateWpm = () => {
        const inputValueLength = inputValue.split('').length;
        const currentWpm = inputValueLength / 5 / 60;
        return currentWpm;
    };

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
