import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Logo from '../assets/list.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation();
    const [nip, setNip] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (value) => {
        console.log('value', value);
        try {
            const response = await axios.post('http://192.168.1.28:3300/users/login', {
                nip: value.nip,
                password: value.password
            })
            if (response.data.status == 200) {
                console.log('response', response.data)
                navigation.navigate('Homepage')
                // AsyncStorage.setItem
                await AsyncStorage.setItem('nip', value.nip)
                await AsyncStorage.setItem('password', value.password)
                await AsyncStorage.setItem('name', response.data.data.nama)
            }
        } catch (error) {
            console.log(error.message)
            ToastAndroid.show("nip dan password tidak boleh salah", ToastAndroid.SHORT)
        }
    }
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text
                style={{
                    color: 'black',
                    fontSize: 30,
                    marginBottom: 20,
                }}>
                TO DO LIST
            </Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="nip"
                    placeholderTextColor="white"
                    onChangeText={(nip) => setNip(nip)}
                    value={nip}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
                <TouchableOpacity
                    style={styles.button}
                    // onPress={async () => {
                    //     await handleLogin({ nip, password });
                    //  navigation.navigate('Homepage')}}
                     >
                        
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Don't have an account?
                    <Text
                        style={{ fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('RegisterScreen')}
                    > Sign Up</Text>
                </Text>
            </View>
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
        width: 150,
        height: 150,
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#333',
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: '#000',
        fontSize: 20,
    },
    text: {
        color: 'black',
        marginTop: 20,
        textAlign: 'center',
        fontSize: 16,
    },
})

export default Login