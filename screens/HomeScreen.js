import React, { useRef, Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Animated
} from 'react-native';

class DriveAnimation extends Component {
    state = {
        right: new Animated.Value(0)
    };

    onLoad = () => {
        Animated.timing(this.state.right, {
            toValue: 200,
            duration: 50000,
            useNativeDriver: true
        }).start();
    };

    render() {
        return (
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[
                    {
                        right: this.state.right,
                        transform: [
                            {
                                translateX: this.state.right.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [200, 500]
                                })
                            }
                        ]
                    },
                    this.props.style
                ]}
            />
        );
    }
}

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.homeFlex}>
                <Text style={styles.headerText}>
                    Text Racer {''}
                    {/* <Image
                        style={styles.icon}
                        source={require('../assets/images/traffic-light-icon.png')}
                    /> */}
                </Text>
                <View>
                    <DriveAnimation
                        style={styles.raceCar}
                        source={require('../assets/images/race-car.png')}
                    />
                    <Image
                        style={styles.trafficLight}
                        source={require('../assets/images/traffic-light-icon.png')}
                    />
                </View>
                <TouchableOpacity
                    style={styles.startBtn}
                    onPress={() => navigation.navigate('Text Racer')}
                    underlayColor="#fff"
                >
                    <Text style={styles.startBtnText}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BDDDFF',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    homeFlex: {
        flex: 1,
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 50,
        textTransform: 'uppercase',
        fontWeight: 'bold'
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
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    raceCar: {
        position: 'relative',
        right: 200
    },
    trafficLight: {
        position: 'absolute',
        right: 50,
        top: -50,
        transform: [{ rotate: '180deg' }]
    }
});
