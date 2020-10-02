import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert,
    TouchableOpacity
} from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.homeHeader}>
            <Text style={styles.headerText}>Text Racer</Text>
            <TouchableOpacity
                style={styles.startBtn}
                onPress={() => navigation.navigate('Game')}
                underlayColor="#fff"
            >
                <Text style={styles.startBtnText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    homeHeader: {
        flex: 1,
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 60
    },
    startBtn: {
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: '#1E6738',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff'
    },
    startBtnText: {
        color: '#fff',
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        textTransform: 'uppercase'
    }
});
