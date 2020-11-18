import React, { useState, useContext } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import gameContext from '../../context/game/gameContext';

const ResultsModal = () => {
    const { resetGame, wpm, modalVisible, counter } = useContext(gameContext);

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTextHeader}>Results</Text>
                        <View style={styles.modalInfo}>
                            <View>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Time
                                </Text>
                                <Text
                                    style={{
                                        marginBottom: 10,
                                        textAlign: 'center'
                                    }}
                                >
                                    {counter} Seconds
                                </Text>
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    WPM
                                </Text>
                                <Text
                                    style={{
                                        marginBottom: 20,
                                        textAlign: 'center'
                                    }}
                                >
                                    {wpm}
                                </Text>
                            </View>

                            <TouchableHighlight
                                style={styles.resetBtn}
                                onPress={() => {
                                    resetGame();
                                }}
                            >
                                <Text style={styles.resetBtnText}>
                                    Play Again
                                </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        position: 'absolute',
        top: 200,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 50,
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    resetBtn: {
        textAlign: 'center',
        backgroundColor: '#1E6738',
        borderRadius: 20,
        padding: 12,
        elevation: 2
    },
    resetBtnText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    modalTextHeader: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 26
    },
    modalInfo: {
        alignItems: 'center'
    }
});

export default ResultsModal;
