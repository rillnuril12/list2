import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/list.png'

const SplashScreen = ({ navigation }) => {
    setTimeout(() => {
        navigation.replace('LoginScreen');
    }, 3000);
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.text}>LIST</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    text: {
        color: 'black',
        fontSize: 30,
        marginTop: 20,
    },
})

export default SplashScreen