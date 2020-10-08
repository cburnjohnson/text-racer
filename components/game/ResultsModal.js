import React from 'react';
import { View, Text, Modal } from 'react-native';

export default function ResultsModal({ modalVisible }) {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
            }}
        >
            <View>
                <Text>Modal Test</Text>
            </View>
        </Modal>
    );
}
